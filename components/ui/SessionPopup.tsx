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
            else {
                clearInterval(interval);
                onClosePopup();
            }
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, [seconds]);

    function startOverHandler() {
        const userID = localStorage.getItem('user_id');
        localStorage.clear();
        if (userID) {
            localStorage.setItem('user_id', userID);
            localStorage.setItem('current_patient', '1');
            router.push('/stage/overview');
        }
    }

    return (
        <div className="pt-4 px-10">
            <h2 className="text-2xl text-center MontserratBold text-[#018167] mb-10">Would you like to start over?</h2>
            <h2 className="text-2xl text-center MontserratBold text-[#018167] mb-10">Your session is about to expire</h2>
            <h2 className="text-2xl text-center MontserratBold mb-10">Please press “CONTINUE” to keep going.</h2>
            <h2 className="text-4xl text-center MontserratBold text-[#018167] mb-10">00:{seconds > 9 ? seconds : `0${seconds}`}</h2>
            <div className='flex justify-evenly'>
                <div className="w-fit">
                    <CustomButton
                        path={pathname}
                        isActionBtn={true}
                        isDisabled={false}
                        typeBtn='submit'
                        onSubmitHandler={() => { onClosePopup() }}>
                        CONTINUE
                    </CustomButton>
                </div>
                <div className="w-fit">
                    <CustomButton
                        path='/stage/enter-name'
                        isActionBtn={true}
                        isDisabled={false}
                        typeBtn='submit'
                        onSubmitHandler={startOverHandler}>
                        START OVER
                    </CustomButton>
                </div>
            </div>

        </div>
    )
}

export default SessionPopup;