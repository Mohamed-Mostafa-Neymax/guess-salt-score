import Image from "next/image";

const StageLayout: React.FC<{ children: React.ReactNode; }> = ({ children }) => {
    return (
        <div className="h-full py-10">
            <Image src='/images/bg-slides.png' fill alt="Salt home background" style={{ objectFit: 'cover' }} priority={true} />
            {children}
        </div>
    )
}

export default StageLayout;