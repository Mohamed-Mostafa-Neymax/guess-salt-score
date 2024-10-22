import Image from "next/image";

import Header from "./Header";
import Footer from "./Footer";

const Home: React.FC = () => {
    return (
        <div className="h-full p-5">
            <Image src='/images/home-bg.png' fill alt="Salt home background" style={{ objectFit: 'cover' }} />
            <div className="flex flex-col items-center justify-between relative z-10 h-full">
                <Header />
                <Image src='/images/logo.png' width={1000} height={500} alt="Salt home logo" />
                <Footer />
            </div>
        </div>
    )
}

export default Home