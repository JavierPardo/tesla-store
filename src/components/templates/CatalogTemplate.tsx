// --- Plantillas (src/components/templates - Diseños de página sin datos específicos) ---

import { Product, Service, Testimonial } from "@/types";
import { HeroSection } from "../organisms/HeroSection";
import { ProductGrid } from "../organisms/ProductGrid";
import { AboutUsSection } from "../organisms/AboutUsSection";
import { ServiceList } from "../organisms/ServiceList";
import { TestimonialsSection } from "../organisms/TestimonialsSection";
import { ContactCTA } from "../organisms/ContactCTA";
import { ContactSection } from "../organisms/ContactSection";
import { Header } from "../organisms/Header";
import { Footer } from "../organisms/Footer";

// Componente CatalogTemplate: Define la estructura general de la página de catálogo/inicio
interface CatalogTemplateProps {
  activeSection: 'impresoras' | 'insumos' | 'servicio-tecnico' | 'nosotros' | 'testimonios' | 'contacto';
  products: Product[];
  services: Service[];
  testimonials: Testimonial[]; // Agregamos testimonios
  setActiveSection: (section: 'impresoras' | 'insumos' | 'servicio-tecnico' | 'nosotros' | 'testimonios' | 'contacto') => void;
  onViewProductDetails: (product: Product) => void;
  onGoHome: () => void;
}

export const CatalogTemplate: React.FC<CatalogTemplateProps> = ({ activeSection, products, services, testimonials, setActiveSection, onViewProductDetails, onGoHome }) => {
  return (
    <>
      <Header activeSection={activeSection} setActiveSection={setActiveSection} onGoHome={onGoHome} />
      <HeroSection
        title="Descubre el Futuro de la Fabricación"
        subtitle="Ofrecemos la más amplia selección de impresoras 3D, insumos de alta calidad y un servicio técnico experto para todas tus necesidades."
        ctaText="Explorar Impresoras"
        ctaOnClick={() => setActiveSection('impresoras')}
        imageUrl="https://placehold.co/1920x500/1D4ED8/FDFDFD?text=Innovacion+en+Impresion+3D"
      />
      <main className="container mx-auto py-12 px-4">
        {activeSection === 'impresoras' && (
          <section className="p-8 rounded-2xl shadow-2xl bg-white animate-fade-in-up">
            <h2 className="text-5xl font-extrabold text-blue-800 mb-10 text-center animate-fade-in">
              Impresoras 3D de Última Generación
            </h2>
            <ProductGrid products={products.filter(p => p.category === 'impresora')} onViewDetails={onViewProductDetails} />
          </section>
        )}

        {activeSection === 'insumos' && (
          <section className="p-8 rounded-2xl shadow-2xl bg-white animate-fade-in-up">
            <h2 className="text-5xl font-extrabold text-blue-800 mb-10 text-center animate-fade-in">
              Insumos y Accesorios Esenciales
            </h2>
            <ProductGrid products={products.filter(p => p.category === 'insumo')} onViewDetails={onViewProductDetails} />
          </section>
        )}

        {activeSection === 'servicio-tecnico' && (
          <section className="p-8 rounded-2xl shadow-2xl bg-white animate-fade-in-up">
            <h2 className="text-5xl font-extrabold text-blue-800 mb-10 text-center animate-fade-in">
              Servicio Técnico Especializado de Confianza
            </h2>
            <ServiceList services={services} />
            <ContactCTA
              title="¿Necesitas Asistencia Personalizada?"
              description="Nuestro equipo de expertos está a tu disposición para resolver cualquier duda o brindarte soporte técnico. Contáctanos hoy mismo."
              ctaText="Contactar a un Experto"
              ctaOnClick={() => setActiveSection('contacto')}
            />
          </section>
        )}

        {activeSection === 'nosotros' && (
          <AboutUsSection
            companyName="PrintForge 3D"
            tagline="Líderes en Tecnología de Impresión 3D en Latinoamérica"
            paragraphs={[
              "En PrintForge 3D, somos apasionados por la innovación y la tecnología. Desde nuestra fundación en 2018, nos hemos dedicado a democratizar el acceso a la impresión 3D, ofreciendo equipos de vanguardia, insumos de la más alta calidad y un soporte técnico incomparable.",
              "Nuestro compromiso es empoderar a creadores, ingenieros y entusiastas, proporcionándoles las herramientas y el conocimiento necesarios para convertir sus ideas en realidad. Creemos firmemente que la impresión 3D es una tecnología transformadora con el poder de cambiar industrias y vidas."
            ]}
            imageUrl="https://placehold.co/800x600/3A6EA5/FFFFFF?text=Equipo+PrintForge+3D"
          />
        )}

        {activeSection === 'testimonios' && (
          <TestimonialsSection testimonials={testimonials} />
        )}

        {activeSection === 'contacto' && (
          <ContactSection />
        )}
      </main>
      <Footer />
    </>
  );
};