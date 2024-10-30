'use client';

import { useEffect } from 'react';

import CustomButton from "../ui/button";

interface FullscreenHTMLElement extends HTMLElement {
    webkitRequestFullscreen?: () => Promise<void>;
    msRequestFullscreen?: () => Promise<void>;
}

const Footer: React.FC = () => {
    const openFullscreen = () => {
        const element = document.documentElement as FullscreenHTMLElement;
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.webkitRequestFullscreen) { // Safari
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) { // Older versions of Internet Explorer/Edge
            element.msRequestFullscreen();
        }
    };

    useEffect(() => {
        // Automatically open fullscreen if allowed (may not work on page load in most browsers)
        openFullscreen();
    }, []);


    return (
        <div className="flex justify-between items-end w-full text-[#C0E0E8] text-xs">
            <div className="w-5/12">
                <p className="mb-4">SALT=Severity of Alopecia Tool</p>
                <p>
                    <span className="text-white">References:</span> 1. LITFULO (ritlecitinib) Summary of Product Characteristics. 2023. 2. King B, Zhang X, Harcha WG, et al. Efficacy and safety of ritlecitinib in adults and adolescents with alopecia areata: a randomised, double-blind, multicentre, phase 2b–3 trial. Lancet. 2023;401(10387):1518-1529. doi:10.1016/S0140-6736(23)00222-2 3. Olsen EA, Hordinsky MK, Price VH, et al. Alopecia areata investigational assessment guidelines—part II. J Am Acad Dermatol. 2004;51(3):440-447. doi:10.1016/j.jaad.2003.09.032
                </p>
            </div>
            <CustomButton
                path="/stage/enter-name"
                isActionBtn={true}
                typeBtn="submit"
                isDisabled={false}
                onSubmitHandler={openFullscreen}>TAP TO BEGIN</CustomButton>
        </div>
    )
}

export default Footer