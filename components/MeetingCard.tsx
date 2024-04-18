"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { placeholderUsers } from "@/constants";
import { useToast } from "./ui/use-toast";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

interface MeetingCardProps {
  title: string;
  date: string;
  icon: string;
  isPreviousMeeting?: boolean;
  buttonIcon1?: string;
  buttonText?: string;
  handleClick: () => void;
  link: string;
}

const MeetingCard = ({
    icon,
    title,
    date,
    isPreviousMeeting,
    buttonIcon1,
    handleClick,
    link,
    buttonText,
}: MeetingCardProps) => {
    const { toast } = useToast();

    return (
        <section className="flex min-h-[258px] w-full flex-col justify-between rounded-[14px] bg-dark-1 px-5 py-8 xl:max-w-[568px]">
            <article className="flex flex-col gap-5">
                <Image src={icon} alt="upcoming" width={28} height={28} />
                <div className="flex justify-between">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl font-bold">{title}</h1>
                        <p className="text-base font-normal">{date}</p>
                    </div>
                </div>
            </article>
            <article className={cn("relative flex-center", {})}>
                <div className="relative flex w-full max-sm:hidden h-[50px]">
                    {placeholderUsers?.slice(0,4).map((user: { name: string, img: string,}, index) => (
                        <HoverCard key={index}>
                            <HoverCardTrigger asChild>
                                <Image
                                    key={index}
                                    src={user.img}
                                    alt="attendees"
                                    width={50}
                                    height={50}
                                    className={cn("rounded-full cursor-pointer hover:z-10 border-dark-4 border-2 hover:border-sky-1 transition-all ease-in-out", { absolute: index > 0 })}
                                    style={{ top: 0, left: index * 28 }}
                                />
                            </HoverCardTrigger>
                            <HoverCardContent className='bg-dark-1 w-fit'>
                                {user.name}
                            </HoverCardContent>
                        </HoverCard>
                    ))}
                    {placeholderUsers && placeholderUsers.length > 4 && (
                        <div className="rounded-full bg-dark-4 size-[50px] flex-center relative left-[65px] ">
                            <p className="text-sm">
                                    +{placeholderUsers.length - 4}
                            </p>
                        </div>
                    )}
                </div>
                {!isPreviousMeeting && (
                    <div className="flex gap-2">
                        <Button onClick={handleClick} className="rounded bg-blue-1 px-6 text-center gap-2">
                            {buttonIcon1 && (
                                <Image src={buttonIcon1} alt="feature" width={20} height={20} />
                            )}
                            {buttonText}
                        </Button>
                        <Button
                            onClick={() => {
                                navigator.clipboard.writeText(link);
                                toast({
                                    title: "Link Copied",
                                });
                            }}
                            className="bg-dark-4 px-6"
                        >
                            <Image
                                src="/icons/copy.svg"
                                alt="feature"
                                width={20}
                                height={20}
                            />
              &nbsp; Copy Link
                        </Button>
                    </div>
                )}
            </article>
        </section>
    );
};

export default MeetingCard;