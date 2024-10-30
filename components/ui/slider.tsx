'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import * as ReactDOMServer from "react-dom/server";

const Slider: React.FC<{ slides: string[]; guessMode: string; saltScore: string; scalpCoverage: string; }> = ({ slides, guessMode, saltScore, scalpCoverage }) => {
    const [notifySwipe, setNotifySwipe] = useState<boolean>(true);

    return (
        <>
            <div className={`text-center capitalize ${guessMode === 'BASELINE' ? 'bg-[#1F536B]' : 'bg-[#007259]' } text-white text-smd py-2 rounded-t-xl`}>
                {guessMode}
            </div>
            <Swiper
                onSlideChange={() => { setNotifySwipe(false) }}
                modules={[Pagination]}
                pagination={{
                    clickable: true,
                    renderBullet: function (_index, className) {
                        return ReactDOMServer.renderToStaticMarkup(<div className={className}></div>);
                    },
                }}
                className="mySwiper">
                {
                    slides.map((patientSrc: any, index: any) => (
                        <SwiperSlide key={`patient_${index}`}>
                            <div className='relative'>
                                {
                                    notifySwipe && (
                                        <div className='absolute bottom-0 w-full flex flex-col items-center pb-20 text-md text-white font-light sideBounce'>
                                            <Image
                                                src='/images/swipe.png'
                                                width={50}
                                                height={100}
                                                alt='Swipe Hint' />
                                            <p>swipe for more angles</p>
                                        </div>
                                    )
                                }
                                <Image
                                    src={patientSrc}
                                    width={300}
                                    height={380}
                                    alt='patient1_baseline1'
                                    className='swiperSLideImage' />
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className={`flex justify-center gap-10 capitalize ${guessMode === 'BASELINE' ? 'bg-[#1F536B]' : 'bg-[#007259]' } py-5 rounded-b-xl`}>
                <div className='px-8 border-r-2 border-solid border-white'>
                    <p className="text-white text-sm mb-3">SALT SCORE:</p>
                    <p className='text-[#E6AFA4] text-2xl'>{saltScore}</p>
                </div>
                <div className='pr-8'>
                    <p className='text-white text-sm mb-3'>SCALP COVERAGE:</p>
                    <p className='text-[#E6AFA4] text-2xl'>{scalpCoverage}<sup>%</sup></p>
                </div>
            </div>
        </>
    )
}

export default Slider;