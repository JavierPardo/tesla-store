
// components/ui/Input.tsx
import React, { InputHTMLAttributes } from 'react';

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <input
      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      {...props}
    />
  );
};

export default Input;