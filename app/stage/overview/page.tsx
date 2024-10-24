import Overview from "@/components/overview";
import SideActions from "@/components/ui/side-actions";
import SlideWrapper from "@/components/ui/slide-wrap";

export default function OverviewPage() {
    return (
        <>
            <div className="flex items-center justify-evenly relative z-10 w-full h-full">
                <SlideWrapper>
                    <Overview isPopup={false} />
                </SlideWrapper>
                <SideActions isGuessingStage={false} />
            </div>
            <p className="relative w-full text-center -bottom-11 font-bold">Please see the LITFULO Summary of Product Characteristics within the booth.</p>
        </>
    );
}
