import { useAppSelector } from "@/store";
import Image from "next/image";

const GuessNotification: React.FC<{ saltScore: number; isActualScore: boolean; }> = ({ saltScore, isActualScore }) => {

    const isGuessEstimated = useAppSelector(state => state.guessReducer.isGuessEstimated);
    const correctSaltScore = useAppSelector(state => state.guessReducer.correctSaltScore);
    const correctScalpHairCoverage = useAppSelector(state => state.guessReducer.correctScalpHairCoverage);

    return (
        <div className="w-full">
            {
                isActualScore && (
                    <div className="w-full px-[70px]">
                        <Image
                            src='/images/arrow-good.png'
                            width={30}
                            height={50}
                            alt="arrow"
                            className="relative"
                            style={{ left: (saltScore - 4) + '%' }} />
                    </div>
                )
            }
            <div
                className={`${isActualScore ? 'bg-[#C4DC8D]' : 'bg-[#E6AFA4]'} w-fit p-1 rounded-xl text-center relative z-10`}
                style={{ left: (saltScore / 2) + '%' }}>
                <p className="MontserratBold text-sm pb-1">{isActualScore ? 'The Actual Score' : 'YOUR GUESS'}</p>
                <div className='flex justify-center gap-10 capitalize bg-white rounded-b-xl p-2 font-semibold text-xs'>
                    <div className={`px-5 border-r-4 border-solid ${isActualScore ? 'border-[#C4DC8D]' : 'border-[#E6AFA4]'}`}>
                        <p className="text-black text-md mb-3">SALT<br />SCORE:</p>
                        <p className={`${isActualScore ? 'text-[#C4DC8D]' : 'text-[#E6AFA4]'} text-3xl`}>
                            {isActualScore && isGuessEstimated ? correctSaltScore : isActualScore && !isGuessEstimated ? '??' : saltScore}
                        </p>
                    </div>
                    <div className="pr-5">
                        <p className='text-black text-md mb-3'>SCALP HAIR<br />COVERAGE {'(%)'}</p>
                        <p className={`${isActualScore ? 'text-[#C4DC8D]' : 'text-[#E6AFA4]'} text-3xl`}>
                            {isActualScore && isGuessEstimated ? (
                                <>
                                    {correctScalpHairCoverage}<sup>%</sup>
                                </>
                            ) : isActualScore && !isGuessEstimated ? '??' : (
                                <>
                                    {100 - saltScore}<sup>%</sup>
                                </>
                            ) }
                            
                        </p>
                    </div>
                </div>
            </div>
            {
                !isActualScore && (
                    <div className="w-full px-[70px]">
                        <Image
                            src='/images/arrow-guess.png'
                            width={30}
                            height={50}
                            alt="arrow"
                            className="relative"
                            style={{ left: (saltScore - 4) + '%' }} />
                    </div>
                )
            }
        </div>
    )
}

export default GuessNotification;