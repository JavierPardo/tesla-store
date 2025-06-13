// pages/index.tsx (or a suitable page)
import React from 'react';
import Layout from '../components/layout/Layout';
import BenefitCard from '../components/common/BenefitCard';

// Example SVG Icons (In a real app, import from @heroicons/react or your own icon library)
// For simplicity, let's define them here.
const SupportIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.867 0-1.396-.154-1.474-.223a4.298 4.298 0 010-6.174c.078-.069.607-.223 1.474-.223H17.5c.867 0 1.396.154 1.474.223a4.298 4.298 0 010 6.174c-.078.069-.607.223-1.474.223H3.697z" />
  </svg>
);

const PrinterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const SpoolIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h1.5M8.25 10.5h1.5M19.5 10.5h1.5m-3.75 6.75h3.75M3 13.5l5.25 5.25c.414.414 1.086.414 1.5 0L19.5 7.5m-9-6a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);


const HomePage: React.FC = () => {
  const benefits = [
    {
      icon: SupportIcon,
      title: 'Soporte Técnico Especializado',
      description: 'Nuestro equipo de expertos te brinda asistencia rápida y efectiva para cualquier problema con tu impresora 3D.',
      linkHref: '/servicio-tecnico',
      linkText: 'Ver Servicio Técnico',
    },
    {
      icon: PrinterIcon,
      title: 'Amplio Catálogo de Impresoras',
      description: 'Encuentra la impresora 3D perfecta para tus necesidades, desde modelos para principiantes hasta profesionales.',
      linkHref: '/impresoras',
      linkText: 'Explorar Impresoras',
    },
    {
      icon: SpoolIcon,
      title: 'Insumos de Calidad Premium',
      description: 'Filamentos, resinas y accesorios de las mejores marcas para garantizar resultados excepcionales en tus proyectos.',
      linkHref: '/insumos',
      linkText: 'Comprar Insumos',
    },
    {
        icon: SupportIcon, // Reusing icon for demonstration
        title: 'Garantía y Confianza',
        description: 'Todos nuestros productos cuentan con garantía oficial. Compra con la tranquilidad de estar respaldado.',
        // No link for this benefit, just description
    },
  ];

  return (
    <Layout>
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            ¿Por Qué Elegirnos?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                linkHref={benefit.linkHref}
                linkText={benefit.linkText}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Other sections of your homepage */}
    </Layout>
  );
};

export default HomePage;