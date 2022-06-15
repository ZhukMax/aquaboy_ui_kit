import React from 'react';
import Select from 'react-select';

export const AquaSelect = ({}) => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  return (
    <Select
      value={''}
      onChange={() => {}}
      options={options}
    />
  );
};
