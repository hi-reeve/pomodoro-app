export type FontFace = "kumbh" | "roboto" | "space";
export type AppTheme = "orange" | "cyan" | "purple";
export interface ISettings {
    pomodoro: number;
    short: number;
    long: number;
    theme: AppTheme;
    font: FontFace;
}
export type PomodoroState = "active" | "short" | "long";
