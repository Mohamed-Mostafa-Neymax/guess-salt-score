'use client';

import { useAppDispatch, useAppSelector } from "@/store";
import Image from "next/image";

import { PATIENTS } from "@/model/patients";
import Slider from "../ui/slider";
import CustomButton from "../ui/button";
import { useEffect } from "react";
import { guessActions } from "@/store/guess-slice";
import { useRouter } from "next/navigation";

const PatientSummary: React.FC = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const currentPatient = useAppSelector(state => state.guessReducer.patient);
    useEffect(() => {
        const updatedPatient = localStorage.getItem('current_patient');
        if (updatedPatient)
            dispatch(guessActions.persistPatient(+updatedPatient));
        else
            localStorage.setItem('current_patient', '1');
    }, []);

    async function nextPatientHandler() {
        if (currentPatient === 3)
            router.push('/stage/congrats');
        else
            router.push('/stage/guess/baseline');
        localStorage.setItem('current_patient', `${currentPatient < 3 ? currentPatient + 1 : 3}`);
        dispatch(guessActions.persistPatient(currentPatient < 3 ? currentPatient + 1 : 3));
    }

    return (
        <div className="flex gap-5 fadePage">
            <div className="w-[1000px]">
                <div className="flex gap-5">
                    <div className="w-[250px] max-w-[250px] font-bold mt-6">
                        <Slider
                            slides={PATIENTS[`patient${currentPatient}`].baseline.slides}
                            guessMode='BASELINE'
                            saltScore={PATIENTS[`patient${currentPatient}`].baseline.saltScore}
                            scalpCoverage={PATIENTS[`patient${currentPatient}`].baseline.scalpCoverage} />
                    </div>

                    <div className="w-[250px] max-w-[250px] font-bold mt-6">
                        <Slider
                            slides={PATIENTS[`patient${currentPatient}`].week24.slides}
                            guessMode='WEEK 24'
                            saltScore={PATIENTS[`patient${currentPatient}`].week24.saltScore}
                            scalpCoverage={PATIENTS[`patient${currentPatient}`].week24.scalpCoverage} />
                    </div>
                </div>
                <p className='text-xs mt-1.5'>
                    Real patient images from the LITFULO pivotal clinical study. All patients shown are ≥12 years of age. Patient images are used with permission.<sup>4</sup>
                </p>
                <p className='text-xs mt-1.5'>
                    Patient images demonstrate an example of a patient who met the clinical trial primary endpoint of SALT ≤10 at Week 24. Individual results may vary.³
                </p>
                <div className="flex justify-between">
                    <p className='text-xs mt-1.5'>
                        QD=Once Daily; SALT=Severity of Alopecia Tool.
                    </p>
                    <div className='text-[#67917D] text-xs MontserratBold flex justify-end items-center gap-5 relative top-5'>
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
            </div>

            <div className="flex flex-col justify-center items-center gap-6">
                <p className="text-md MontserratBold">At Week 24, 13.4% of patients achieved SALT ≤10 with LITFULO 50 mg QD vs 1.5% with placebo (<i>P</i>=0.0003).<sup>3,5</sup></p>
                <p className="text-md">By Week 48, LITFULO 50 mg QD helped 31% of patients achieve SALT ≤10.⁶</p>
                <Image src='/images/patient-summary.png' width={620} height={300} alt="Patient Summary Image" />
                <div className="flex justify-center">
                    <CustomButton
                        isActionBtn={false}
                        isDisabled={false}
                        onSubmitHandler={nextPatientHandler}>
                        {currentPatient === 3 ? 'SEE YOUR RESULTS' : 'NEXT PATIENT'}
                    </CustomButton>
                </div>
            </div>
        </div>
    )
}

export default PatientSummary;