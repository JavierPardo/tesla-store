import { IconButton } from "../atoms/IconButton";
import { SearchInput } from "../atoms/SearchInput";

export const UserControls: React.FC = () => (
  <div className="flex items-center space-x-4">
    <SearchInput />
    <IconButton iconClass="fas fa-user-circle" label="Mi Cuenta" />
    <IconButton iconClass="fas fa-shopping-cart" label="Carrito de Compras" count={3} />
    {/* Mobile Menu Button - Atom */}
    <button className="md:hidden text-gray-700 hover:text-blue-600 text-2xl">
      <i className="fas fa-bars"></i>
    </button>
  </div>
);