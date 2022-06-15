import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Button} from '../index';
import {Mode, Size} from "../interfaces";

import './aquaboy.stories.scss';

export default {
  title: 'Aquaboy/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Example: ComponentStory<typeof Button> = () => (
  <Button
    label={'Button text'}
    mode={Mode.default}
    size={Size.default}
    onClick={(e) => {
      console.log(e);
      alert('Hello, you click on a button');
    }}
  />
);

export const Colors: ComponentStory<typeof Button> = () => (
  <>
    <Button
      label={'Default button'}
    />

    <Button
      label={'Primary button'}
      mode={Mode.primary}
    />

    <Button
      label={'Success button'}
      mode={Mode.success}
    />

    <Button
      label={'Info button'}
      mode={Mode.info}
    />

    <Button
      label={'Warning button'}
      mode={Mode.warning}
    />

    <Button
      label={'Danger button'}
      mode={Mode.danger}
    />
  </>
);

export const Sizes: ComponentStory<typeof Button> = () => (
  <>
    <Button
      label={'Large button'}
      mode={Mode.primary}
      size={Size.large}
    />
    <Button
      label={'Large button'}
      size={Size.large}
    />

    <br/>

    <Button
      label={'Default button'}
      mode={Mode.primary}
    />
    <Button
      label={'Default button'}
    />

    <br/>

    <Button
      label={'Small button'}
      mode={Mode.primary}
      size={Size.small}
    />
    <Button
      label={'Small button'}
      size={Size.small}
    />

    <br/>

    <Button
      label={'Mini button'}
      mode={Mode.primary}
      size={Size.mini}
    />
    <Button
      label={'Mini button'}
      size={Size.mini}
    />
  </>
);

export const Outline: ComponentStory<typeof Button> = () => (
  <>
      <Button
        label={'Default button'}
      />

      <Button
        label={'Primary button'}
        mode={Mode.primary}
        outline={true}
      />

      <Button
        label={'Success button'}
        mode={Mode.success}
        outline={true}
      />

      <Button
        label={'Info button'}
        mode={Mode.info}
        outline={true}
      />

      <Button
        label={'Warning button'}
        mode={Mode.warning}
        outline={true}
      />

      <Button
        label={'Danger button'}
        mode={Mode.danger}
        outline={true}
      />
  </>
);
