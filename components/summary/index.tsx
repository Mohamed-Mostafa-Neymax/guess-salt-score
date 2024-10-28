import CustomButton from "../ui/button";

const Summary: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-between h-full">
            <div className="h-full flex flex-col justify-center px-20">
                <h2 className="text-5xl MontserratBold text-[#018167] mb-10">Summary of LITFULO safety profile</h2>
                <p className="text-3xl font-semibold mb-10 text-left">
                    The most frequently reported adverse reactions are diarrhoea (9.2%), acne (6.2%), upper respiratory tract infections (6.2%), urticaria (4.6%), rash (3.8%), folliculitis (3.1%), and dizziness (2.3%).³
                </p>
                <p className="text-3xl font-semibold text-left">See additional safety information in the full Summary of Product Characteristics.</p>
            </div>
            <CustomButton
                path='/stage/thank-you'
                isActionBtn={false}
                isDisabled={false}
                typeBtn='button'>
                NEXT
            </CustomButton>
        </div>
    )
}

export default Summary;