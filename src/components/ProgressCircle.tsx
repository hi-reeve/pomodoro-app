import React, { useEffect, useState } from "react";
import style from "@/components/ProgressCircle.module.scss";
type Props = {
    radius: number;
    strokeWidth: number;
    progress: number;
};
const ProgressCircle: React.FC<Props> = ({ progress, radius, strokeWidth }) => {
    const [normalizedRadius, setNormalizedRadius] = useState(0);
    const [circumference, setCircumference] = useState(0);
    const [strokeDashOffset, setStrokeDashOffset] = useState(0);
    useEffect(() => {
        setNormalizedRadius(radius - strokeWidth * 2);
        setCircumference(normalizedRadius * 2 * Math.PI);

        return () => {
            setCircumference(0);
            setNormalizedRadius(0);
        };
    }, [normalizedRadius, radius, strokeWidth]);
    useEffect(() => {
        setStrokeDashOffset(circumference - (progress / 100) * circumference);
        return () => {
            setStrokeDashOffset(0);
        };
    }, [progress, circumference]);
    return (
        <svg
            width={radius * 2}
            height={radius * 2}
            className={style["circle-container"]}
        >
            <circle
                className={style["circle-progress"]}
                stroke="white"
                fill="transparent"
                strokeWidth={strokeWidth}
                strokeDasharray={circumference + " " + circumference}
                style={{ strokeDashoffset: strokeDashOffset }}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
            />
        </svg>
    );
};

export default ProgressCircle;
