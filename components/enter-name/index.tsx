'use client';

import Image from "next/image";
import { useState } from "react";

import CustomButton from "@/components/ui/button";

const EnterName: React.FC = () => {
    const [username, setUsername] = useState<string>('');

    function onSubmitHandler() {
        localStorage.setItem('username_salt', username);
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