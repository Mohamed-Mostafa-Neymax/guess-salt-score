import EnterName from "@/components/enter-name";
import SlideWrapper from "@/components/ui/slide-wrap";

const EnterNamePage: React.FC = () => {

    return (
        <div className="flex items-center justify-evenly relative z-10 w-full h-full">
            <SlideWrapper isShownLogo={true}>
                <EnterName />
            </SlideWrapper>
        </div>
    );
}

export default EnterNamePage;