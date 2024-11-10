import Summary from "@/components/summary";
import SideActions from "@/components/ui/side-actions";
import SlideWrapper from "@/components/ui/slide-wrap";

const SummaryPage: React.FC = () => {
    return (
        <>
            <div className="flex items-center justify-evenly relative z-10 w-full h-full text-center">
                <SlideWrapper isShownLogo={false} isLitfuloLogo={false}>
                    <Summary />
                </SlideWrapper>
                <SideActions isGuessingStage={true} />
            </div>
            <p className="text-[0.5rem] relative w-full text-center -bottom-2 font-bold">Please see the LITFULO Summary of Product Characteristics within the booth.</p>
        </>
    );
}

export default SummaryPage;