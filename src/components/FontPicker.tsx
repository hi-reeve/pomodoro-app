import React from "react";
import style from "@/components/FontPicker.module.scss";
import { FontFace } from "@/types/Settings";
import { useContext } from "react";
import { AppContext } from "@/store/AppContext";

type Props = {
    type: FontFace;
    setFn: React.Dispatch<React.SetStateAction<FontFace>>;
    currentType: FontFace;
};
const FontPicker: React.FC<Props> = ({ currentType, setFn, type }) => {
    return (
        <div
            onClick={() => setFn(type)}
            className={`${style["font-picker"]} 
				${type === "kumbh" ? style[`font-picker--kumbh`] : ""}
				${type === "roboto" ? style[`font-picker--roboto`] : ""}
				${type === "space" ? style[`font-picker--space`] : ""}
				${currentType === type ? style["font-picker--active"] : ""}
				`}
        >
            Aa
        </div>
    );
};

export default FontPicker;
