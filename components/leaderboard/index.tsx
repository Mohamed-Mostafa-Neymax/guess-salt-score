'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { IoVolumeMuteSharp } from "react-icons/io5";
import { IoVolumeHigh } from "react-icons/io5";


interface LeaderboardItem {
    id: number;
    name: string;
    score: number;
    created_at: string;
    updated_at: string;
}

const Leaderboard: React.FC = () => {
    const [isMute, setIsMute] = useState<boolean>(true);
    const [firstLeaderboard, setFirstLeaderboard] = useState<LeaderboardItem[]>([]);
    const [secondLeaderboard, setSecondLeaderboard] = useState<LeaderboardItem[]>([]);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        getLeaderboard();
        const interval = setInterval(() => { getLeaderboard(); }, 10000);
        return () => { clearInterval(interval); }
    }, [isMute]);

    async function getLeaderboard() {
        const request = await fetch(
            'https://cms-saltscore.blueholding.co.uk/api/leaderboard',
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    api_key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFkaGFtX0JMVUUiLCJpYXQiOjE1MTYyMzkwMjJ9.mNoXtQAe1znwvy0z9c0g_RFMAvtJAg7xgaUDpDVQrjc'
                }
            });
        const response = await request.json();
        setFirstLeaderboard(prevState => {
            compareLeaderboards(prevState, response.slice(0, 7));
            return response.slice(0, 7);
        });
        setSecondLeaderboard(prevState => {
            compareLeaderboards(prevState, response.slice(7, 14));
            return response.slice(7, 14);
        });
    }

    function compareLeaderboards(oldList: LeaderboardItem[], newList: LeaderboardItem[]) {
        for (let c = 0; c < oldList.length; c++) {
            if (oldList[c].name !== newList[c].name) {
                if (audioRef.current && !isMute) {
                    audioRef.current.play()
                        .catch((error) => console.error("Error playing audio:", error));
                }
                break;
            }
        }
    }

    return (
        <div className="h-full flex flex-col justify-between items-center fadePage">

            {
                firstLeaderboard.length > 0 && (
                    <audio autoPlay ref={audioRef}>
                        <source src="/audio/leaderboard.wav" type="audio/wav" />
                        Your browser does not support the audio element.
                    </audio>
                )
            }
            <div className="w-full px-0 xl:px-24 h-full flex flex-col">
                <div className="mb-4 flex justify-center">
                    <Image src='/images/top-scores.png' width={350} height={100} alt="SALT Top Scores" />
                </div>
                <div className='h-full grid grid-cols-2 gap-8'>
                    <ul className="w-full relative flex flex-col gap-4">
                        <AnimatePresence>
                            {
                                firstLeaderboard.map((user, index) => (
                                    <motion.div
                                        key={user.id}
                                        className={`flex justify-between ${index < 3 ? 'bg-[#B7D57D]' : 'bg-[#CCE2A1]'}`}
                                        layout
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 20 }}
                                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
                                        <div className="pl-6 flex items-center w-full text-2xl MontserratBold text-[#013E53]">
                                            {
                                                index < 3 ? (
                                                    <Image src={`/images/user${index + 1}.png`} className="absolute -left-8" width={50} height={50} alt="User position" />
                                                ) : (
                                                    <span>{index + 1}.&nbsp;</span>
                                                )
                                            }
                                            <p>{user.name}</p>
                                        </div>
                                        <div className="bg-[#013E53] text-white min-w-[120px] w-[80px] flex flex-col items-center justify-center py-2 2xl:py-3">
                                            <h1 className="text-2xl MontserratBold">{user.score}</h1>
                                            <h1 className="text-md font-bold">POINTS</h1>
                                        </div>
                                    </motion.div>
                                ))
                            }
                        </AnimatePresence>
                    </ul>
                    <ul className="w-full relative flex flex-col gap-4">
                        <AnimatePresence>
                            {
                                secondLeaderboard.map((user, index) => (
                                    <motion.div
                                        key={user.id}
                                        className={`flex justify-between ${index < 3 ? 'bg-[#B7D57D]' : 'bg-[#CCE2A1]'}`}
                                        layout
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 20 }}
                                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
                                        <div className="pl-6 flex items-center w-full text-2xl MontserratBold text-[#013E53]">
                                            <span>{index + 8}.&nbsp;</span>
                                            <p>{user.name}</p>
                                        </div>
                                        <div className="bg-[#013E53] text-white min-w-[120px] w-[80px] flex flex-col items-center justify-center py-2 2xl:py-3">
                                            <h1 className="text-2xl MontserratBold">{user.score}</h1>
                                            <h1 className="text-md font-bold">POINTS</h1>
                                        </div>
                                    </motion.div>
                                ))
                            }
                        </AnimatePresence>
                    </ul>
                        <button type='button' className='absolute bottom-8 right-8 bg-[#00000059]' onClick={() => setIsMute(prevState => !prevState)}>
                            {
                                isMute ? <IoVolumeMuteSharp size={26} color='#fff' /> : <IoVolumeHigh size={26} color='#fff' />
                            }
                        </button>
                </div>
            </div>
            {/* <Header isLeaderboard={true} /> */}
        </div>
    )
}

export default Leaderboard;