"use client";
import { useGetCalls } from "@/app/hooks/useGetCalls";
import { Call } from "@stream-io/video-react-sdk";

const UpcomingReminder = () => {

    const { upcomingCalls, isLoading } = useGetCalls();

    if(isLoading) return (
        <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal">
            Checking for upcoming calls...
        </h2>
    );

    console.log(upcomingCalls);

    return (
        <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal">
            {upcomingCalls.length < 1 ? "You have no upcoming calls" : upcomingCalls.length > 1 ? `You have ${upcomingCalls.length} upcoming calls, first at ${
                (upcomingCalls[0] as Call).state?.startsAt?.toLocaleString()
            }` : `You have 1 upcoming call at ${
                (upcomingCalls[0] as Call).state?.startsAt?.toLocaleString()
            }`}
        </h2>
    );
};
export default UpcomingReminder;