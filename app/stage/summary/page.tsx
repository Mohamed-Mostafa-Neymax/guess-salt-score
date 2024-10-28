import Summary from "@/components/summary";
import SlideWrapper from "@/components/ui/slide-wrap";

const SummaryPage: React.FC = () => {
    return (
        <>
            <div className="flex items-center justify-evenly relative z-10 w-full h-full text-center">
                <SlideWrapper isShownLogo={false}>
                    <Summary />
                </SlideWrapper>
            </div>
            <p className="relative w-full text-center -bottom-11 font-bold">Please see the LITFULO Summary of Product Characteristics within the booth.</p>
        </>
    );
}

export default SummaryPage;