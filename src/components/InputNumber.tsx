import React, { useState } from "react";
import style from "@/components/InputNumber.module.scss";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

type Props = {
    label: string;
    id: string;
    state: number;
    setFn: React.Dispatch<React.SetStateAction<number>>;
};
const InputNumber: React.FC<Props> = ({ setFn, state, id, label }) => {
    const onClickArrowUp = () => setFn((oldState: number) => oldState + 1);
    const onClickArrowDown = () => {
        if (state > 0) {
            setFn((oldState: number) => oldState - 1);
        }
    };
    return (
        <div className={style.input__wrapper}>
            <label htmlFor={id} className={style.input__label}>
                {label}
            </label>
            <div className={style["input__input-group"]}>
                <input
                    type="number"
                    id={id}
                    className={style.input__input}
                    min="1"
                    value={state}
                    onInput={(e: React.FormEvent<HTMLInputElement>) =>
                        setFn(+(e.target as HTMLInputElement).value)
                    }
                />
                <div className={style["input__arrow-wrapper"]}>
                    <BiChevronUp
                        onClick={onClickArrowUp}
                        className={style["input__arrow-icon"]}
                    />
                    <BiChevronDown
                        onClick={onClickArrowDown}
                        className={style["input__arrow-icon"]}
                    />
                </div>
            </div>
        </div>
    );
};

export default InputNumber;
