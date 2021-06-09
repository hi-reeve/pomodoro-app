import { ISettings } from "@/types/Settings";
import React from "react";

export enum AppContextReducer {
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
            const newState = action.payload as ISettings;
            localStorage.setItem("settings", JSON.stringify(newState));
            return newState;
        }
        default: {
            return state;
        }
    }
};
