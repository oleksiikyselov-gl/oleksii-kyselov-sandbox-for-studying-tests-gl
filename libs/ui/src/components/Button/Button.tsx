import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export const Button = ({ label, onClick, disabled }: ButtonProps) => {
  return (
    <button onClick={onClick} disabled={disabled} data-a-test='submit-button'>
      {label}
    </button>
  );
};
