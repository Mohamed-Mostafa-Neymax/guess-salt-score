'use client';

import { useAppDispatch, useAppSelector } from "@/store";
import Image from "next/image";

import { PATIENTS } from "@/model/patients";
import Slider from "../ui/slider";
import CustomButton from "../ui/button";
import { useEffect } from "react";
import { guessActions } from "@/store/guess-slice";

const PatientSummary: React.FC = () => {
    const dispatch = useAppDispatch();
    const currentPatient = useAppSelector(state => state.guessReducer.patient);
    useEffect(() => {
        const updatedPatient = localStorage.getItem('current_patient');
        if (updatedPatient)
            dispatch(guessActions.persistPatient(+updatedPatient));
        else
            localStorage.setItem('current_patient', '1');
    }, []);

    function nextPatientHandler() {
        localStorage.setItem('current_patient', `${currentPatient < 3 ? currentPatient + 1 : currentPatient}`);
    }

    return (
        <div className="flex gap-24 fadePage">
            <div className="w-[1000px]">
                <div className="flex gap-5">
                    <div className="w-[400px] max-w-[720px] font-bold mt-20">
                        <Slider
                            slides={PATIENTS[`patient${currentPatient}`].baseline.slides}
                            guessMode='BASELINE'
                            saltScore={PATIENTS[`patient${currentPatient}`].baseline.saltScore}
                            scalpCoverage={PATIENTS[`patient${currentPatient}`].baseline.scalpCoverage} />
                    </div>

                    <div className="w-[400px] max-w-[720px] font-bold mt-20">
                        <Slider
                            slides={PATIENTS[`patient${currentPatient}`].week24.slides}
                            guessMode='WEEK 24'
                            saltScore={PATIENTS[`patient${currentPatient}`].week24.saltScore}
                            scalpCoverage={PATIENTS[`patient${currentPatient}`].week24.scalpCoverage} />
                    </div>
                </div>
                <p className='text-xl my-5'>
                    Real patient images from the LITFULO pivotal clinical study. All patients shown are ≥12 years of age. Patient images are used with permission.⁴
                    <br />
                    <br />
                    Patient images demonstrate an example of a patient who met the clinical trial primary endpoint of SALT ≤10 at Week 24. Individual results may vary.³
                    <br />
                    <br />
                    QD=once daily; SALT=Severity of Alopecia Tool.
                </p>
                <div className='text-[#67917D] text-2xl MontserratBold flex justify-end items-center gap-8'>
                    <p>Patient:</p>
                    <div className='flex border-4 border-solid border-[#67917D] rounded-xl bg-[#67917D]'>
                        {
                            [1, 2, 3].map((patientItem, index) => (
                                <p
                                    key={`patient_${index}`}
                                    className={`px-8 py-2 ${patientItem === 1 ? 'rounded-l-xl' : patientItem === 3 ? 'rounded-r-xl' : 'rounded-none'} ${patientItem === currentPatient ? 'bg-[#67917D] text-white' : 'bg-white text-[#67917D]'}`}>
                                    {patientItem}
                                </p>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-20">
                <p className="text-3xl MontserratBold">At Week 24, 13.4% of patients achieved SALT ≤10 with LITFULO 50 mg QD vs 1.5% with placebo (P=0.0003).³,⁵</p>
                <p className="text-3xl">By Week 48, LITFULO 50 mg QD helped 31% of patients achieve SALT ≤10.⁶</p>
                <Image src='/images/patient-summary.png' width={620} height={300} alt="Patient Summary Image" />
                <div className="flex justify-center">
                    <CustomButton
                        path={currentPatient === 3 ? '/stage/congrats' : '/stage/guess/baseline'}
                        isActionBtn={false}
                        isDisabled={false}
                        typeBtn='submit'
                        onSubmitHandler={nextPatientHandler}>
                        {currentPatient === 3 ? 'SEE YOUR RESULTS': 'NEXT PATIENT'}
                    </CustomButton>
                </div>
            </div>
        </div>
    )
}

export default PatientSummary;