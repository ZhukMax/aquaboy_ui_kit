import React from "react";
import { Tab } from 'react-tabs';
import type { ReactTabsFunctionComponent, TabProps } from 'react-tabs';

const AquaboyTab: ReactTabsFunctionComponent<TabProps> = ({ children, ...props }) => (
  <Tab {...props}>
    {children}
  </Tab>
);

AquaboyTab.tabsRole = 'Tab';

export default AquaboyTab;
