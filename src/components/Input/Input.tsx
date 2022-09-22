import React from 'react';
import './Input.css';

interface InputProps {
  placeholder: string;
  type: string;
  required: boolean;
  onChange: Function;
  name: string;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  type,
  required,
  onChange,
  name,
}) => {
  return (
    <>
      <input
        required={required}
        className="input"
        placeholder={placeholder}
        type={type}
        onChange={(event) => onChange(event)}
        name={name}
      />
    </>
  );
};

export default Input;
