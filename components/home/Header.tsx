import Image from "next/image"

const Header: React.FC<{ isLeaderboard: boolean; }> = ({ isLeaderboard }) => {
    return (
        <header className={`flex justify-center items-center ${isLeaderboard ? 'bg-transparent' : 'bg-[#FCE9E5] border-b-4 border-solid border-b-[#E9417E]'} w-full rounded-t-2xl  py-5`}>
            <div className="border-r border-solid border-[#016268] px-5">
                <Image src='/images/logo.png' width={300} height={300} alt="Salt home logo" />
            </div>
            <div className="px-5">
                <Image src='/images/litfulo.png' width={200} height={200} alt="Salt home litfulo logo" />
            </div>
        </header>
    )
}

export default Header