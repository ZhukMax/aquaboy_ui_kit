import React, {FC} from 'react';
import classNames from "classnames";
import './Input.css';

export interface InputProps {
    placeholder: string;
    label: string;
    size: string;
}

const Input: FC<InputProps> = ({placeholder, label, size, ...props}) => {
    return (
        <label>
            {label}
            <input placeholder={placeholder} {...props} className={classNames("aquaboy-input", size)} />
        </label>
    );
};

export default Input;