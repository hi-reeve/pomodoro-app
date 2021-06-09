import React, { useState } from "react";
import { AiTwotoneSetting } from "react-icons/ai";
import style from "@/components/PomodoroSettings.module.scss";
import DialogSettings from "./DialogSettings";
const PomodoroSettings = () => {
    const [dialogVisible, setDialogVisible] = useState<boolean>(false);

    const closeModal = () => {
        setDialogVisible(false);
    };
    return (
        <React.Fragment>
            <div
                className={style.settings}
                onClick={() => setDialogVisible(true)}
            >
                <AiTwotoneSetting className={style.settings__icon} />
            </div>
            <DialogSettings show={dialogVisible} closeModal={closeModal} />
        </React.Fragment>
    );
};

export default PomodoroSettings;
