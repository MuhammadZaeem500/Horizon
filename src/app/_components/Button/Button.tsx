import React from 'react';

interface ButtonProps {
  text: React.ReactNode;
  onClick?: () => void;
  className?: string;
  backgroundColor?: string; 
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className = '', backgroundColor = '#B69F71' }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor }} 
      className={`w-[100px] h-[35px] text-[#0E2A3F] text-[14px] font-semibold leading-[17.07px] tracking-[0.02em] text-center disabled:bg-gray-400 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
