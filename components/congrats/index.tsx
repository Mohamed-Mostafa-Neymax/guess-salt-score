'use client';

import Image from "next/image";
import { useEffect } from "react";

import CustomButton from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/store";
import { calculatePoints } from "@/model/calculate-points";
import { guessActions } from "@/store/guess-slice";

const Congrats: React.FC = () => {
    const dispatch = useAppDispatch()
    const points = useAppSelector(state => state.guessReducer.points);
    useEffect(() => {
        let allPoints = calculatePoints().allPoints;
        let questions = calculatePoints().questions;
        dispatch(guessActions.setPoints(questions > 0 ? Math.ceil(allPoints / questions) : 0));
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-full gap-8 relative fadePage">
            <div className="mb-4">
                <Image src='/images/congrats.png' width={500} height={300} alt="Congrats for the earned points" />
            </div>
            <p className="text-4xl MontserratBold">You scored {points} points</p>
            <p className="text-2xl MontserratBold mb-4">and secured a spot on the leaderboard!</p>
            <p className="text-3xl font-bold">Thank you for participating!</p>
            <CustomButton
                path='/stage/summary'
                isActionBtn={false}
                isDisabled={false}
                typeBtn='button'>
                DISCOVER MORE
            </CustomButton>
            <div className="absolute bottom-0 w-full flex justify-center items-center gap-5">
                <div>
                    <Image src='/images/pfizer.png' width={50} height={20} alt="Congrats for the earned points" />
                </div>
                <p className="text-xs">&#169; 2023 Pfizer Inc. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Congrats;