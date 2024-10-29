import Image from "next/image";

import Header from "../home/Header";

const DUMMY_USERS = [
    {
        name: 'Lional Messi',
        score: 96
    },
    {
        name: 'Ronaldinho',
        score: 88
    },
    {
        name: 'Inesta',
        score: 85
    },
    {
        name: 'Suarez',
        score: 84
    },
    {
        name: 'Xavi',
        score: 80
    },
    {
        name: 'Xavi',
        score: 80
    },
    {
        name: 'Xavi',
        score: 80
    },
    {
        name: 'Xavi',
        score: 80
    },
    {
        name: 'Xavi',
        score: 80
    },
    {
        name: 'Xavi',
        score: 80
    },
    {
        name: 'Xavi',
        score: 80
    },
    {
        name: 'Xavi',
        score: 80
    }
]


const Leaderboard: React.FC = () => {
    return (
        <div className="h-full flex flex-col justify-between items-center fadePage">
            <div className="overflow-scroll px-24">
                <div className="mb-4 flex justify-center">
                    <Image src='/images/top-scores.png' width={350} height={100} alt="SALT Top Scores" />
                </div>
                <ul className="w-[500px] relative">
                    {
                        DUMMY_USERS.map((user, index) => (
                            <li key={`user_${index}`} className={`pl-24 mb-3 flex justify-between ${index < 3 ? 'bg-[#B7D57D]' : 'bg-[#CCE2A1]'}`}>
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
                            </li>
                        ))
                    }
                </ul>
            </div>
            <Header isLeaderboard={true} />
        </div>
    )
}

export default Leaderboard;