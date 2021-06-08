import { AppTheme, FontFace, ISettings } from "@/types/Settings";
import React from "react";

export enum AppContextReducer {
    SET_FONT = "SET_FONT",
    SET_THEME = "SET_THEME",
    SET_POMODORO = "SET_POMODORO",
    SET_SHORT_BREAK = "SET_SHORT_BREAK",
    SET_LONG_BREAK = "SET_LONG_BREAK",
    SET_STATE = "SET_STATE",
}

export interface AppContextAction {
    type: AppContextReducer;
    payload: unknown;
}

export const AppReducer: React.Reducer<ISettings, AppContextAction> = (
    state: ISettings,
    action: AppContextAction
) => {
    switch (action.type) {
        case AppContextReducer.SET_STATE: {
            return {
                ...state,
                ...(action.payload as ISettings),
            };
        }
        case AppContextReducer.SET_FONT: {
            return {
                ...state,
                font: action.payload as FontFace,
            };
        }
        case AppContextReducer.SET_THEME: {
            return {
                ...state,
                theme: action.payload as AppTheme,
            };
        }
        case AppContextReducer.SET_POMODORO: {
            return {
                ...state,
                pomodoro: action.payload as number,
            };
        }
        case AppContextReducer.SET_SHORT_BREAK: {
            return {
                ...state,
                short: action.payload as number,
            };
        }
        case AppContextReducer.SET_LONG_BREAK: {
            return {
                ...state,
                long: action.payload as number,
            };
        }
        default: {
            return state;
        }
    }
};
