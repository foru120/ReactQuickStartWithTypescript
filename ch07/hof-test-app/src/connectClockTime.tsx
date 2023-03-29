import { useEffect, useState } from "react";
import DateAndTime from 'date-and-time';

export enum TimeFormatEnum {
    HHmmss = "HH:mm:ss",
    HHmm = "HH:mm",
    HHmmKOR = "HH시 mm분",
    HHmmssKOR = "HH시 mm분 ss초"
};

export const connectClockTime = (
    TargetComponent: React.ComponentType<any>,
    timeFormat: TimeFormatEnum,
    interval: number
) => {
    return (props: any) => {  
        let [currentTime, setCurrentTime] = useState(DateAndTime.format(new Date(), timeFormat));

        useEffect(() => {
            const handler = window.setInterval(() => {
                setCurrentTime(DateAndTime.format(new Date(), timeFormat));
            }, interval);
            
            return () => window.clearInterval(handler);
        }, []);

        return <TargetComponent {...props} currentTime={currentTime} />;
    };
};