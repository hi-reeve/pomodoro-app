import React, { useEffect, useState } from "react";
import style from "@/App.module.scss";
import PomodoroActiveState from "./components/PomodoroActiveState";
import { ISettings, PomodoroState } from "./types/Settings";
import PomodoroClock from "./components/PomodoroClock";
import { useContext } from "react";
import { AppContext, defaultSettings } from "./store/AppContext";
import PomodoroSettings from "./components/PomodoroSettings";

function App() {
    const [currentPomodoroState, setCurrentPomodoroState] =
        useState<PomodoroState>("active");
    const settingContext = useContext(AppContext);
    const [start, setStart] = useState<boolean>(false);

    const [minutes, setMinutes] = useState<number>(defaultSettings.pomodoro);
    const [seconds, setSeconds] = useState<number>(0);
    const [pomodoroRound, setPomodoroRound] = useState<number>(1);

    // init settings
    useEffect(() => {
        const localSettings = localStorage.getItem("settings");
        if (localSettings) {
            settingContext.SET_STATE(JSON.parse(localSettings) as ISettings);
            setMinutes(settingContext.pomodoro);
        } else {
            localStorage.setItem("settings", JSON.stringify(defaultSettings));
        }
    }, []);

    useEffect(() => {
        switch (currentPomodoroState) {
            case "active": {
                setMinutes(settingContext.pomodoro);
                setSeconds(0);
                break;
            }
            case "short": {
                setMinutes(settingContext.short);
                setSeconds(0);
                break;
            }
            case "long": {
                setMinutes(settingContext.long);
                setSeconds(0);
                break;
            }
            default: {
                setMinutes(settingContext.pomodoro);
                setSeconds(0);
            }
        }
    }, [
        currentPomodoroState,
        settingContext.pomodoro,
        settingContext.short,
        settingContext.long,
    ]);

    const updateTime = (): void => {
        if (!start) return;

        if (minutes === 0 && seconds === 0) {
            if (currentPomodoroState === "active" && pomodoroRound < 4) {
                // each pomodoro round
                setCurrentPomodoroState("short");
                setMinutes(settingContext.short);

                setPomodoroRound(oldPmd => oldPmd + 1);
            } else if (currentPomodoroState === "short" && pomodoroRound <= 4) {
                // after short break and go back to pmodoro round
                setCurrentPomodoroState("active");
                setMinutes(settingContext.pomodoro);
            } else if (
                currentPomodoroState === "active" &&
                pomodoroRound === 4
            ) {
                // after the last round then go to long break
                setCurrentPomodoroState("long");
                setPomodoroRound(1);
                setMinutes(settingContext.long);
            } else {
                // after long break go back to init state
                setCurrentPomodoroState("active");
                setMinutes(settingContext.pomodoro);
            }
            setSeconds(0);
        } else {
            if (seconds === 0) {
                setMinutes(oldMnt => oldMnt - 1);
                setSeconds(59);
            } else {
                setSeconds(oldSec => oldSec - 1);
            }
        }
    };

    let intv = 0;

    const startPomodoro = () => {
        setStart(true);
    };

    const pausePomodoro = () => {
        clearInterval(intv);
        setStart(false);
    };

    useEffect(() => {
        intv = window.setInterval(updateTime, 1000);

        return () => {
            clearInterval(intv);
        };
    });

    useEffect(() => {
        const body = document.querySelector("body") as HTMLBodyElement;
        if (body) {
            body.className = "";
            body.classList.add(settingContext.theme);
            body.classList.add(settingContext.font);
        }
    }, [settingContext.theme, settingContext.font]);
    return (
        <div className={`${style.app} `}>
            <h1 className={style["app--title"]}>Pomodoro</h1>

            <PomodoroActiveState currentState={currentPomodoroState} />

            <PomodoroClock
                start={start}
                minutes={minutes}
                seconds={seconds}
                currentState={currentPomodoroState}
                onStartPomodoro={startPomodoro}
                onPausePomodoro={pausePomodoro}
            />
            <PomodoroSettings />
        </div>
    );
}

export default App;
