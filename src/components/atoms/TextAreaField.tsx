interface TextAreaFieldProps {
  label: string;
  id: string;
  placeholder: string;
  rows?: number;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
}

export const TextAreaField: React.FC<TextAreaFieldProps> = ({ label, id, placeholder, onChange, value, required = false, rows = 4 }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <textarea
      id={id}
      name={id}
      rows={rows}
      placeholder={placeholder}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      value={value}
      onChange={onChange}
      required={required}
    ></textarea>
  </div>
);