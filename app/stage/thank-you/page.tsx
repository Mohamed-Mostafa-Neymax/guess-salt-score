import ThankYou from "@/components/thank-you";
import SlideWrapper from "@/components/ui/slide-wrap";

const ThankYouPage: React.FC = () => {
    return (
        <>
            <div className="flex items-center justify-evenly relative z-10 w-full h-full">
                <SlideWrapper isShownLogo={false}>
                    <ThankYou />
                </SlideWrapper>
            </div>
            <p className="relative w-full text-center -bottom-11 font-bold">Please see the LITFULO Summary of Product Characteristics within the booth.</p>
        </>
    );
}

export default ThankYouPage;