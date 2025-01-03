'use client';

import { useState } from "react";

import CustomButton from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store";
import { guessActions } from "@/store/guess-slice";

interface FullscreenHTMLElement extends HTMLElement {
    webkitRequestFullscreen?: () => Promise<void>;
    msRequestFullscreen?: () => Promise<void>;
}

const EnterName: React.FC = () => {
    const router = useRouter();
    const [username, setUsername] = useState<string>('');
    const [inputMessage, setInputMessage] = useState<string>('');
    const dispatch = useAppDispatch();

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

    function inputChangeHandler(event: any) {
        setUsername(prevState => event.target.value);
        setInputMessage(prevState => '');
    }

    async function onSubmitHandler() {
        const formData = new FormData();
        formData.delete("score");
        formData.append('name', username);
        const request = await fetch(
            'https://cms-saltscore.blueholding.co.uk/api/leaderboard',
            {
                method: 'POST',
                body: formData,
                headers: {
                    Accept: 'application/json',
                    api_key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFkaGFtX0JMVUUiLCJpYXQiOjE1MTYyMzkwMjJ9.mNoXtQAe1znwvy0z9c0g_RFMAvtJAg7xgaUDpDVQrjc'
                }
            });
        const response = await request.json();
        if (request.ok) {
            localStorage.clear();
            localStorage.setItem('user_id', response.id);
            dispatch(guessActions.resetGuessing());
            router.push('/stage/overview');
            openFullscreen();
        } else {
            setInputMessage(prevState => response.message);
            return;
        }
        formData.delete("name");
        formData.append('score', '0');
        const requestAddScore = await fetch(
            `https://cms-saltscore.blueholding.co.uk/api/update-leaderboard/${response.id}`,
            {
                method: 'POST',
                body: formData,
                headers: {
                    Accept: 'application/json',
                    api_key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFkaGFtX0JMVUUiLCJpYXQiOjE1MTYyMzkwMjJ9.mNoXtQAe1znwvy0z9c0g_RFMAvtJAg7xgaUDpDVQrjc'
                }
            });
        const responseAddScore = await requestAddScore.json();
    }

    function focusHandler() {
        window.scrollTo(0, document.body.scrollHeight);
    }

    return (
        <div className="fadePage">
            <div className="pt-10 pl-28 mb-20">
                <h2 className="text-3xl MontserratBold text-[#018167] mb-16">Earn a spot on the leaderboard!</h2>
                <label htmlFor="username" className="block text-xl font-bold mb-5">ENTER YOUR NAME</label>
                <input
                    type="text"
                    id="username"
                    onChange={inputChangeHandler}
                    onFocus={focusHandler}
                    className="w-3/5 h-14 p-3 text-xl block border-[2px] border-solid border-[#244A5D] focus-visible:outline-none" />
                <p className={`mt-2 ${inputMessage.length === 0 ? 'text-black' : 'text-red-600'}`}>{inputMessage.length === 0 ? '' : inputMessage}</p>
            </div>
            <div className="flex justify-center">
                <CustomButton
                    isActionBtn={false}
                    isDisabled={username.length === 0}
                    onSubmitHandler={onSubmitHandler}>LEARN ABOUT SALT</CustomButton>
            </div>
        </div>
    )
}

export default EnterName;