import React, { FC } from "react";
import classNames from "classnames";
import {Mode, ModeProp, Props} from "../../interfaces";

import './Panel.scss';

export interface PanelProps extends Props, ModeProp {
  title: string;
  content: string;
  footer?: string;
}

const Panel: FC<PanelProps> = ({
                                        title,
                                        content,
                                        footer,
                                        mode = Mode.default,
                                        ...props
}) => {
  const prefix = 'aquaboy-panel';
  let footerBlock;

  if (footer !== undefined) {
    footerBlock = <footer>{footer}</footer>;
  }

  return (
    <div className={classNames(prefix, `${prefix}-${mode}`)} {...props}>
      <header>
        {title}
      </header>
      <section className={`${prefix}-body`}>
        <p>
          {content.replace(/<[^>]*>?/gm, ' ')}
        </p>
      </section>
      {footerBlock}
    </div>
  );
};

export default Panel;
