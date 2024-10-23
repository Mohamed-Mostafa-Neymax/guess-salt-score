import Image from "next/image";
import Link from "next/link";

const CustomButton: React.FC<{
    children: React.ReactNode;
    path: string;
    isActionBtn: boolean;
    isDisabled: boolean;
    typeBtn: string;
    onSubmitHandler?: () => void;
}> = ({ children, path, isActionBtn, typeBtn, isDisabled, onSubmitHandler }) => {
    return (
        <Link
            href={isDisabled ? '/stage/enter-name' : path}
            className="flex"
            onClick={typeBtn === 'submit' ? onSubmitHandler : undefined}>
            <div className={`text-white ${isDisabled ? 'bg-[#9E9E9E]' : isActionBtn ? 'bg-[#EB6B99]' : 'bg-[#E7427A]'} flex items-center justify-between text-4xl w-fit`}>
                {
                    isActionBtn && (
                        <Image
                            src='/images/triangle-look-right.png'
                            width={62}
                            height={91}
                            alt="Triangle is a part of the button" />
                    )
                }
                <p className="px-5 MontserratBold tracking-widest">{children}</p>
                {
                    isActionBtn && (
                        <Image
                            src='/images/triangle-look-left.png'
                            width={62}
                            height={91}
                            alt="Triangle is a part of the button" />
                    )
                }
            </div>
            {
                isDisabled ? (
                    <div className="relative -left-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="69" viewBox="0 0 32 69" fill="none">
                            <path d="M30.8922 35.7982L3.52137 67.8734C2.31467 69.2875 0 68.4341 0 66.5752V2.42485C0 0.565857 2.31466 -0.287504 3.52137 1.12661L30.8922 33.2018C31.5303 33.9496 31.5303 35.0504 30.8922 35.7982Z" fill="#9E9E9E" />
                        </svg>
                    </div>
                ) :
                    !isActionBtn && (
                        <div className="relative -left-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="69" viewBox="0 0 32 69" fill="none">
                                <path d="M30.8922 35.7982L3.52137 67.8734C2.31467 69.2875 0 68.4341 0 66.5752V2.42485C0 0.565857 2.31466 -0.287504 3.52137 1.12661L30.8922 33.2018C31.5303 33.9496 31.5303 35.0504 30.8922 35.7982Z" fill="#E7427A" />
                            </svg>
                        </div>
                    )
            }
        </Link>
    )
}

export default CustomButton;