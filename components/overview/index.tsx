'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

import CustomButton from "../ui/button";

const Overview: React.FC<{ isPopup: boolean; onClosePopup?: () => void; }> = ({ isPopup, onClosePopup }) => {
    const router = useRouter();
    
    return (
        <div className="fadePage">
            <div className="pt-9 mb-7">
                <h2 className="text-2xl MontserratBold text-[#018167] mb-10">Using SALT to measure scalp hair loss<sup>1-3</sup></h2>
                <ul className="list-disc font-semibold text-xs pl-6">
                    <li className="mb-4">The Severity of Alopecia Tool (SALT) score measures hair loss on a scale of 0 (no scalp hair loss) to 100 (complete scalp hair loss).</li>
                    <li>For example, SALT 20 can be defined as 20% scalp hair loss and/or 80% scalp hair coverage.</li>
                </ul>
            </div>
            <div className="flex mb-14">
                <div className="text-center text-xs MontserratBold border-r border-solid border-[#016268] pr-10">
                    <h2 className="mb-5">SALT score</h2>
                    <Image src='/images/degrees.png' width={1000} height={200} alt="Degrees of SALT" />
                    <div className="flex justify-between mt-5">
                        <h3>No scalp<br />hair loss</h3>
                        <h3 className="text-right">Complete<br />scalp hair loss</h3>
                    </div>
                </div>
                <div className="text-center pl-10 max-w-[500px]">
                    <h2 className="mb-5 text-xs MontserratBold">The SALT score equals the sum of the proportions of scalp hair loss per quadrant</h2>
                    <div className="flex justify-evenly text-xs mb-5">
                        <div className="flex flex-col justify-between">
                            <Image src='/images/head-left.png' width={100} height={200} alt="Top and Left of Brain" />
                            <h3 className="MontserratBold">Top and Left</h3>
                        </div>
                        <div className="flex flex-col justify-between">
                            <Image src='/images/head-right.png' width={100} height={200} alt="Back and Right of Brain" />
                            <h3 className="MontserratBold">Back and Right</h3>
                        </div>
                    </div>
                    <p className="font-semibold text-xs">Adapted from Olsen EA, <i>et al</i>. <i>J AM Acad Dermatol</i>. 2004;51(3):440-447.</p>
                </div>
            </div>
            <div className="flex justify-center">
                {
                    isPopup ? (
                        <button
                            type="button"
                            onClick={onClosePopup}
                            className="text-[#04303E] text-xl MontserratBold underline">CLOSE</button>
                    ) : (
                        <CustomButton
                            isActionBtn={false}
                            isDisabled={false}
                            onSubmitHandler={() => router.push('/stage/instructions')}>SEE THE INSTRUCTIONS</CustomButton>
                    )
                }
                
            </div>
        </div>
    )
}

export default Overview;