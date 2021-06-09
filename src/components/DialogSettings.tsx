import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import style from "@/components/DialogSettings.module.scss";
import { IoClose } from "react-icons/io5";
import InputNumber from "./InputNumber";
import { useContext } from "react";
import { AppContext } from "@/store/AppContext";
import { useState } from "react";
import FontPicker from "./FontPicker";
import { AppTheme, FontFace } from "@/types/Settings";
import ColorPicker from "./ColorPicker";
type Props = {
    show: boolean;
    closeModal: () => void;
};
const DialogSettings: React.FC<Props> = ({ show, closeModal }) => {
    const body = document.querySelector("body") as HTMLBodyElement;
    const settingsCtx = useContext(AppContext);

    const [pomodoroStg, setPomodoroStg] = useState<number>(
        settingsCtx.pomodoro
    );
    const [shortStg, setShortStg] = useState<number>(settingsCtx.short);
    const [longStg, setLongStg] = useState<number>(settingsCtx.long);

    const [fontStg, setFontStg] = useState<FontFace>(settingsCtx.font);
    const [colorStg, setColorStg] = useState<AppTheme>(settingsCtx.theme);

    useEffect(() => {
        setPomodoroStg(settingsCtx.pomodoro);
    }, [settingsCtx.pomodoro]);
    useEffect(() => {
        setShortStg(settingsCtx.short);
    }, [settingsCtx.short]);
    useEffect(() => {
        setLongStg(settingsCtx.long);
    }, [settingsCtx.long]);
    useEffect(() => {
        setFontStg(settingsCtx.font);
    }, [settingsCtx.font]);
    useEffect(() => {
        setColorStg(settingsCtx.theme);
    }, [settingsCtx.theme]);

    const onSaveSettings = () => {
        settingsCtx.SET_STATE({
            font: fontStg,
            theme: colorStg,
            pomodoro: pomodoroStg,
            short: shortStg,
            long: longStg,
        });
        closeModal();
    };

    if (!show) return <></>;

    return createPortal(
        <React.Fragment>
            <div className={style.dialog__overlay}></div>

            <div className={style.dialog}>
                <div className={style.dialog__header}>
                    <h1 className={style.dialog__title}>Settings</h1>
                    <button
                        className={style.dialog__close}
                        onClick={closeModal}
                    >
                        <IoClose className={style["dialog__close-icon"]} />
                    </button>
                </div>
                <div className={style.dialog__body}>
                    <div className={style["dialog__settings-container"]}>
                        <h2 className={style["dialog__settings-title"]}>
                            Time (Minutes)
                        </h2>
                        <div className={style["dialog__time-form"]}>
                            <InputNumber
                                state={pomodoroStg}
                                label="pomodoro"
                                id="pomodoro"
                                setFn={setPomodoroStg}
                            />
                            <InputNumber
                                state={shortStg}
                                label="short-break"
                                id="short"
                                setFn={setShortStg}
                            />
                            <InputNumber
                                state={longStg}
                                label="long-break"
                                id="long"
                                setFn={setLongStg}
                            />
                        </div>
                    </div>
                    <div className={style["dialog__settings-container"]}>
                        <h2 className={style["dialog__settings-title"]}>
                            Font
                        </h2>
                        <div className={style["dialog__picker-wrapper"]}>
                            <FontPicker
                                currentType={fontStg}
                                type="kumbh"
                                setFn={setFontStg}
                            />
                            <FontPicker
                                currentType={fontStg}
                                type="roboto"
                                setFn={setFontStg}
                            />
                            <FontPicker
                                currentType={fontStg}
                                type="space"
                                setFn={setFontStg}
                            />
                        </div>
                    </div>
                    <div className={style["dialog__settings-container"]}>
                        <h2 className={style["dialog__settings-title"]}>
                            Color
                        </h2>
                        <div className={style["dialog__picker-wrapper"]}>
                            <ColorPicker
                                currentColor={colorStg}
                                setFn={setColorStg}
                                color="orange"
                            />
                            <ColorPicker
                                currentColor={colorStg}
                                setFn={setColorStg}
                                color="cyan"
                            />
                            <ColorPicker
                                currentColor={colorStg}
                                setFn={setColorStg}
                                color="purple"
                            />
                        </div>
                    </div>
                </div>
                <button
                    onClick={onSaveSettings}
                    className={style.dialog__apply}
                >
                    Apply
                </button>
            </div>
        </React.Fragment>,
        body
    );
};

export default DialogSettings;
