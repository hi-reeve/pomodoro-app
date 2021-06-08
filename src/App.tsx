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

    useEffect(() => {
        const localSettings = localStorage.getItem("settings");
        if (localSettings) {
            settingContext.SET_STATE(JSON.parse(localSettings) as ISettings);
        } else {
            localStorage.setItem("settings", JSON.stringify(defaultSettings));
        }
    }, []);
    return (
        <div className={`${style.app} ${settingContext.theme}`}>
            <h1 className={style["app--title"]}>Pomodoro</h1>

            <PomodoroActiveState currentState={currentPomodoroState} />
            <PomodoroClock minutes={25} />
            <PomodoroSettings />
        </div>
    );
}

export default App;
