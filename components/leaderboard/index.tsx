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
        <div className="h-full flex flex-col justify-between items-center">
            <div className="overflow-scroll px-24">
                <div className="mb-4 flex justify-center">
                    <Image src='/images/top-scores.png' width={500} height={200} alt="Congrats for the earned points" />
                </div>
                <ul className="w-[700px] relative">
                    {
                        DUMMY_USERS.map((user, index) => (
                            <li key={`user_${index}`} className={`pl-24 mb-3 flex justify-between ${index < 3 ? 'bg-[#B7D57D]' : 'bg-[#CCE2A1]'}`}>
                                <div className="flex items-center w-full text-4xl MontserratBold text-[#013E53]">
                                    {
                                        index < 3 ? (
                                            <Image src={`/images/user${index + 1}.png`} className="absolute -left-10" width={90} height={90} alt="User position" />
                                        ) : (
                                            <span>{index + 1}.&nbsp;</span>
                                        )
                                    }
                                    <p>{user.name}</p>
                                </div>
                                <div className="bg-[#013E53] text-white min-w-[120px] w-[120px] h-[120px] flex flex-col items-center justify-center">
                                    <h1 className="text-6xl MontserratBold">{user.score}</h1>
                                    <h1 className="text-xl font-bold">POINTS</h1>
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