import React from "react";
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Panel} from "../index";
import {Mode} from "../interfaces";

export default {
  title: 'Aquaboy/Panel',
  component: Panel,
} as ComponentMeta<typeof Panel>;

const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.\n' +
  '          Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.';

export const Default: ComponentStory<typeof Panel> = () => (
  <Panel
    title={'Default Panel'}
    content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>' +
      '<b>Tags will be remove.</b>' +
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
    footer={'Panel Footer'}
  />
);

export const Primary: ComponentStory<typeof Panel> = () => (
  <Panel
    title={'Primary Panel'}
    content={content}
    mode={Mode.primary}
  />
);

export const Success: ComponentStory<typeof Panel> = () => (
  <Panel
    title={'Success Panel'}
    content={content}
    mode={Mode.success}
  />
);

export const Info: ComponentStory<typeof Panel> = () => (
  <Panel
    title={'Info Panel'}
    content={content}
    mode={Mode.info}
  />
);

export const Warning: ComponentStory<typeof Panel> = () => (
  <Panel
    title={'Info Panel'}
    content={content}
    mode={Mode.warning}
  />
);

export const Danger: ComponentStory<typeof Panel> = () => (
  <Panel
    title={'Info Panel'}
    content={content}
    mode={Mode.danger}
  />
);
