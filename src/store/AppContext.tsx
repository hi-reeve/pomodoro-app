import { AppTheme, FontFace, ISettings } from "@/types/Settings";
import React, { createContext, useEffect, useReducer } from "react";
import { AppContextReducer, AppReducer } from "./AppReducer";

export interface AppContext extends ISettings {
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
    SET_STATE: (state: ISettings) => {},
};

export const AppContext = createContext<AppContext>(initState);

const AppContextProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, defaultSettings);

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
                SET_STATE,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
export default AppContextProvider;
