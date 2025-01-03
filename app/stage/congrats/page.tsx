import Congrats from "@/components/congrats";
import SideActions from "@/components/ui/side-actions";
import SlideWrapper from "@/components/ui/slide-wrap";

const CongratsPage: React.FC = () => {
    return (
        <>
            <div className="flex items-center justify-evenly relative z-10 w-full h-full text-center">
                <SlideWrapper isShownLogo={true} isLitfuloLogo={false}>
                    <Congrats />
                </SlideWrapper>
                <SideActions isGuessingStage={true} />
            </div>
            <p className="text-[0.5rem] relative w-full text-center -bottom-2 font-bold">Please see the LITFULO Summary of Product Characteristics within the booth.</p>
        </>
    );
}

export default CongratsPage;