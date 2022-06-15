import React, {FC} from 'react';
import classNames from "classnames";
import {Props} from "../../interfaces";

import './Input.scss';

export interface InputProps extends Props {
    placeholder?: string;
    label: string;
}

const Input: FC<InputProps> = ({placeholder, label, ...props}) => {
  return (
    <div className="aquaboy-input" {...props}>
      <label className="aquaboy-input-label">{label}</label>
      <div className="col-sm-10">
        <input type="text" className="form-control" placeholder={placeholder} />
      </div>
    </div>
  );
};

export default Input;
