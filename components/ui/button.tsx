import Image from "next/image";

const CustomButton: React.FC<{
    children: React.ReactNode;
    isActionBtn: boolean;
    isDisabled: boolean;
    onSubmitHandler?: () => void;
}> = ({ children, isActionBtn, isDisabled, onSubmitHandler }) => {
    return (
        // href={isDisabled ? '/stage/enter-name' : path}
        <button
            type="button"
            className="flex"
            onClick={onSubmitHandler}>
            <div className={`text-white ${isDisabled ? 'bg-[#9E9E9E]' : isActionBtn ? 'bg-[#EB6B99]' : 'bg-[#E7427A]'} flex items-center justify-between text-md w-fit h-full`}>
                {
                    isActionBtn && (
                        <Image
                            src='/images/triangle-look-right.png'
                            width={30}
                            height={50}
                            alt="Triangle is a part of the button" />
                    )
                }
                <p className="px-3 MontserratBold tracking-widest">{children}</p>
                {
                    isActionBtn && (
                        <Image
                            src='/images/triangle-look-left.png'
                            width={30}
                            height={50}
                            alt="Triangle is a part of the button" />
                    )
                }
            </div>
            {
                isDisabled ? (
                    <div className="relative -left-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="40" viewBox="0 0 32 69" fill="none">
                            <path d="M30.8922 35.7982L3.52137 67.8734C2.31467 69.2875 0 68.4341 0 66.5752V2.42485C0 0.565857 2.31466 -0.287504 3.52137 1.12661L30.8922 33.2018C31.5303 33.9496 31.5303 35.0504 30.8922 35.7982Z" fill="#9E9E9E" />
                        </svg>
                    </div>
                ) :
                    !isActionBtn && (
                        <div className="relative -left-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="40" viewBox="0 0 32 69" fill="none">
                                <path d="M30.8922 35.7982L3.52137 67.8734C2.31467 69.2875 0 68.4341 0 66.5752V2.42485C0 0.565857 2.31466 -0.287504 3.52137 1.12661L30.8922 33.2018C31.5303 33.9496 31.5303 35.0504 30.8922 35.7982Z" fill="#E7427A" />
                            </svg>
                        </div>
                    )
            }
        </button>
    )
}

export default CustomButton;