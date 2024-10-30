'use client';

import { useState } from "react";

import CustomButton from "@/components/ui/button";

interface FullscreenHTMLElement extends HTMLElement {
    webkitRequestFullscreen?: () => Promise<void>;
    msRequestFullscreen?: () => Promise<void>;
}

const EnterName: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const openFullscreen = () => {
        const element = document.documentElement as FullscreenHTMLElement;
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.webkitRequestFullscreen) { // Safari
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) { // Older versions of Internet Explorer/Edge
            element.msRequestFullscreen();
        }
    };

    function onSubmitHandler() {
        localStorage.clear();
        localStorage.setItem('username_salt', username);
        openFullscreen();
    }

    return (
        <div className="fadePage">
            <div className="pt-10 pl-28 mb-36">
                <h2 className="text-3xl MontserratBold text-[#018167] mb-16">Earn a spot on the leaderboard!</h2>
                <label htmlFor="username" className="block text-xl font-bold mb-5">ENTER YOUR NAME</label>
                <input
                    type="text"
                    id="username"
                    onChange={event => setUsername(prevState => event.target.value)}
                    className="w-3/5 h-14 p-3 text-xl block border-[2px] border-solid border-[#244A5D] focus-visible:outline-none" />
                <p className="mt-2">First Name, Last Initial</p>
            </div>
            <div className="flex justify-center">
                <CustomButton
                    path="/stage/overview"
                    isActionBtn={false}
                    isDisabled={username.length === 0}
                    typeBtn='submit'
                    onSubmitHandler={onSubmitHandler}>LEARN ABOUT SALT</CustomButton>
            </div>
        </div>
    )
}

export default EnterName;