interface FooterProps {} // No recibe props específicas por ahora

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-gray-900 text-white p-8 mt-12 rounded-t-3xl shadow-inner">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h4 className="text-xl font-bold mb-4 text-blue-300">PrintForge 3D</h4>
          <p className="text-gray-400 text-sm">
            Tu destino #1 para todo lo relacionado con la impresión 3D en Latinoamérica. Innovación, calidad y soporte.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4 text-blue-300">Enlaces Rápidos</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white transition-colors duration-200">Sobre Nosotros</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Preguntas Frecuentes</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Política de Privacidad</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Términos de Servicio</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4 text-blue-300">Contáctanos</h4>
          <p className="text-gray-400 text-sm">
            Email: info@printforge3d.com<br />
            Teléfono: +591 7XXXXXXX<br />
            Dirección: Calle Falsa 123, Cochabamba, Bolivia
          </p>
        </div>
      </div>
      <div className="border-t border-gray-700 pt-6 mt-8 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} PrintForge 3D. Todos los derechos reservados.
      </div>
    </footer>
  );
};
