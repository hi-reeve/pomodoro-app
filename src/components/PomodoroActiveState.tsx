import React from "react";
import style from "@/components/PomodoroActiveState.module.scss";
import { PomodoroState } from "@/types/Settings";

type Props = {
    currentState: PomodoroState;
};
type MenuState = {
    label: string;
    value: PomodoroState;
};
const PomodoroActiveState: React.FC<Props> = ({ currentState }) => {
    const pomodoroState: MenuState[] = [
        {
            label: "Pomodoro",
            value: "active",
        },
        {
            label: "Short Break",
            value: "short",
        },
        {
            label: "Long Break",
            value: "long",
        },
    ];
    return (
        <div className={style["pomodoro-state"]}>
            {pomodoroState.map(state => (
                <div
                    key={state.value}
                    
                    className={`${style["pomodoro-state__legend"]} ${
                        state.value === currentState
                            ? style["pomodoro-state__legend-active"]
                            : ""
                    } `}
                >
                    {state.label}
                </div>
            ))}
        </div>
    );
};

export default PomodoroActiveState;
