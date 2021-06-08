import React from "react";
import { createPortal } from "react-dom";
import style from "@/components/DialogSettings.module.scss";
import { IoClose } from "react-icons/io5";
import { Transition } from "@headlessui/react";
type Props = {
    show: boolean;
    closeModal: () => void;
};
const DialogSettings: React.FC<Props> = ({ show, closeModal }) => {
    const body = document.querySelector("body") as HTMLBodyElement;
    return (
        <React.Fragment>
            <Transition show={show}>
                {createPortal(
                    <Transition.Child
                        as={React.Fragment}
                        enter="transition-all duration-300 ease-in-out"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-all duration-300 ease-in-out"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className={style.dialog__overlay}></div>
                    </Transition.Child>,
                    body
                )}
                {createPortal(
                    <Transition.Child
                        as={React.Fragment}
                        enter="transition-all duration-300 ease-in-out transform"
                        enterFrom="translate-y-10"
                        enterTo="translate-y-0"
                        leave="transition-all duration-300 ease-in-out transform"
                        leaveFrom="translate-y-0"
                        leaveTo="translate-y-10"
                    >
                        <div className={style.dialog}>
                            <div className={style.dialog__header}>
                                <h1 className={style.dialog__title}>
                                    Settings
                                </h1>
                                <button
                                    className={style.dialog__close}
                                    onClick={closeModal}
                                >
                                    <IoClose
                                        className={style["dialog__close-icon"]}
                                    />
                                </button>
                            </div>
                        </div>
                    </Transition.Child>,
                    body
                )}
            </Transition>
        </React.Fragment>
    );
};

export default DialogSettings;
