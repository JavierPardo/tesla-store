import { ContactInfo } from "../molecules/ContactInfo";
import { FooterLinkList } from "../molecules/FooterLinkList";
import { SocialLinks } from "../molecules/SocialLinks";

interface FooterProps {} // No recibe props específicas por ahora

export const Footer: React.FC = () => (
  <footer className="bg-gray-800 text-gray-300 py-8 px-6 md:px-8 lg:px-12">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h4 className="font-bold text-white mb-4">3DPrintShop</h4>
        <p className="text-sm">Tu socio confiable para todo lo relacionado con la impresión 3D. Calidad y servicio a tu alcance.</p>
      </div>
      <div>
        <h4 className="font-bold text-white mb-4">Enlaces Rápidos</h4>
        <FooterLinkList />
      </div>
      <div>
        <h4 className="font-bold text-white mb-4">Contacto</h4>
        <ContactInfo />
      </div>
      <div>
        <h4 className="font-bold text-white mb-4">Síguenos</h4>
        <SocialLinks />
      </div>
    </div>
    <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
      &copy; 2025 3DPrintShop. Todos los derechos reservados.
    </div>
  </footer>
);
