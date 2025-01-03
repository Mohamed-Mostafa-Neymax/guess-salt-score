import Image from "next/image";

const SlideWrapper: React.FC<{ children: React.ReactNode; isShownLogo: boolean; isLitfuloLogo: boolean; thankRoute?: boolean }> = ({ children, isShownLogo, isLitfuloLogo, thankRoute }) => {
    return (
        <div className="bg-[#F9F4F0] w-10/12 h-full p-10 rounded-3xl relative">
            <Image src='/images/logo.png' width={300} height={100} alt="Salt home logo" className="absolute -left-3 -top-8" />
            {
                isLitfuloLogo && (
                    <div className="absolute -right-3 -top-8 bg-white px-5 py-3 rounded-[50px] border border-solid border-[#008967]">
                        <Image src='/images/litfulo.png' width={120} height={100} alt="Salt home litfulo logo" />
                    </div>
                )
            }
            {children}
            {
                isShownLogo && (
                    <div className="absolute -bottom-8 right-4 bg-white px-5 py-3 rounded-[50px] border border-solid border-[#008967]">
                        <Image src='/images/litfulo.png' width={80} height={60} alt="Salt home litfulo logo" />
                    </div>
                )
            }
            {
                !thankRoute && <span className="absolute bottom-3 left-3 MontserratBold text-[#048566]">For Internal use only.</span>
            }
        </div>
    );
}

export default SlideWrapper;