"use client"; // Marca como Client Component si NavLink usa useState

import React from 'react';
import { Club, Search, ShoppingCart, User } from 'lucide-react';
import NavLink from '../molecules/NavLink'; // Importamos el componente NavLink

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Logo */}
        <a href="#" className="text-3xl font-bold text-indigo-700 flex items-center mb-4 md:mb-0">
          <Club className="h-8 w-8 mr-2" /> <span>Tienda 3D</span>
        </a>

        {/* Search Bar */}
        <div className="relative flex-grow mx-0 md:mx-8 w-full md:w-auto mb-4 md:mb-0">
          <input
            type="text"
            placeholder="Buscar impresoras, insumos, servicios..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>

        {/* Navigation and User Icons */}
        <nav className="flex items-center space-x-6">
          <NavLink
            label="Impresoras 3D"
            href="#"
            dropdownItems={[
              { label: 'Por Tecnología', href: '#' },
              { label: 'Por Marca', href: '#' },
              { label: 'Para Hogar', href: '#' },
            ]}
          />
          <NavLink
            label="Insumos"
            href="#"
            dropdownItems={[
              { label: 'Filamentos', href: '#' },
              { label: 'Resinas', href: '#' },
              { label: 'Accesorios', href: '#' },
            ]}
          />
          <NavLink label="Servicio Técnico" href="#" />
          <NavLink label="Ofertas" href="#" />
          <NavLink label="Contacto" href="#" />

          {/* User Icons */}
          <div className="flex items-center space-x-4 ml-4">
            <a href="#" className="text-slate-700 hover:text-indigo-600 relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">3</span>
            </a>
            <a href="#" className="text-slate-700 hover:text-indigo-600">
              <User className="h-6 w-6" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

