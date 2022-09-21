import React from 'react';
import './Input.css';

interface InputProps {
  placeholder: string;
  type: string;
  required: boolean;
}

const Input: React.FC<InputProps> = ({ placeholder, type, required }) => {
  return (
    <>
      <input
        required={required}
        className="input"
        placeholder={placeholder}
        type={type}
      />
    </>
  );
};

export default Input;
