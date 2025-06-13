
// components/ui/Checkbox.tsx
import React, { InputHTMLAttributes } from 'react';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, ...props }) => {
  return (
    <label className="inline-flex items-center mt-2">
      <input
        type="checkbox"
        className="form-checkbox h-5 w-5 text-blue-600 rounded"
        {...props}
      />
      <span className="ml-2 text-gray-700">{label}</span>
    </label>
  );
};

export default Checkbox;