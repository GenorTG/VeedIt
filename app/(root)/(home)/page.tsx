import MeetingTypeList from "@/components/MeetingTypeList";
import { CurrentDate, DigitalClock } from "@/components/common/time";


const Home = () => {


    return (
        <section className="flex size-full flex-col gap-10 text-white">
            <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
                <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 p-11">
                    <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal">Upcoming Meeting at time23123</h2>
                    <div className="flex flex-col gap-2">
                        <h1 className="font-extrabold text-4xl lg:text-7xl">
                            <DigitalClock />
                        </h1>
                        <p className="text-lg font-medium text-sky-1">
                            <CurrentDate />
                        </p>
                    </div>
                </div>
            </div>

            <MeetingTypeList />
        </section>
    );
};
export default Home;