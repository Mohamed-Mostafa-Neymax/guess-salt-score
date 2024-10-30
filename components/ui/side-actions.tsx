'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Overview from "../overview";
import References from "../references";
import { useAppDispatch, useAppSelector } from "@/store";
import { guessActions } from "@/store/guess-slice";
import { calculatePoints } from "@/model/calculate-points";
import SessionPopup from "./SessionPopup";

const SideActions: React.FC<{ isGuessingStage: boolean; }> = ({ isGuessingStage }) => {
    const [popup, setPopup] = useState<{ isOpen: boolean; content: string }>({ isOpen: false, content: '' });
    const router = useRouter();
    const dispatch = useAppDispatch();
    const isGuessEstimated = useAppSelector(state => state.guessReducer.isGuessEstimated);
    const points = useAppSelector(state => state.guessReducer.points);
    useEffect(() => {
        let allPoints = calculatePoints().allPoints;
        let questions = calculatePoints().questions;
        dispatch(guessActions.setPoints(questions > 0 ? Math.ceil(allPoints / questions) : 0));
    }, [isGuessEstimated]);

    return (
        <>
            {
                popup.isOpen && (
                    <div
                        className="absolute w-screen h-screen bg-[#00000082] flex items-center justify-center z-30"
                        onClick={() => { setPopup(prevState => ({ ...prevState, isOpen: false })) }}>
                        <div className={`bg-[#F9F4F0] w-4/5 p-10 rounded-3xl relative animatePopup`} onClick={event => event.stopPropagation()}>
                            {popup.content === 'overview' && <Overview isPopup={true} onClosePopup={() => { setPopup(prevState => ({ ...prevState, isOpen: false })) }} />}
                            {popup.content === 'refs' && <References onClosePopup={() => { setPopup(prevState => ({ ...prevState, isOpen: false })) }} />}
                            {popup.content === 'startOver' && <SessionPopup onClosePopup={() => { setPopup(prevState => ({ ...prevState, isOpen: false })) }} />}
                        </div>
                    </div>
                )
            }
            <div className="text-center text-white flex flex-col justify-end items-center gap-10 h-full">
                {
                    isGuessingStage && (
                        <>
                            <p className="text-xs">POINTS<br />EARNED:<br />{points}</p>
                            <div
                                className="border-2 border-solid border-white rounded-[60px] bg-[#003D53] w-16 max-w-28 h-96 max-h-96 relative"
                                style={{ boxShadow: '4px 4px 16px 0px rgba(255, 255, 255, 0.20)' }}>
                                {/* Numbers Here */}
                                <div className="absolute h-full w-24 z-20 right-0 flex flex-col justify-evenly">
                                    <div className="flex items-center gap-1">
                                        <span>80</span> <span className="block w-40 h-[2px] bg-white"></span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span>60</span> <span className="block w-40 h-[2px] bg-white"></span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span>40</span> <span className="block w-40 h-[2px] bg-white"></span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span>20</span> <span className="block w-40 h-[2px] bg-white"></span>
                                    </div>
                                </div>
                                {/* Fill Here*/}
                                <div
                                    className={`absolute bottom-0 z-10 rounded-b-[60px] w-full ${points > 90 && 'rounded-[60px]'}`}
                                    style={{
                                        background: 'linear-gradient(360deg, #CFDEDC 0%, #73B6AC 100%)',
                                        height: points + '%'
                                    }} />
                            </div>
                        </>
                    )
                }
                <button 
                    type="button" 
                    onClick={() => { setPopup(prevState => ({ isOpen: true, content: 'startOver' })) }} 
                    className="bg-[#EA417A] flex flex-col gap-3 items-center justify-center text-wrap w-20 p-1 rounded-lg MontserratBold text-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 80 80" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M68.4601 67.5795C53.0176 83.022 27.9235 82.9923 12.5107 67.5795C6.95735 62.0262 3.21551 55.0177 1.67126 47.2964C1.34459 45.6037 2.44339 43.9109 4.13612 43.5843C5.82886 43.2576 7.5216 44.3564 7.84827 46.0491C9.12524 52.4934 12.3028 58.4031 16.9653 63.0656C29.9429 76.0432 51.0279 76.0432 64.0055 63.0656C76.9832 50.0879 76.9832 29.003 64.0055 16.0253C51.0279 3.04767 29.9132 3.07737 16.9356 16.055C14.5553 18.4353 12.5132 21.0635 10.8681 23.8807L21.2406 22.2616C22.9333 21.9944 24.5667 23.1525 24.8339 24.9047C25.0418 25.9441 24.6557 26.9241 23.9727 27.6071C23.5273 28.0526 22.9036 28.3792 22.2503 28.498L5.10872 31.1645C4.96538 31.1969 4.81876 31.2194 4.66994 31.2309C4.57914 31.2369 4.48911 31.2393 4.39998 31.2381C3.84664 31.2381 3.31619 31.0873 2.85445 30.8206C2.07053 30.3736 1.50138 29.6031 1.33028 28.682C1.32432 28.6506 1.31883 28.6189 1.3138 28.5871C1.2849 28.4195 1.27006 28.2529 1.26841 28.0886L0.00749647 9.87864C-0.111292 8.1562 1.19538 6.61195 2.94751 6.52286C4.66995 6.40407 6.1845 7.74044 6.30329 9.46288L6.90324 18.3193C8.51395 15.9196 10.3605 13.6616 12.4513 11.5707C27.8938 -3.87176 52.9879 -3.84207 68.4007 11.5707C83.8135 26.9836 83.9026 52.137 68.4601 67.5795Z" fill="white" />
                    </svg>
                    <span>START OVER</span>
                </button>
                {
                    isGuessingStage && (
                        <button
                            type="button"
                            onClick={() => { setPopup(prevState => ({ isOpen: true, content: 'overview' })) }}
                            className="bg-[#EA417A] flex flex-col gap-3 items-center justify-center text-wrap w-20 p-1 rounded-lg MontserratBold text-xs">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" viewBox="0 0 80 103" fill="none">
                                <g clipPath="url(#clip0_89_107)">
                                    <path d="M78.7638 50.834L72.5846 41.8124C71.2664 39.9174 70.4837 37.6929 70.3189 35.386L70.113 32.5436C69.7422 27.8062 68.4652 23.316 66.3231 19.1141C64.2221 15.0771 61.4209 11.4931 57.9605 8.52711C54.5002 5.5611 50.5867 3.29539 46.2613 1.85358C42.6773 0.617741 38.9286 0.0410156 35.1387 0.0410156C34.2324 0.0410156 33.3261 0.0410156 32.3787 0.1646C27.6825 0.535351 23.1923 1.81239 19.0316 3.95451C14.9945 6.01424 11.4518 8.81548 8.48577 12.2758C5.51976 15.7362 3.29525 19.6497 1.81224 23.9339C0.329235 28.3005 -0.24749 32.9143 0.0820667 37.6517C0.370429 41.8536 1.44149 45.8907 3.17166 49.6806C5.35498 54.4591 6.63202 59.4437 7.04396 64.5106C7.62069 71.8845 7.04396 79.2583 5.39618 86.4262C4.65467 89.6806 6.67321 92.9349 9.92759 93.6764L46.6732 102.245C47.1264 102.369 47.5795 102.41 48.0326 102.41H48.4858C51.1222 102.204 53.3055 100.309 53.8823 97.7547L57.1367 83.7073C57.3014 82.9246 57.9605 82.3891 58.7432 82.3067L61.9976 82.0596C65.1696 81.8124 68.0532 80.3294 70.113 77.9401C72.1727 75.5096 73.1614 72.4612 72.9142 69.2892L72.3375 61.8742L73.4909 61.7918C76.0038 61.5858 78.1871 60.1028 79.2582 57.8371C80.3292 55.5714 80.1645 52.9349 78.7226 50.8752L78.7638 50.834ZM66.4054 61.627L67.0234 69.7424C67.2705 72.9967 64.7989 75.8804 61.5445 76.1275L58.2901 76.3747C56.6423 76.4983 55.1181 77.1574 53.8411 78.2284C52.6052 79.2995 51.7402 80.7413 51.3282 82.3479L47.9502 96.4777L11.1222 87.7856C12.9348 79.9998 13.5527 72.0081 12.9348 64.0575C12.4817 58.2902 10.9986 52.6054 8.52697 47.2089C7.08516 44.0369 6.22007 40.7001 5.9729 37.1986C4.81945 21.2563 16.8483 7.25008 32.8318 6.01424C33.5733 5.97304 34.3148 5.93185 35.0563 5.93185C50.1748 5.93185 62.9451 17.7959 64.1397 32.9967L64.3457 35.8392C64.5929 39.1759 65.7463 42.3891 67.6413 45.1491L73.8205 54.1708C74.1088 54.5827 74.0265 54.9947 73.9029 55.2006C73.7381 55.5714 73.4085 55.7774 73.0378 55.8186L71.1428 55.9833C68.2592 56.1893 66.1171 58.7434 66.3231 61.5858L66.4054 61.627Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_89_107">
                                        <rect width="80" height="102.41" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span>SALT OVERVIEW</span>
                        </button>
                    )
                }
                <button type="button" onClick={() => { setPopup(prevState => ({ isOpen: true, content: 'refs' })) }} className="bg-[#EA417A] flex flex-col gap-3 items-center justify-center text-wrap w-20 p-1 rounded-lg MontserratBold text-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="35" viewBox="0 0 80 83" fill="none">
                        <path d="M13.0854 17.6947C12.4189 17.6947 11.8441 17.4698 11.3609 17.0199C10.8944 16.5534 10.6611 15.9619 10.6611 15.2455C10.6611 14.529 10.8944 13.9542 11.3609 13.521C11.8441 13.0711 12.4189 12.8462 13.0854 12.8462C13.7685 12.8462 14.3433 13.0711 14.8099 13.521C15.2764 13.9542 15.5097 14.529 15.5097 15.2455C15.5097 15.9619 15.2764 16.5534 14.8099 17.0199C14.3433 17.4698 13.7685 17.6947 13.0854 17.6947Z" fill="white" />
                        <path d="M3.69913 17.4947V1.49954L5.44859 3.24901H0.200195V0H7.74789V17.4947H3.69913Z" fill="white" />
                        <path d="M18.2836 50.184C17.6172 50.184 17.0423 49.959 16.5592 49.5092C16.0926 49.0427 15.8594 48.4512 15.8594 47.7347C15.8594 47.0183 16.0926 46.4434 16.5592 46.0102C17.0423 45.5604 17.6172 45.3354 18.2836 45.3354C18.9668 45.3354 19.5416 45.5604 20.0081 46.0102C20.4746 46.4434 20.7079 47.0183 20.7079 47.7347C20.7079 48.4512 20.4746 49.0427 20.0081 49.5092C19.5416 49.959 18.9668 50.184 18.2836 50.184Z" fill="white" />
                        <path d="M0.848584 49.9845V47.3603L7.59652 40.9873C8.1297 40.5041 8.52124 40.0709 8.77117 39.6877C9.02109 39.3044 9.18771 38.9545 9.27101 38.638C9.37098 38.3214 9.42097 38.0298 9.42097 37.7632C9.42097 37.0635 9.17938 36.5303 8.69619 36.1637C8.22967 35.7805 7.53821 35.5889 6.62182 35.5889C5.88871 35.5889 5.20559 35.7305 4.57245 36.0138C3.95597 36.297 3.43113 36.7386 2.99793 37.3384L0.0488281 35.4389C0.715291 34.4393 1.64834 33.6478 2.84797 33.0647C4.04761 32.4815 5.43052 32.1899 6.99671 32.1899C8.29631 32.1899 9.4293 32.4065 10.3957 32.8397C11.3787 33.2563 12.1368 33.8478 12.67 34.6142C13.2198 35.3806 13.4947 36.297 13.4947 37.3634C13.4947 37.9299 13.4197 38.4964 13.2698 39.0628C13.1365 39.6127 12.8533 40.1958 12.4201 40.8123C12.0035 41.4288 11.387 42.1202 10.5706 42.8867L4.97233 48.1601L4.19756 46.6855H14.0695V49.9845H0.848584Z" fill="white" />
                        <path d="M18.0883 82.6752C17.4219 82.6752 16.847 82.4502 16.3638 82.0004C15.8973 81.5339 15.6641 80.9424 15.6641 80.2259C15.6641 79.5095 15.8973 78.9347 16.3638 78.5015C16.847 78.0516 17.4219 77.8267 18.0883 77.8267C18.7714 77.8267 19.3463 78.0516 19.8128 78.5015C20.2793 78.9347 20.5126 79.5095 20.5126 80.2259C20.5126 80.9424 20.2793 81.5339 19.8128 82.0004C19.3463 82.4502 18.7714 82.6752 18.0883 82.6752Z" fill="white" />
                        <path d="M6.67296 82.7746C5.45667 82.7746 4.2487 82.6163 3.04907 82.2997C1.84944 81.9665 0.833079 81.4999 0 80.9001L1.57452 77.8011C2.24098 78.2843 3.01575 78.6675 3.89881 78.9507C4.78187 79.234 5.67327 79.3756 6.57299 79.3756C7.58935 79.3756 8.38911 79.1757 8.97226 78.7758C9.55542 78.3759 9.847 77.8261 9.847 77.1263C9.847 76.4598 9.58874 75.935 9.07223 75.5518C8.55572 75.1685 7.72264 74.9769 6.57299 74.9769H4.72356V72.3027L9.59707 66.7794L10.0469 68.229H0.874733V64.98H13.121V67.6042L8.27248 73.1275L6.2231 71.9529H7.39774C9.54709 71.9529 11.1716 72.436 12.2713 73.4024C13.3709 74.3688 13.9208 75.6101 13.9208 77.1263C13.9208 78.1093 13.6625 79.034 13.146 79.9004C12.6295 80.7502 11.8381 81.4416 10.7717 81.9748C9.70537 82.508 8.33912 82.7746 6.67296 82.7746Z" fill="white" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M79.9996 19.9939H27.5156V17.4946H79.9996V19.9939Z" fill="white" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M79.9996 49.9846H27.5156V47.4854H79.9996V49.9846Z" fill="white" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M79.9996 79.9758H27.5156V77.4766H79.9996V79.9758Z" fill="white" />
                    </svg>
                    <span>REFS</span>
                </button>
            </div>
        </>
    )
}

export default SideActions;