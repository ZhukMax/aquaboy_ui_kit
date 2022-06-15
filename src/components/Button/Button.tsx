import React, { FC } from 'react';
import classNames from 'classnames';
import { Mode, ModeProp, Props, Size, SizeProp } from "../../interfaces";

import './Button.scss';

export interface ButtonProps extends Props, ModeProp, SizeProp {
  label: string;
  outline?: boolean;
  onClick?: (e: object) => void;
}

const Button: FC<ButtonProps> = ({
                                   label,
                                   mode= Mode.default,
                                   size= Size.default,
                                   outline = false,
                                   ...props
}) => {
  const prefix = 'aquaboy-btn';
  const modeStyle = outline ? `${prefix}-${mode}-outline` : `${prefix}-${mode}`;

  return (
    <button
      type="button"
      className={classNames(prefix, modeStyle, `${prefix}-${size}-size`)}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
