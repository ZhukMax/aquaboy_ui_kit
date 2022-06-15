import { CSSProperties } from "react";

export interface Props {
  style?: CSSProperties | undefined;
}

export enum Mode {
  default = 'default',
  primary = 'primary',
  success = 'success',
  info = 'info',
  warning = 'warning',
  danger = 'danger'
}

export interface ModeProp {
  mode?: Mode;
}

export enum Size {
  mini = 'mini',
  small = 'small',
  default = 'default',
  large = 'large'
}

export interface SizeProp {
  size?: Size;
}
