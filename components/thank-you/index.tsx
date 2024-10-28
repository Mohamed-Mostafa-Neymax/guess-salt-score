'use client';

import Image from "next/image";
import { useState } from "react";

import CustomButton from "../ui/button";
import FACHKREISE from "./FACHKREISE";

const ThankYou: React.FC = () => {
    const [isPopupActive, setIsPopupActive] = useState<boolean>(false);

    return (
        <>
            {
                isPopupActive && (
                    <div
                        className="fixed left-0 top-0 w-screen h-screen bg-[#00000082] flex items-center justify-center z-30"
                        onClick={() => { setIsPopupActive(prevState => false) }}>
                        <div className={`bg-[#F9F4F0] w-4/5 p-20 rounded-3xl relative animatePopup`} onClick={event => event.stopPropagation()}>
                            <FACHKREISE onClosePopup={() => { setIsPopupActive(prevState => false) }} />
                        </div>
                    </div>
                )
            }
            <div className="flex justify-between h-full">
                <div className="h-full flex items-end justify-center">
                    <p className="text-xl absolute left-10 font-semibold">Patient portrayal.</p>
                    <Image
                        src='/images/thank-you.png'
                        width={800}
                        height={300}
                        alt="Salt home logo"
                        className="absolute left-0 bottom-0" />
                </div>
                <div className="flex flex-col justify-between h-full w-full max-w-[800px]">
                    <div className="flex flex-col items-center justify-center h-full">
                        <h2 className="text-5xl MontserratBold text-[#018167] mb-10">Scalp hair loss takes an emotional toll⁵,⁷</h2>
                        <p className="text-3xl text-left pb-10 mb-10 border-b border-solid border-[#AFA5A3] font-semibold">Scalp hair loss can be devastating for some patients. In addition to assessing SALT scores, the emotional aspect of the condition and its impact on patients’ lives is critical when discussing appropriate treatment plans.</p>
                        <h2 className="text-4xl MontserratBold text-[#018167] mb-10">Thank you for interacting with</h2>
                        <Image src='/images/logo.png' width={300} height={300} alt="Salt home logo" className="mb-28" />
                        <CustomButton
                            path='/stage/leaderboard'
                            isActionBtn={false}
                            isDisabled={false}
                            typeBtn='button'>
                            Finish
                        </CustomButton>
                    </div>
                    <button
                        type="button"
                        onClick={() => { setIsPopupActive(prevState => true) }}
                        className="text-[#04303E] text-3xl MontserratBold underline mt-28">BASISINFORMATION - FACHKREISE {'>'}</button>
                </div>
            </div>
        </>
    )
}

export default ThankYou;