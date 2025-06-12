import React from 'react';
import CategoryCard from '../molecules/CategoryCard'; // Importamos el componente CategoryCard
import { Printer, Droplet, Cog } from 'lucide-react'; // Importamos los íconos necesarios

export default function CategoryHighlights() {
  return (
    <section className="py-16 bg-white rounded-xl mx-auto container my-8 shadow-lg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">Nuestras Categorías Principales</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CategoryCard
            Icon={Printer}
            title="Impresoras 3D"
            description="Desde modelos para principiantes hasta soluciones industriales avanzadas."
            href="#"
            buttonText="Ver Modelos"
          />
          <CategoryCard
            Icon={Droplet}
            title="Insumos y Filamentos"
            description="Filamentos de alta calidad, resinas y componentes esenciales para tus proyectos."
            href="#"
            buttonText="Explorar Insumos"
          />
          <CategoryCard
            Icon={Cog}
            title="Servicio Técnico"
            description="Diagnóstico, reparación y mantenimiento profesional para tu equipo 3D."
            href="#"
            buttonText="Solicitar Servicio"
          />
        </div>
      </div>
    </section>
  );
}

