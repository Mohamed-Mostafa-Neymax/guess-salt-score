'use client';

import { useAppDispatch, useAppSelector } from "@/store";
import Image from "next/image";
import { useState } from "react";
import GuessNotification from "./guess-notification";
import CustomButton from "./button";
import { guessActions } from "@/store/guess-slice";

const Gauge: React.FC<{ path: string; }> = ({ path }) => {
    const dispatch = useAppDispatch();
    const isGuessEstimated = useAppSelector(state => state.guessReducer.isGuessEstimated);
    const [saltScore, setSaltScore] = useState<number>(0);
    const correctSaltScore = useAppSelector(state => state.guessReducer.correctSaltScore);
    const currentPatient = useAppSelector(state => state.guessReducer.patient);

    function gaugeHandler(event: any) {
        setSaltScore(event.target.value);
    }

    function submitGuessHandler() {
        if (isGuessEstimated) {
            dispatch(guessActions.resetGuessing());
        } else {
            const key = `patient${currentPatient}_${path.includes('baseline') ? 'baseline' : '24week'}`;
            const points = 100 - Math.abs(correctSaltScore - saltScore);
            localStorage.setItem(key, `${points}`);
            dispatch(
                guessActions.onGuessScore({
                    saltScore,
                    scalpHairCoverage: 100 - saltScore
                })
            )
        }
    }

    return (
        <>
            <div>
                <GuessNotification saltScore={saltScore} isActualScore={false} />
                <div className="relative">
                    {
                        isGuessEstimated && (
                            <div className="absolute z-20 flex items-center w-full h-full pl-[73px] pr-[83px]">
                                <div
                                    className="relative text-5xl rounded-full w-2.5 h-2.5 bg-[#BDD28E] border-2 border-solid border-white"
                                    style={{ boxShadow: '0px 0px 0px 2.5px #BDD28E', left: correctSaltScore + '%' }} />
                            </div>
                        )
                    }
                    <div className="absolute z-10 w-full h-full flex items-center justify-center px-[74px] pb-4">
                        <input
                            type="range"
                            name="gaugeRange"
                            min="0"
                            max="100"
                            value={saltScore}
                            className="w-full"
                            onInput={gaugeHandler} />
                    </div>
                    <Image src='/images/degrees-line.png' width={938} height={150} alt="Gauge" />
                </div>
                {
                    isGuessEstimated && (
                        <GuessNotification
                            saltScore={correctSaltScore}
                            isActualScore={true} />
                    )
                }
            </div>
            <div className="flex justify-center">
                <CustomButton
                    path={
                        isGuessEstimated && path.includes('week24') ? '/stage/guess/patient-summary' :
                            isGuessEstimated && path.includes('baseline') ? '/stage/guess/week24' :
                                path
                    }
                    isActionBtn={isGuessEstimated ? false : true}
                    isDisabled={false}
                    typeBtn='submit'
                    onSubmitHandler={submitGuessHandler}>
                    {
                        isGuessEstimated && path.includes('week24') ? 'SEE PATIENT SUMMARY' :
                            isGuessEstimated && path.includes('baseline') ? 'SEE WEEK 24' :
                                'Submit'
                    }
                </CustomButton>
            </div>
        </>
    )
}

export default Gauge;