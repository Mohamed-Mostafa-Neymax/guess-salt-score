const References: React.FC<{ onClosePopup?: () => void; }> = ({ onClosePopup }) => {
    return (
        <div className="pt-20 px-28 mb-28">
            <h2 className="text-6xl text-center MontserratBold text-[#018167] mb-14">References</h2>
            <ul className="list-decimal text-2xl">
                <li className="mb-5 font-bold">Olsen EA, Hordinsky MK, Price VH, et al. Alopecia areata investigational assessment guidelines—part II. J Am Acad Dermatol. 2004;51(3):440-447. doi:10.1016/j.jaad.2003.09.032</li>
                <li className="mb-5 font-bold">Olsen EA, Canfield D. SALT II: a new take on the Severity of Alopecia Tool (SALT) for determining percentage scalp hair loss. J Am Acad Dermatol. 2016;75(6):1268-1270. doi:10.1016/j.jaad.2016.08.042</li>
                <li className="mb-5 font-bold">LITFULO (ritlecitinib) Summary of Product Characteristics. 2023.</li>
                <li className="mb-5 font-bold">Data on file. Pfizer Inc; New York, NY.</li>
                <li className="mb-5 font-bold">King B, Zhang X, Harcha WG, et al. Efficacy and safety of ritlecitinib in adults and adolescents with alopecia areata: a randomised, double-blind, multicentre, phase 2b–3 trial. Lancet. 2023;401(10387):1518-1529. doi:10.1016/S0140-6736(23)00222-2</li>
                <li className="mb-5 font-bold">King B, Zhang X, Harcha WG, et al. Supplement to: Efficacy and safety of ritlecitinib in adults and adolescents with alopecia areata: a randomised, double-blind, multicentre, phase 2b–3 trial. Lancet. April 13, 2023. doi:10.1016/S0140-6736(23)00222-2</li>
                <li className="font-bold">King B, Senna MM, Ohyama M, et al. Defining severity in alopecia areata: current perspectives and a multidimensional framework. Dermatol Ther. 2022;12(4):825-834. doi:10.1007/s13555-022-00711-3</li>
            </ul>
            <div className="flex justify-center mt-24">
                <button
                    type="button"
                    onClick={onClosePopup}
                    className="text-[#04303E] text-3xl MontserratBold underline">CLOSE</button>
            </div>
        </div>
    )
}

export default References;