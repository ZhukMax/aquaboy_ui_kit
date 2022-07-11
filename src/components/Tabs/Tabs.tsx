import React from 'react';
import { Tabs } from 'react-tabs';

const AquaboyTabs: ({children, ...props}: { children: any; [p: string]: any }) => JSX.Element = ({
  children,
  ...props
}) => (
  <Tabs className={'react-tabs nav-tabs'} {...props}>
    {children}
  </Tabs>
);

export default AquaboyTabs;
