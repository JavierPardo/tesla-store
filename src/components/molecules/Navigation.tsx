import { NavLink } from "../atoms/NavLink";

export const Navigation: React.FC = () => (
  <nav className="hidden md:flex space-x-8">
    <NavLink href="./impresoras" isAnchor={true}>Impresoras 3D</NavLink>
    <NavLink href="./insumos" isAnchor={true}>Insumos</NavLink>
    <NavLink href="./service-detail">Servicio Técnico</NavLink>
    <NavLink href="#">Nosotros</NavLink>
    <NavLink href="#">Contacto</NavLink>
  </nav>
);