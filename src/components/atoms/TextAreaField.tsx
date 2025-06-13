// Componente TextAreaField: Área de texto reutilizable para formularios
interface TextAreaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
  placeholder?: string;
  className?: string;
  rows?: number;
}

export const TextAreaField: React.FC<TextAreaFieldProps> = ({ label, id, placeholder, className, rows = 4, ...props }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <textarea
        id={id}
        placeholder={placeholder}
        rows={rows}
        className={`shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${className}`}
        {...props}
      ></textarea>
    </div>
  );
};
