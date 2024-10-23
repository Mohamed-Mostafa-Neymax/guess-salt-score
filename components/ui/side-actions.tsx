'use client';

import { useState } from "react";

const SideActions: React.FC = () => {
    const [points, setPoints] = useState<number>(60);

    function startOverHandler() { }
    function openRefsHandler() { }
    function openOverviewHandler() { }

    return (
        <div className="text-center text-white flex flex-col justify-end items-center gap-10 h-full">
            <p>POINTS<br />EARNED:<br />0</p>
            <div
                className="border-2 border-solid border-white rounded-[60px] bg-[#003D53] w-28 max-w-28 h-96 max-h-96 relative"
                style={{ boxShadow: '4px 4px 16px 0px rgba(255, 255, 255, 0.20)' }}>
                {/* Numbers Here */}
                <div className="absolute h-full w-48 z-20 right-0 flex flex-col justify-evenly">
                    <div className="flex items-center gap-5">
                        <span>80</span> <span className="block w-40 h-[2px] bg-white"></span>
                    </div>
                    <div className="flex items-center gap-5">
                        <span>60</span> <span className="block w-40 h-[2px] bg-white"></span>
                    </div>
                    <div className="flex items-center gap-5">
                        <span>40</span> <span className="block w-40 h-[2px] bg-white"></span>
                    </div>
                    <div className="flex items-center gap-5">
                        <span>20</span> <span className="block w-40 h-[2px] bg-white"></span>
                    </div>
                </div>
                {/* Fill Here*/}
                <div
                    className={`absolute bottom-0 z-10 rounded-b-[60px] w-full`}
                    style={{
                        background: 'linear-gradient(360deg, #CFDEDC 0%, #73B6AC 100%)', 
                        height: points + '%'
                    }} />
            </div>
            <button type="button" onClick={startOverHandler}>SALT OVERVIEW</button>
            <button type="button" onClick={openOverviewHandler}>SALT OVERVIEW</button>
            <button type="button" onClick={openRefsHandler}>REFS</button>
        </div>
    )
}

export default SideActions;