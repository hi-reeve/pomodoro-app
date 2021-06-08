import { AppTheme, FontFace, ISettings } from "@/types/Settings";
import React, { createContext, useEffect, useReducer } from "react";
import { AppContextReducer, AppReducer } from "./AppReducer";

export interface AppContext extends ISettings {
    SET_FONT: (font: FontFace) => void;
    SET_THEME: (theme: AppTheme) => void;
    SET_POMODORO: (minutes: number) => void;
    SET_SHORT_BREAK: (minutes: number) => void;
    SET_LONG_BREAK: (minutes: number) => void;
    SET_STATE: (state: ISettings) => void;
}

export const defaultSettings: ISettings = {
    font: "kumbh",
    theme: "orange",
    pomodoro: 25,
    short: 5,
    long: 10,
};
const initState: AppContext = {
    ...defaultSettings,
    SET_FONT: (font: FontFace) => {},
    SET_THEME: (theme: AppTheme) => {},
    SET_POMODORO: (minutes: number) => {},
    SET_SHORT_BREAK: (minutes: number) => {},
    SET_LONG_BREAK: (minutes: number) => {},
    SET_STATE: (state: ISettings) => {},
};

export const AppContext = createContext<AppContext>(initState);

const AppContextProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, defaultSettings);

    const SET_FONT = (font: FontFace) => {
        dispatch({
            type: AppContextReducer.SET_FONT,
            payload: font,
        });
    };

    const SET_THEME = (theme: AppTheme) => {
        dispatch({
            type: AppContextReducer.SET_THEME,
            payload: theme,
        });
    };
    const SET_POMODORO = (minutes: number) => {
        dispatch({
            type: AppContextReducer.SET_POMODORO,
            payload: minutes,
        });
    };
    const SET_SHORT_BREAK = (minutes: number) => {
        dispatch({
            type: AppContextReducer.SET_SHORT_BREAK,
            payload: minutes,
        });
    };
    const SET_LONG_BREAK = (minutes: number) => {
        dispatch({
            type: AppContextReducer.SET_LONG_BREAK,
            payload: minutes,
        });
    };
    const SET_STATE = (state: ISettings) => {
        dispatch({
            type: AppContextReducer.SET_STATE,
            payload: state,
        });
    };
    return (
        <AppContext.Provider
            value={{
                ...state,
                SET_FONT,
                SET_THEME,
                SET_POMODORO,
                SET_SHORT_BREAK,
                SET_LONG_BREAK,
                SET_STATE,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
export default AppContextProvider;
