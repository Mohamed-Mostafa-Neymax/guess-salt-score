'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";

import Header from "../home/Header";
import { useEffect, useState } from "react";

const Leaderboard: React.FC = () => {
    const [leaderboard, setLeaderboard] = useState<{ id: number; name: string; score: number; created_at: string; updated_at: string; }[]>([]);

    useEffect(() => {
        getLeaderboard();
        const interval = setInterval(() => { getLeaderboard(); }, 10000);
        return () => { clearInterval(interval); }
    }, [])

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
        setLeaderboard(_prevState => response);
    }

    return (
        <div className="h-full flex flex-col justify-between items-center fadePage">
            <div className="overflow-y-auto px-24">
                <div className="mb-4 flex justify-center">
                    <Image src='/images/top-scores.png' width={350} height={100} alt="SALT Top Scores" />
                </div>
                <ul className="w-[500px] relative">
                    <AnimatePresence>
                        {
                            leaderboard.map((user, index) => (
                                <motion.div
                                    key={user.id}
                                    className={`pl-24 mb-3 flex justify-between ${index < 3 ? 'bg-[#B7D57D]' : 'bg-[#CCE2A1]'}`}
                                    layout
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
                                    <div className="flex items-center w-full text-2xl MontserratBold text-[#013E53]">
                                        {
                                            index < 3 ? (
                                                <Image src={`/images/user${index + 1}.png`} className="absolute -left-8" width={55} height={55} alt="User position" />
                                            ) : (
                                                <span>{index + 1}.&nbsp;</span>
                                            )
                                        }
                                        <p>{user.name}</p>
                                    </div>
                                    <div className="bg-[#013E53] text-white min-w-[120px] w-[80px] h-[80px] flex flex-col items-center justify-center">
                                        <h1 className="text-3xl MontserratBold">{user.score}</h1>
                                        <h1 className="text-md font-bold">POINTS</h1>
                                    </div>
                                </motion.div>
                            ))
                        }
                    </AnimatePresence>
                </ul>
            </div>
            <Header isLeaderboard={true} />
        </div>
    )
}

export default Leaderboard;