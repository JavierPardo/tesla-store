interface InputFieldProps {
    label: string;
    id: string;
    type?: string;
    placeholder: string;
    value?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({ label, id, type, placeholder, value, onChange, required = false }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <input
            type={type}
            id={id}
            name={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
    </div>
);