const References: React.FC<{ onClosePopup?: () => void; }> = ({ onClosePopup }) => {
    return (
        <div className="px-20">
            <h2 className="text-3xl text-center MontserratBold text-[#018167] mb-8">References</h2>
            <ul className="list-decimal text-xs text-left">
                <li className="mb-3 font-bold">Olsen EA, Hordinsky MK, Price VH, <i>et al</i>. Alopecia areata investigational assessment guidelines—part II. <i>J Am Acad Dermatol</i>. 2004;51(3):440-447. doi:10.1016/j.jaad.2003.09.032</li>
                <li className="mb-3 font-bold">Olsen EA, Canfield D. SALT II: a new take on the Severity of Alopecia Tool (SALT) for determining percentage scalp hair loss. <i>J Am Acad Dermatol</i>. 2016;75(6):1268-1270. doi:10.1016/j.jaad.2016.08.042</li>
                <li className="mb-3 font-bold">LITFULO (ritlecitinib) Summary of Product Characteristics. 2023.</li>
                <li className="mb-3 font-bold">Data on file. Pfizer Inc; New York, NY.</li>
                <li className="mb-3 font-bold">King B, Zhang X, Harcha WG, <i>et al</i>. Efficacy and safety of ritlecitinib in adults and adolescents with alopecia areata: a randomised, double-blind, multicentre, phase 2b–3 trial. <i>Lancet</i>. 2023;401(10387):1518-1529. doi:10.1016/S0140-6736(23)00222-2</li>
                <li className="mb-3 font-bold">King B, Zhang X, Harcha WG, <i>et al</i>. Supplement to: Efficacy and safety of ritlecitinib in adults and adolescents with alopecia areata: a randomised, double-blind, multicentre, phase 2b–3 trial. <i>Lancet</i>. April 13, 2023. doi:10.1016/S0140-6736(23)00222-2</li>
                <li className="font-bold">King B, Senna MM, Ohyama M, <i>et al</i>. Defining severity in alopecia areata: current perspectives and a multidimensional framework. <i>Dermatol Ther</i>. 2022;12(4):825-834. doi:10.1007/s13555-022-00711-3</li>
            </ul>
            <div className="flex justify-center mt-10">
                <button
                    type="button"
                    onClick={onClosePopup}
                    className="text-[#04303E] text-xl MontserratBold underline">CLOSE</button>
            </div>
        </div>
    )
}

export default References;