import Image from "next/image";

const SlideWrapper: React.FC<{ children: React.ReactNode; }> = ({ children }) => {
    return (
        <div className="bg-[#F9F4F0] w-4/5 h-full p-20 rounded-3xl relative">
            <Image src='/images/logo.png' width={500} height={300} alt="Salt home logo" className="absolute -left-10 -top-16" />
            { children }
            <div className="absolute -bottom-16 right-10 bg-white p-7 rounded-[50px] border border-solid border-[#008967]">
                <Image src='/images/litfulo.png' width={180} height={180} alt="Salt home litfulo logo" />
            </div>
        </div>
    );
}

export default SlideWrapper;