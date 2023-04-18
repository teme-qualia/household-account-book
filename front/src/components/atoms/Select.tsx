import React from 'react';
import { Select as NBSelect, CheckIcon } from 'native-base';

type Item = {
  label: string;
  value: string;
};

type SelectProps = {
  items: Item[];
  selectedValue: string | undefined;
  placeholder: string;
};

const Select: React.FC<SelectProps> = ({
  items,
  selectedValue=undefined,
  placeholder,
}) => {
  return (
    <NBSelect
      placeholder={placeholder}
      _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size={5} />
      }} mt="1"
    >
      {items.map(({ label, value }) => (
        <NBSelect.Item key={value} label={label} value={value} />
      ))}
    </NBSelect>
  );
};

export {Select, Item};