import React, { FC } from 'react';
import classNames from "classnames";
import './Button.css';

export interface ButtonProps {
    children?: React.ReactNode;
    color: string;
    size?: string;
}

const Button: FC<ButtonProps> = ({
                                     children,
                                     color,
                                     size,
                                     ...props
}) => {
    return (
        <button {...props} className={classNames("aquaboy-button", size)}>
            {children}
        </button>
    );
};

export default Button;