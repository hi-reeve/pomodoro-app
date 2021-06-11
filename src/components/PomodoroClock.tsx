import React, { useEffect } from "react";
import style from "@/components/PomodoroClock.module.scss";
import ProgressCircle from "./ProgressCircle";
import { useState } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useContext } from "react";
import { AppContext } from "@/store/AppContext";
import { PomodoroState } from "@/types/Settings";

type Props = {
    minutes: number;
    seconds: number;
    start: boolean;
    currentState: PomodoroState;
    onStartPomodoro: () => void;
    onPausePomodoro: () => void;
};

const PomodoroClock: React.FC<Props> = ({
    onStartPomodoro,
    onPausePomodoro,
    start,
    minutes,
    seconds,
    currentState,
}) => {
    const [radius, setRadius] = useState(130);
    const [strokeWidth, setStrokeWidth] = useState(5);
    const [progress, setProgress] = useState(100);
    const togglePomodoro = () => {
        if (!start) onStartPomodoro();
        else onPausePomodoro();
    };

    const isSmall = useMediaQuery(768);

    const settingCtx = useContext(AppContext);

    useEffect(() => {
        if (!isSmall) {
            setRadius(190);
            setStrokeWidth(10);
        } else {
            setRadius(130);
            setStrokeWidth(5);
        }
        return () => {
            setRadius(130);
            setStrokeWidth(5);
        };
    }, [isSmall]);

    useEffect(() => {
        switch (currentState) {
            case "active": {
                setProgress((minutes / settingCtx.pomodoro) * 100);
                break;
            }
            case "short": {
                setProgress((minutes / settingCtx.short) * 100);
                break;
            }
            case "long": {
                setProgress((minutes / settingCtx.long) * 100);
                break;
            }
            default: {
                setProgress(0);
            }
        }
    }, [minutes, currentState]);

    return (
        <div className={style.pomodoro}>
            <div className={style["pomodoro__circle-outer"]}>
                <div className={style["pomodoro__circle-inner"]}>
                    <div className={style["pomodoro__content-wrapper"]}>
                        <ProgressCircle
                            progress={progress}
                            radius={radius}
                            strokeWidth={strokeWidth}
                        />
                        <span className={style.pomodoro__time}>
                            {minutes.toString().padStart(2, "0")}:
                            {seconds.toString().padStart(2, "0")}
                        </span>
                        <button
                            onClick={togglePomodoro}
                            className={style.pomodoro__toggle}
                        >
                            {start ? "Pause" : "start"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PomodoroClock;
