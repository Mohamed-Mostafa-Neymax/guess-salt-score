import Image from "next/image";
import CustomButton from "../ui/button";

const Instructions: React.FC = () => {
    return (
        <div className="flex gap-10 fadePage">
            <div className="max-w-[720px] font-bold">
                <h2 className="text-3xl MontserratBold text-[#018167] text-center mb-10 invisible">Instructions</h2>
                <Image src='/images/instructions.PNG' width={800} height={500} alt="Instructions image" className="mb-5" />
                <p className="text-xs">
                    In 6 months, 13.4% of patients achieved SALT ≤10 with LITFULO 50 mg QD vs 1.5% with placebo (primary endpoint) and 23% of patients achieved SALT ≤20 with LITFULO 50 mg QD vs 1.6% with placebo (secondary endpoint).³ Patient images demonstrate an example of a patient who met the clinical trial primary endpoint of SALT ≤10 at Week 24. Individual results may vary.³<br />
                    <br />
                    See additional clinical trial information in the full Summary of Product Characteristics.<br />
                    <br />
                    QD=once daily; SALT=Severity of Alopecia Tool.
                </p>
            </div>
            <div>
                <h2 className="text-3xl MontserratBold text-[#018167] text-center mb-10">Instructions</h2>
                <ul className="text-[#2E4D52] text-md mb-32">
                    <li className="flex items-center gap-5 mb-10">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 146 153" fill="none">
                                <circle cx="73" cy="73" r="73" fill="#007559" />
                                <path d="M55.7712 58.6398L54.9297 59.8419L56.113 60.7096L71.113 71.7096L72.2951 72.5765L73.1889 71.4146L90.5 48.9102V149.5V151H92H112.5H114V149.5V4.5V3H112.5H95.5H94.719L94.2712 3.63981L55.7712 58.6398Z" fill="#1F526B" stroke="white" strokeWidth="3" />
                            </svg>
                        </div>
                        <span>Swipe patient image for alternative views.</span>
                    </li>
                    <li className="flex items-center gap-5 mb-10">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 146 150" fill="none">
                                <circle cx="73" cy="73" r="73" fill="#007559" />
                                <path d="M135.352 120.5H77.2118L106.635 90.5388L106.639 90.5344C116.398 80.5158 123.19 72.2298 126.92 65.7015C130.678 59.1257 132.569 52.1863 132.569 44.9046C132.569 32.0609 128.133 21.8178 119.185 14.359C110.344 6.85933 100.006 3.10449 88.2379 3.10449C76.7522 3.10449 67.1739 5.41451 59.6027 10.1465L59.6027 10.1465L59.5924 10.153C55.9016 12.5017 52.0122 15.5269 48.1006 21.1847C44.2116 26.8099 40.3402 34.9793 36.5633 47.569L35.984 49.5H38H59H59.9923L60.3805 48.5867C64.583 38.6984 68.67 33.3063 72.8964 30.3497C77.0844 27.42 81.608 26.7412 87.0697 26.7412C93.0967 26.7412 97.9715 28.5743 101.813 32.1761L101.823 32.1848L101.832 32.1933C105.682 35.682 107.569 39.8902 107.569 44.9046C107.569 49.9752 105.764 55.0583 102.018 60.1778C98.1921 65.4067 91.702 72.6754 82.4997 82.0074C82.4989 82.0083 82.4981 82.0091 82.4973 82.0099L41.2287 123.473L40.7919 123.912V124.531V144V145.5H42.2919H135.352H136.852V144V122V120.5H135.352Z" fill="#1E5168" stroke="white" strokeWidth="3" />
                            </svg>
                        </div>
                        <span>Use this slider to select your guess—the goal is to guess the actual SALT score of each patient shown. Both the SALT score and corresponding scalp hair coverage will be displayed.</span>
                    </li>
                    <li className="flex items-center gap-5">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 146 154" fill="none">
                                <circle cx="73" cy="73" r="73" fill="#007559" />
                                <path d="M49.9202 140.541L49.9229 140.544C58.5246 149.419 70.8991 152.226 85.7069 152.226C94.859 152.226 103.014 150.434 110.134 146.808C117.359 143.195 123.02 138.221 127.071 131.879C131.26 125.524 133.348 118.358 133.348 110.426C133.348 99.0018 131.45 89.9864 127.478 83.55L127.473 83.5412L127.467 83.5324C126.458 81.9466 124.927 80.2923 122.941 78.5666C121.451 77.082 119.651 75.6162 117.553 74.1661C126.603 67.2161 131.011 56.2801 131.011 41.7014C131.011 34.2905 129.054 27.6988 125.111 21.9812C121.315 16.1579 115.974 11.5787 109.145 8.23123C102.284 4.86775 94.3275 3.21094 85.3175 3.21094C72.9416 3.21094 63.2169 5.68995 56.1262 11.4404C49.0174 17.2056 44.7982 26.0605 43.0157 38.2835L42.8273 39.5752L44.0805 39.9402L63.0932 45.4778L64.6874 45.9421L64.9879 44.309C66.4535 36.3439 68.9708 30.5659 72.4084 26.7965C75.7999 23.0778 80.1873 21.2018 85.7069 21.2018C91.5694 21.2018 96.5362 22.5072 100.669 25.0548C105.916 28.5207 108.543 33.5448 108.543 40.3385C108.543 50.0775 106.607 56.5208 103.133 60.118C100.474 62.7713 96.1341 64.5416 89.8413 65.2115C88.9698 65.3042 84.7582 65.3819 80.3478 65.4338C75.9957 65.485 71.6088 65.5106 70.5001 65.5106H69.0001V67.0106V82.5855V84.0855H70.5001C71.6 84.0855 75.9827 84.1112 80.3347 84.1627C84.7446 84.2149 88.9612 84.293 89.8418 84.3864C96.6968 85.1138 101.571 87.1373 104.699 90.2655L104.707 90.2734L104.715 90.2812C108.68 94.1293 110.879 101.197 110.879 111.983C110.879 115.8 109.693 119.392 107.265 122.792L107.254 122.807L107.244 122.822C104.917 126.251 101.854 129.013 98.0296 131.11L98.0205 131.115L98.0114 131.12C94.3398 133.201 90.4408 134.235 86.291 134.235C79.1238 134.235 72.9729 132.119 68.4411 128.135C63.9173 124.158 60.8786 118.206 60.1301 110.285L59.974 108.633L58.3462 108.954L37.7095 113.028L36.5 113.267V114.5C36.5 125.927 42.9125 133.274 49.9202 140.541Z" fill="#225167" stroke="white" strokeWidth="3" />
                            </svg>
                        </div>
                        <span>Submit your final guess and secure a spot on the leaderboard! A more accurate guess will earn you more points.</span>
                    </li>
                </ul>
                <div className="flex justify-center">
                    <CustomButton
                        path="/stage/guess/baseline"
                        isActionBtn={false}
                        isDisabled={false}
                        typeBtn='button'>START NOW</CustomButton>
                </div>
            </div>
        </div>
    )
}

export default Instructions;