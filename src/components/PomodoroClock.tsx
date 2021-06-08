import React, { useState } from "react";
import style from "@/components/PomodoroClock.module.scss";
import { useEffect } from "react";

type Props = {
    minutes: number;
};
const PomodoroClock: React.FC<Props> = ({ minutes }) => {
    const [minute, setMinute] = useState(minutes);
    const [seconds, setSeconds] = useState(0);
    const updateTime = () => {
        if (minutes === 0 && seconds === 0) {
            setSeconds(0);
            setMinute(minutes);
        } else {
            if (seconds === 0) {
                setMinute(minutes => minutes - 1);
                setSeconds(59);
            } else {
                setSeconds(seconds => seconds - 1);
            }
        }
    };

    useEffect(() => {
        const intv = setInterval(updateTime, 1000);
        return () => {
            clearInterval(intv);
        };
    });

    return (
        <div className={style.pomodoro}>
            <div className={style["pomodoro__circle-outer"]}>
                <div className={style["pomodoro__circle-inner"]}>
                    <div className="grid place-items-center h-full">
                        <span className="text-7xl font-bold mx-auto">
                            {minute.toString().padStart(2, "0")}:
                            {seconds.toString().padStart(2, "0")}
                        </span>
                        <div className="tracking-[1rem] uppercase">Pause</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PomodoroClock;
