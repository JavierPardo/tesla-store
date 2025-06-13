
// components/common/Button.tsx
import React, { ButtonHTMLAttributes } from 'react';

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className, ...props }) => {
  return (
    <button
      className={`font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;