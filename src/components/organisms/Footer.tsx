import React from 'react';
import { Club } from 'lucide-react';
import FooterColumn from '../molecules/FooterColumn'; // Importamos el componente FooterColumn

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-12 rounded-tl-3xl rounded-tr-3xl mx-auto container my-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* Columna 1: Logo y Descripción */}
        <FooterColumn title="Tienda 3D">
          <h3 className="text-2xl font-bold mb-4 text-indigo-400 flex items-center">
            <Club className="h-6 w-6 mr-2" /> Tienda 3D
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Tu destino definitivo para impresoras 3D, insumos y el mejor servicio técnico. Hacemos que tus ideas cobren vida.
          </p>
        </FooterColumn>

        {/* Columna 2: Navegación Rápida */}
        <FooterColumn
          title="Navegación Rápida"
          links={[
            { label: 'Impresoras 3D', href: '#' },
            { label: 'Insumos', href: '#' },
            { label: 'Servicio Técnico', href: '#' },
            { label: 'Ofertas', href: '#' },
            { label: 'Contacto', href: '#' },
          ]}
        />

        {/* Columna 3: Información Útil */}
        <FooterColumn
          title="Información Útil"
          links={[
            { label: 'Sobre Nosotros', href: '#' },
            { label: 'Preguntas Frecuentes', href: '#' },
            { label: 'Política de Privacidad', href: '#' },
            { label: 'Términos y Condiciones', href: '#' },
            { label: 'Mi Cuenta', href: '#' },
          ]}
        />

        {/* Columna 4: Contacto y Redes Sociales */}
        <FooterColumn title="Contáctanos">
          <p className="text-slate-400 mb-2"><i className="fas fa-map-marker-alt mr-2"></i> Calle Falsa 123, Ciudad, País</p>
          <p className="text-slate-400 mb-2"><i className="fas fa-phone mr-2"></i> +123 456 7890</p>
          <p className="text-slate-400 mb-4"><i className="fas fa-envelope mr-2"></i> info@tienda3d.com</p>

          <h4 className="text-xl font-semibold mb-4 text-white">Síguenos</h4>
          <div className="flex space-x-4">
            {/* Aquí puedes usar íconos de redes sociales de Lucide React si lo prefieres, o mantener Font Awesome */}
            <a href="#" className="text-slate-400 hover:text-indigo-400 text-2xl transition duration-200 ease-in-out"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-slate-400 hover:text-indigo-400 text-2xl transition duration-200 ease-in-out"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-slate-400 hover:text-indigo-400 text-2xl transition duration-200 ease-in-out"><i className="fab fa-youtube"></i></a>
            <a href="#" className="text-slate-400 hover:text-indigo-400 text-2xl transition duration-200 ease-in-out"><i className="fab fa-twitter"></i></a>
          </div>
        </FooterColumn>
      </div>

      <div className="container mx-auto text-center text-slate-500 text-sm mt-10 border-t border-slate-700 pt-8">
        <p>&copy; 2025 Tienda 3D. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

