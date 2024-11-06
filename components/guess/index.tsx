'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import Image from 'next/image';

import { useAppDispatch, useAppSelector } from '@/store';
import Slider from '../ui/slider';
import { PATIENTS } from '@/model/patients';
import Gauge from '../ui/gauge';
import { guessActions } from '@/store/guess-slice';

const Guess: React.FC = () => {
    const dispatch = useAppDispatch();
    const pathname = usePathname();
    const guessMode = pathname.includes('baseline') ? 'baseline' : pathname.includes('week24') ? 'week24' : '';
    const currentPatient = useAppSelector(state => state.guessReducer.patient);
    const isGuessEstimated = useAppSelector(state => state.guessReducer.isGuessEstimated);
    const saltScore = useAppSelector(state => state.guessReducer.saltScore);
    const correctSaltScore = useAppSelector(state => state.guessReducer.correctSaltScore);
    useEffect(() => {
        dispatch(guessActions.resetGuessing());
        const updatedPatient = localStorage.getItem('current_patient');
        if (updatedPatient)
            dispatch(guessActions.persistPatient(+updatedPatient));
        else
            localStorage.setItem('current_patient', '1');
    }, []);
    useEffect(() => {
        dispatch(guessActions.setCorrectScore({
            correctSaltScore: PATIENTS[`patient${currentPatient}`][guessMode].saltScore,
            correctScalpHairCoverage: PATIENTS[`patient${currentPatient}`][guessMode].scalpCoverage
        }));
        const updatedPatient = localStorage.getItem('current_patient');
        if (updatedPatient)
            dispatch(guessActions.persistPatient(+updatedPatient));
        else
            localStorage.setItem('current_patient', '1');
    }, [currentPatient, pathname]);



    return (
        <div className="flex gap-10 fadePage">
            <div className="w-[250px] max-w-[250px] font-bold mt-10">
                <Slider
                    slides={PATIENTS[`patient${currentPatient}`][guessMode].slides}
                    guessMode={guessMode.replace(/(\D)(\d)/, '$1 $2').toUpperCase()}
                    saltScore={isGuessEstimated ? PATIENTS[`patient${currentPatient}`][guessMode].saltScore : '??'}
                    scalpCoverage={isGuessEstimated ? PATIENTS[`patient${currentPatient}`][guessMode].scalpCoverage : '??'} />
                <p className='text-xs my-2'>
                    Real patient images from the LITFULO pivotal clinical study. All patients shown are ≥12 years of age. Patient images are used with permission.<sup>4</sup>
                </p>
                <div className='text-[#67917D] text-xs MontserratBold flex justify-end items-center gap-5'>
                    <p>Patient:</p>
                    <div className='flex border-2 border-solid border-[#67917D] rounded-xl bg-[#67917D]'>
                        {
                            [1, 2, 3].map((patientItem, index) => (
                                <p
                                    key={`patient_${index}`}
                                    className={`px-4 py-1 ${patientItem === 1 ? 'rounded-l-xl' : patientItem === 3 ? 'rounded-r-xl' : 'rounded-none'} ${patientItem === currentPatient ? 'bg-[#67917D] text-white' : 'bg-white text-[#67917D]'}`}>
                                    {patientItem}
                                </p>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div>
                {
                    isGuessEstimated && correctSaltScore != saltScore ? (
                        <div className='flex justify-center h-10'>
                            <div><Image src='/images/good-guess.png' width={300} height={150} alt="Congrats for the earned points" /></div>
                        </div>
                    ) : isGuessEstimated && correctSaltScore == saltScore ? (
                        <div className='flex justify-center h-10'>
                            <div><Image src='/images/very-good-guess.png' width={400} height={200} alt="Congrats for the earned points" /></div>
                        </div>
                    ) : (
                        <h2 className="text-2xl MontserratBold text-[#018167] text-center h-10">
                            <span>Select your guess for {guessMode === 'baseline' ? 'Baseline' : 'Week 24'}</span>
                        </h2>
                    )
                }
                <Gauge path={pathname} />
            </div>
        </div>
    );
}

export default Guess;