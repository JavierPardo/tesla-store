// components/common/Navbar.tsx
import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <label className="text-2xl font-bold text-blue-600">Impresoras 3D Store</label>
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/impresoras">
              <label className="text-gray-700 hover:text-blue-600 font-medium">Impresoras</label>
            </Link>
          </li>
          <li>
            <Link href="/insumos">
              <label className="text-gray-700 hover:text-blue-600 font-medium">Insumos</label>
            </Link>
          </li>
          <li>
            <Link href="/servicio-tecnico">
              <label className="text-gray-700 hover:text-blue-600 font-medium">Servicio Técnico</label>
            </Link>
          </li>
          {/* Opcional: Icono de carrito, búsqueda, etc. */}
          <li>
            <button className="text-gray-700 hover:text-blue-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.182 1.701.701 1.701H18c.7 0 1.3-.4 1.6-.9l4-8H5.4" />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;