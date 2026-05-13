import React from 'react';

interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export const Input = ({ label, value, onChange }: InputProps) => {
  return (
    <div>
      <label htmlFor='custom-input'>{label}</label>
      <input id='custom-input' value={value} onChange={(e) => onChange(e.target.value)} data-a-test='custom-input' />
    </div>
  );
};
