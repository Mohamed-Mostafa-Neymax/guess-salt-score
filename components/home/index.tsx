'use client';

import Image from "next/image";

import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";

const Home: React.FC = () => {
    const [isFullscreen, setIsFullscreen] = useState(false);

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };

        const handleClick = () => {
            if (!isFullscreen && !/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                const elem = document.documentElement as HTMLElement & {
                    mozRequestFullScreen?: () => Promise<void>;
                    webkitRequestFullscreen?: () => Promise<void>;
                    msRequestFullscreen?: () => Promise<void>;
                };

                if (elem.requestFullscreen) {
                    elem.requestFullscreen().catch((err) => console.log(err));
                } else if (elem.mozRequestFullScreen) {
                    elem.mozRequestFullScreen().catch((err) => console.log(err));
                } else if (elem.webkitRequestFullscreen) {
                    elem.webkitRequestFullscreen().catch((err) => console.log(err));
                } else if (elem.msRequestFullscreen) {
                    elem.msRequestFullscreen().catch((err) => console.log(err));
                }
            }
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.body.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
            document.body.removeEventListener('click', handleClick);
        };
    }, [isFullscreen]);

    return (
        <div className="h-full p-5">
            <Image src='/images/bg-home.png' fill alt="Salt home background" style={{ objectFit: 'cover' }} />
            <div className="flex flex-col items-center justify-between relative z-10 h-full">
                <Header isLeaderboard={false} />
                <div className="flex items-center justify-center relative w-full h-full">
                    <Image src='/images/logo.png' width={500} height={250} alt="Salt home logo" />
                    <div className="absolute right-24 top-24 border-2 border-solid border-[#5B5B5B] rounded-full bg-white p-5">
                        <Image src='/images/face-1.png' width={70} height={70} alt="Salt home logo" />
                    </div>
                    <div className="absolute top-96 right-28 border-2 border-solid border-[#5B5B5B] rounded-full bg-white p-3">
                        <Image src='/images/face-2.png' width={30} height={30} alt="Salt home logo" />
                    </div>
                    <div className="absolute bottom-0 right-0 border-2 border-solid border-[#5B5B5B] rounded-full bg-white p-5">
                        <Image src='/images/face-3.png' width={50} height={50} alt="Salt home logo" />
                    </div>
                    <div className="absolute bottom-0 right-72 border-2 border-solid border-[#5B5B5B] rounded-full bg-white p-3">
                        <Image src='/images/face-4.png' width={50} height={50} alt="Salt home logo" />
                    </div>
                    <div className="absolute bottom-20 border-2 border-solid border-[#5B5B5B] rounded-full bg-white p-4">
                        <Image src='/images/face-5.png' width={50} height={50} alt="Salt home logo" />
                    </div>
                    <div className="absolute left-96 bottom-0 border-2 border-solid border-[#5B5B5B] rounded-full bg-white p-2">
                        <Image src='/images/face-6.png' width={40} height={40} alt="Salt home logo" />
                    </div>
                    <div className="absolute left-24 bottom-36 border-2 border-solid border-[#5B5B5B] rounded-full bg-white p-5">
                        <Image src='/images/face-7.png' width={50} height={50} alt="Salt home logo" />
                    </div>
                    <div className="absolute left-52 top-32 border-2 border-solid border-[#5B5B5B] rounded-full bg-white p-5">
                        <Image src='/images/face-8.png' width={50} height={50} alt="Salt home logo" />
                    </div>
                    <div className="absolute top-16 left-96 border-2 border-solid border-[#5B5B5B] rounded-full bg-white p-2">
                        <Image src='/images/face-9.png' width={40} height={40} alt="Salt home logo" />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Home