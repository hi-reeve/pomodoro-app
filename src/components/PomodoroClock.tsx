import React from "react";
import style from "@/components/PomodoroClock.module.scss";

type Props = {
    minutes: number;
    seconds: number;
    start: boolean;
    onStartPomodoro: () => void;
    onPausePomodoro: () => void;
};

const PomodoroClock: React.FC<Props> = ({
    onStartPomodoro,
    onPausePomodoro,
    start,
    minutes,
    seconds,
}) => {
    const togglePomodoro = () => {
        if (!start) onStartPomodoro();
        else onPausePomodoro();
    };

    return (
        <div className={style.pomodoro}>
            <div className={style["pomodoro__circle-outer"]}>
                <div className={style["pomodoro__circle-inner"]}>
                    <div className={style["pomodoro__content-wrapper"]}>
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
