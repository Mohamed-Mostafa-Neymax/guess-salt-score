'use client';

import { useAppDispatch, useAppSelector } from "@/store";
import Image from "next/image";
import { useState } from "react";
import GuessNotification from "./guess-notification";
import CustomButton from "./button";
import { guessActions } from "@/store/guess-slice";
import { calculatePoints } from "@/model/calculate-points";

const Gauge: React.FC<{ path: string; }> = ({ path }) => {
    const dispatch = useAppDispatch();
    const isGuessEstimated = useAppSelector(state => state.guessReducer.isGuessEstimated);
    const [saltScore, setSaltScore] = useState<number>(0);
    const correctSaltScore = useAppSelector(state => state.guessReducer.correctSaltScore);
    const currentPatient = useAppSelector(state => state.guessReducer.patient);

    function submitGuessHandler() {
        const updatedPatient = localStorage.getItem('current_patient');
        if (!isGuessEstimated) {
            const key = `patient${currentPatient}_${path.includes('baseline') ? 'baseline' : '24week'}`;
            const points = 100 - Math.abs(correctSaltScore - saltScore);
            localStorage.setItem(key, `${points}`);
            dispatch(
                guessActions.onGuessScore({
                    saltScore,
                    scalpHairCoverage: 100 - saltScore
                })
            );
            postPoints();
        }
        if (updatedPatient) {
            dispatch(guessActions.persistPatient(+updatedPatient));
        }
    }

    async function postPoints() {
        const userID = localStorage.getItem('user_id') || '';
        const formData = new FormData();
        let allPoints = calculatePoints().allPoints;
        let questions = calculatePoints().questions;
        formData.append('score', `${Math.ceil(allPoints / questions)}`);
        const request = await fetch(
            `https://cms-saltscore.blueholding.co.uk/api/update-leaderboard/${userID}`,
            {
                method: 'POST',
                body: formData,
                headers: {
                    Accept: 'application/json',
                    api_key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFkaGFtX0JMVUUiLCJpYXQiOjE1MTYyMzkwMjJ9.mNoXtQAe1znwvy0z9c0g_RFMAvtJAg7xgaUDpDVQrjc'
                }
            });
        const response = await request.json();
    }

    return (
        <div className="h-full flex flex-col justify-between py-10">
            <div>
                <GuessNotification saltScore={saltScore} isActualScore={false} />
                <div className="relative">
                    {
                        isGuessEstimated && (
                            <div className="absolute z-20 flex items-center w-full h-full pl-[73px] pr-[83px]">
                                <div
                                    className="relative text-5xl rounded-full w-[0.9rem] h-[0.9rem] bg-[#BDD28E] border-2 border-solid border-white"
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
                            className="w-full h-full"
                            onInput={(event: any) => { setSaltScore(event.target.value); }} />
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
        </div>
    )
}

export default Gauge;