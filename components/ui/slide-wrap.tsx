import Image from "next/image";

const SlideWrapper: React.FC<{ children: React.ReactNode; isShownLogo: boolean; }> = ({ children, isShownLogo }) => {
    return (
        <div className="bg-[#F9F4F0] w-11/12 h-full p-20 rounded-3xl relative">
            <Image src='/images/logo.png' width={300} height={100} alt="Salt home logo" className="absolute -left-8 -top-8" />
            {children}
            {
                isShownLogo && (
                    <div className="absolute -bottom-8 right-10 bg-white px-5 py-3 rounded-[50px] border border-solid border-[#008967]">
                        <Image src='/images/litfulo.png' width={80} height={60} alt="Salt home litfulo logo" />
                    </div>
                )
            }
        </div>
    );
}

export default SlideWrapper;