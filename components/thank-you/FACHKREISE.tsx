const FACHKREISE: React.FC<{ onClosePopup?: () => void; }> = ({ onClosePopup }) => {
    return (
        <div className="px-10">
            <h2 className="text-2xl MontserratBold text-[#018167] mb-10 text-center">Basisinformation – Fachkreise</h2>
            <div className="text-xs">
                <p>
                    ▼ Dieses Arzneimittel unterliegt einer zusätzlichen Überwachung. Dies ermöglicht eine schnelle Identifizierung neuer Erkenntnisse über die Sicherheit. Angehörige von Gesundheitsberufen sind aufgefordert, jeden Verdachtsfall einer Nebenwirkung zu melden. Hinweise zur Meldung von Nebenwirkungen, siehe Abschnitt 4.8 der Fachinformation.
                </p>
                <p className="font-bold">Litfulo® 50 mg Hartkapseln</p>
                <p>Wirkstoff: Ritlecitinib</p>
                <p>
                    <span className="font-bold">Zusammensetzung:</span> Wirkstoff: Jede Hartkps. ent. Ritlecitinibtosylat entspr. 50 mg Ritlecitinib. Sonst. Bestandteile: Mikrokrist. Cellulose, Lactose-Monohydrat, Crospovidon, Glyceroldibehenat; Hülle d. Hartkps: Hypromellose (E464), Titandioxid (E171), Eisen(III)-hydroxid-oxid x H₂O (E172), Brilliantblau FCF (E133); Drucktinte: Schellack, Propylenglycol, konz. Ammoniak-Lsg., Eisen(II,III)-oxid (E172), Kaliumhydroxid. <span className="font-bold">Anwendungsgebiete:</span> Litfulo wird angewendet f. d. Behandl. v. schwerer Alopecia areata b. Erw. u. Jugendl. ab e. Alter v. 12 J. <span className="font-bold">Gegenanzeigen:</span> Überempfindl. gg. d. Wirkstoff o. e. d. sonst. Bestandteile. Aktive, schwerwiegende Infektionen, einschl. Tuberkulose. Schwere Leberfunktionsstörungen. Schwangerschaft u. Stillzeit. <span className="font-bold">Nebenwirkungen:</span> Häufig: Herpes zoster, Follikulitis, Infekt. oberen Atemw.; Schwindelgefühl; Diarrhoe; Akne, Urtikaria, Ausschlag; Kreatinphosphokinase im Blut erhöht, Lymphozytenzahl erniedrigt, Alaninaminotransferase erhöht Gelegentlich: Thrombozytenzahl erniedrigt, Aspartataminotransferase erhöht auf {'>'} 3 × ULN. <span className="font-bold">Warnhinweise:</span> Enth. Lactose-Monohydrat. Weitere Hinweise siehe Fachinformation. <span className="font-bold">Abgabestatus:</span> Verschreibungspflichtig. <span className="font-bold">Pharmazeutischer Unternehmer:</span> Pfizer Europe MA EEIG, Boulevard de la Plaine 17, 1050 Brüssel, Belgien. <span className="font-bold">Repräsentant in Deutschland:</span> PFIZER PHARMA GmbH, Linkstr. 10, 10785 Berlin. <span className="font-bold">Stand:</span> September 2023. b-3v1lt-hk-50
                </p>
            </div>
            <div className="flex justify-center mt-10">
                <button
                    type="button"
                    onClick={onClosePopup}
                    className="text-[#04303E] text-xl MontserratBold underline">CLOSE</button>
            </div>
        </div>
    )
}

export default FACHKREISE;