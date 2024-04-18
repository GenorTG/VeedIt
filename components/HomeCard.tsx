import { cn } from "@/lib/utils";
import Image from "next/image";

type HomeCardProps = {
    img: string, 
    color: string, 
    head: string, 
    text: string, 
    handleClick: () => void
}

const HomeCard = ({ img, color, head, text, handleClick}: HomeCardProps) => {
    return (
        <div className={cn("px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer", color)}
            onClick={handleClick}
        >
            <div className="glassmorphism flex-center size-12 rounded-[10px]">
                <Image src={img} alt="meeting" width={27} height={27} />
            </div>
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold">
                    {head}
                </h1>
                <p className="text-lg font-normal">
                    {text}
                </p>
            </div>
        </div>
    );
};
export default HomeCard;