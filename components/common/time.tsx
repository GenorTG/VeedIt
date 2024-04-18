"use client";

import { days, months } from "@/constants";
import { useEffect, useState } from "react";

export function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();

    // Format the time nicely
    const half = hours > 12 ? "PM" : "AM";
    hours = half === "PM" ? hours - 12 : hours;
    const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")} ${half}`;
    
    return formattedTime;
}

export const DigitalClock = () => {

    const [currentTIme, setCurrentTIme] = useState(getCurrentTime());

    useEffect(() => {
        setInterval(() => {
            setCurrentTIme(getCurrentTime());
        }, 60000);
    }, []);

    return (
        <time>
            {currentTIme}
        </time>
    );
};

export const CurrentDate = () => {

    const now: Date = new Date();
    const day: string = days[now.getDay() -1].name;
    const month: string = months[now.getMonth()].name; 

    const todaysDate = `${day}, ${now.getDate()} ${month} ${now.getFullYear()}`;

    return (
        <p>
            {todaysDate}
        </p>
    );
};