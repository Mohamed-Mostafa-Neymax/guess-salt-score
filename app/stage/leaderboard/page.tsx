import Leaderboard from "@/components/leaderboard";
import SlideWrapper from "@/components/ui/slide-wrap";

const LeaderboardPage: React.FC = () => {
    return (
        <>
            <div className="flex items-center justify-evenly relative z-10 w-full h-full text-center">
                <SlideWrapper isShownLogo={false} isLitfuloLogo={true}>
                    <Leaderboard />
                </SlideWrapper>
            </div>
            <p className="text-[0.5rem] relative w-full text-center -bottom-2 font-bold">Please see the LITFULO Summary of Product Characteristics within the booth.</p>
        </>
    );
}

export default LeaderboardPage;