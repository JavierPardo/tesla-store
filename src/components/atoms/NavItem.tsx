import { Button } from "./Button";

// Componente NavItem: Un elemento de navegación (botón) con icono y estado activo
interface NavItemProps {
  label: string; // Etiqueta del elemento de navegación
  icon: React.ElementType; // Icono para el elemento
  isActive: boolean; // Indica si el elemento está activo
  onClick: () => void; // Función a ejecutar al hacer clic
}

export const NavItem: React.FC<NavItemProps> = ({ label, icon: IconComponent, isActive, onClick }) => {
  return (
    <Button
      variant="nav"
      onClick={onClick}
      // Cambia de estilo según si está activo o no
      className={`${isActive ? 'bg-white text-blue-800 shadow-xl' : 'text-white hover:bg-blue-600 hover:text-white'}`}
      icon={IconComponent}
    >
      {label}
    </Button>
  );
};
