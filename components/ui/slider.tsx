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
            <div className={`text-center capitalize ${guessMode === 'BASELINE' ? 'bg-[#1F536B]' : 'bg-[#007259]' } text-white text-4xl py-5 rounded-t-xl`}>
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
                                        <div className='absolute bottom-0 w-full flex flex-col items-center pb-20 text-2xl text-white font-light sideBounce'>
                                            <Image
                                                src='/images/swipe.png'
                                                width={100}
                                                height={150}
                                                alt='Swipe Hint' />
                                            <p>swipe for more angles</p>
                                        </div>
                                    )
                                }
                                <Image
                                    src={patientSrc}
                                    width={550}
                                    height={650}
                                    alt='patient1_baseline1'
                                    className='swiperSLideImage' />
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className={`flex justify-center gap-10 capitalize ${guessMode === 'BASELINE' ? 'bg-[#1F536B]' : 'bg-[#007259]' } py-5 rounded-b-xl`}>
                <div className='px-10 border-r-4 border-solid border-white'>
                    <p className="text-white text-2xl mb-3">SALT SCORE:</p>
                    <p className='text-[#E6AFA4] text-4xl'>{saltScore}</p>
                </div>
                <div>
                    <p className='text-white text-2xl mb-3'>SCALP COVERAGE:</p>
                    <p className='text-[#E6AFA4] text-4xl'>{scalpCoverage}<sup>%</sup></p>
                </div>
            </div>
        </>
    )
}

export default Slider;