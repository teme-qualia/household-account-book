import React, { useState } from 'react';
import { Input, FormControl } from 'native-base';

type AmountInputProps = {
  label: string;
  value: number;
  onChange: (value: number) => void;
};

const AmountInput = ({ label, value, onChange }: AmountInputProps) => {
  const [text, setText] = useState(value.toString());

  const handleTextChange = (text: string) => {
    const parsedValue = parseInt(text, 10);
    if (!isNaN(parsedValue)) {
      setText(text);
      onChange(parsedValue);
    }
  };

  return (
    <FormControl>
      <FormControl.Label>{label}</FormControl.Label>
      <Input
        value={text}
        onChangeText={handleTextChange}
      />
    </FormControl>
  );
};

export default AmountInput;
