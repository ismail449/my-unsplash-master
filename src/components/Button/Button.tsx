import React from 'react';
import './Button.css';

interface ButtonProps {
  text: string;
  color: string;
  type: 'submit' | 'button';
  onClick: Function;
}

const Button: React.FC<ButtonProps> = ({
  text,
  color,
  onClick,
  type = 'button',
}) => {
  return (
    <>
      <button
        type={type}
        onClick={() => onClick()}
        className={`button ${color}`}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
