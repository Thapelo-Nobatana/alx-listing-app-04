import { ButtonProps } from "@/interfaces";
import React from "react";

const Button: React.FC<ButtonProps> = ({label, disabled, variant, style }) => {
    return (
        <button className={style} disabled={disabled}>
            {label}
        </button>
    )

}

export default Button;