import React from "react";
import Styles from './input.module.css';

interface PropsInput {
    label: string;
    type: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CustomImput({ label, type, value, onChange }: PropsInput) {
    return (
        <div className={Styles.container}>
            <label className={Styles.label}>{label}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={label}
                className={Styles.input}
            />
        </div>

    )
}