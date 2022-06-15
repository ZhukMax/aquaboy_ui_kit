import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Input} from "../index";

export default {
  title: 'Aquaboy/Form',
  component: Input,
} as ComponentMeta<typeof Input>;

export const Normal: ComponentStory<typeof Input> = () => (
  <Input label={'Normal'} />
);
