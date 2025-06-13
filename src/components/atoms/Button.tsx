// Componente Button: Un botón reutilizable con variantes de estilo y soporte para iconos
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'nav' | 'ghost'; // Variantes de estilo predefinidas
  className?: string; // Clases CSS adicionales de Tailwind
  icon?: React.ElementType; // Componente de icono opcional
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', icon: IconComponent, ...props }) => {
  // Define los estilos base y los aplica según la variante
  let baseStyles = 'px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center';
  if (variant === 'primary') {
    baseStyles += ' bg-blue-600 text-white hover:bg-blue-700';
  } else if (variant === 'secondary') {
    baseStyles += ' bg-green-500 text-white hover:bg-green-600';
  } else if (variant === 'accent') {
    baseStyles += ' bg-indigo-600 text-white hover:bg-indigo-700';
  } else if (variant === 'nav') {
    // Estilos específicos para botones de navegación que se activan/desactivan
    baseStyles = 'px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105';
  } else if (variant === 'ghost') {
    baseStyles = 'bg-transparent text-blue-600 hover:bg-blue-50 hover:text-blue-700 shadow-none'; // Botón sin fondo
  }

  return (
    <button className={`${baseStyles} ${className}`} {...props}>
      {/* Renderiza el icono si se proporciona */}
      {IconComponent && <IconComponent className="inline-block mr-2" size={20} />}
      {children}
    </button>
  );
};