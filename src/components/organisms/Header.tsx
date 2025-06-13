import { Factory, Info, MessageSquare, Package, Printer, Quote, Wrench } from "lucide-react";
import { NavItem } from "../atoms/NavItem";

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: 'impresoras' | 'insumos' | 'servicio-tecnico' | 'nosotros' | 'testimonios' | 'contacto') => void;
  onGoHome: () => void; // Función para volver a la página principal
}

export const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection, onGoHome }) => {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-indigo-800 p-4 shadow-2xl">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0 cursor-pointer" onClick={onGoHome}>
          <Factory className="w-10 h-10 text-white mr-3 animate-pulse" /> {/* Icono de marca animado */}
          <h1 className="text-4xl font-extrabold text-white tracking-wide">
            PrintForge 3D
          </h1>
        </div>
        <nav className="flex flex-wrap justify-center gap-4 md:gap-8">
          <NavItem label="Impresoras" icon={Printer} isActive={activeSection === 'impresoras'} onClick={() => setActiveSection('impresoras')} />
          <NavItem label="Insumos" icon={Package} isActive={activeSection === 'insumos'} onClick={() => setActiveSection('insumos')} />
          <NavItem label="Servicio Técnico" icon={Wrench} isActive={activeSection === 'servicio-tecnico'} onClick={() => setActiveSection('servicio-tecnico')} />
          <NavItem label="Nosotros" icon={Info} isActive={activeSection === 'nosotros'} onClick={() => setActiveSection('nosotros')} />
          <NavItem label="Testimonios" icon={Quote} isActive={activeSection === 'testimonios'} onClick={() => setActiveSection('testimonios')} />
          <NavItem label="Contacto" icon={MessageSquare} isActive={activeSection === 'contacto'} onClick={() => setActiveSection('contacto')} />
        </nav>
      </div>
    </header>
  );
};
