import React from "react";
import style from "@/components/ColorPicker.module.scss";
import { AppTheme } from "@/types/Settings";
import { BiCheck } from "react-icons/bi";
type Props = {
    color: AppTheme;
    currentColor: AppTheme;
    setFn: React.Dispatch<React.SetStateAction<AppTheme>>;
};
const ColorPicker: React.FC<Props> = ({ currentColor, color, setFn }) => {
    return (
        <div
            onClick={() => setFn(color)}
            className={`${style["color-picker"]} 
	${color === "orange" ? style["color-picker--orange"] : ""}
	${color === "cyan" ? style["color-picker--cyan"] : ""}
	${color === "purple" ? style["color-picker--purple"] : ""}
	`}
        >
            {currentColor === color && <BiCheck className="w-6 h-6" />}
        </div>
    );
};

export default ColorPicker;
