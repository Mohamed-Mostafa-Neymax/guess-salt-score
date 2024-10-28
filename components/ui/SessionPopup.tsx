'use client';

import { usePathname } from 'next/navigation';
import CustomButton from './button';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const SessionPopup: React.FC<{ onClosePopup: () => void; }> = ({ onClosePopup }) => {
    const pathname = usePathname();
    const router = useRouter();
    const [seconds, setSeconds] = useState<number>(30);

    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds > 0)
                setSeconds(prevState => prevState - 1);
            else 
                onClosePopup();
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, [seconds])

    return (
        <div className="pt-20 px-28 mb-28">
            <h2 className="text-4xl text-center MontserratBold text-[#018167] mb-10">Would you like to start over?</h2>
            <h2 className="text-4xl text-center MontserratBold text-[#018167] mb-10">Your session is about to expire</h2>
            <h2 className="text-4xl text-center MontserratBold mb-10">Please press “CONTINUE” to keep going.</h2>
            <h2 className="text-6xl text-center MontserratBold text-[#018167] mb-10">00:{seconds > 9 ? seconds : `0${seconds}`}</h2>
            <div className="w-full flex justify-center gap-32">
                <CustomButton
                    path={pathname}
                    isActionBtn={true}
                    isDisabled={false}
                    typeBtn='submit'
                    onSubmitHandler={() => { onClosePopup() }}>
                    CONTINUE
                </CustomButton>
                <CustomButton
                    path='/stage/enter-name'
                    isActionBtn={true}
                    isDisabled={false}
                    typeBtn='submit'
                    onSubmitHandler={() => { onClosePopup() }}>
                    START OVER
                </CustomButton>
            </div>
        </div>
    )
}

export default SessionPopup;