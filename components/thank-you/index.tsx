'use client';

import Image from "next/image";
import { useState } from "react";

import CustomButton from "../ui/button";
import FACHKREISE from "./FACHKREISE";
import { useRouter } from "next/navigation";

const ThankYou: React.FC = () => {
    const router = useRouter();
    const [isPopupActive, setIsPopupActive] = useState<boolean>(false);

    return (
        <div className="h-full fadePage">
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
                    <p className="text-xs absolute left-1 font-semibold">Patient portrayal.</p>
                    <Image
                        src='/images/thank-you.png'
                        width={400}
                        height={300}
                        alt="Salt home logo"
                        className="absolute left-3 bottom-0" />
                </div>
                <div className="flex flex-col justify-between h-full w-full max-w-[450px]">
                    <div className="flex flex-col items-center justify-center h-full">
                        <h2 className="text-3xl MontserratBold text-[#018167] text-center mb-10">Scalp hair loss takes an emotional toll⁵,⁷</h2>
                        <p className="text-md text-left pb-5 mb-5 border-b border-solid border-[#AFA5A3] font-semibold">Scalp hair loss can be devastating for some patients. In addition to assessing SALT scores, the emotional aspect of the condition and its impact on patients’ lives is critical when discussing appropriate treatment plans.</p>
                        <h2 className="text-xl MontserratBold text-[#018167] mb-10">Thank you for interacting with</h2>
                        <Image src='/images/logo.png' width={220} height={220} alt="Salt home logo" className="mb-28" />
                        <CustomButton
                            isActionBtn={false}
                            isDisabled={false}
                            onSubmitHandler={() => {router.push('/stage/leaderboard')}}>
                            Finish
                        </CustomButton>
                    </div>
                    <button
                        type="button"
                        onClick={() => { setIsPopupActive(prevState => true) }}
                        className="text-[#04303E] text-xs MontserratBold underline mt-7">BASISINFORMATION - FACHKREISE {'>'}</button>
                </div>
            </div>
        </div>
    )
}

export default ThankYou;