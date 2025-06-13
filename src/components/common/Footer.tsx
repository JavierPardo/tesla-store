// components/common/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-semibold mb-2">Impresoras 3D Store</h3>
          <p className="text-gray-400">Tu socio en impresión 3D.</p>
          <p className="text-gray-400">© {new Date().getFullYear()} Todos los derechos reservados.</p>
        </div>
        <div className="mb-4 md:mb-0">
          <h4 className="text-lg font-semibold mb-2">Contacto</h4>
          <p className="text-gray-400">Email: info@impresoras3d.com</p>
          <p className="text-gray-400">Teléfono: +123 456 7890</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Síguenos</h4>
          <div className="flex justify-center md:justify-start space-x-4">
            {/* Íconos de redes sociales */}
            <a href="#" className="text-gray-400 hover:text-blue-400">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-blue-400">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-blue-400">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;