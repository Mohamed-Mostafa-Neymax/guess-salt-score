import Image from "next/image"

const Header: React.FC = () => {
    return (
        <header className="flex justify-center items-center bg-[#FCE9E5] w-full rounded-t-2xl border-b-4 border-solid border-b-[#E9417E] py-2">
            <div className="border-r border-solid border-[#016268] px-5">
                <Image src='/images/logo.png' width={300} height={300} alt="Salt home logo" />
            </div>
            <div className="px-5">
                <Image src='/images/litfulo.png' width={300} height={300} alt="Salt home litfulo logo" />
            </div>
        </header>
    )
}

export default Header