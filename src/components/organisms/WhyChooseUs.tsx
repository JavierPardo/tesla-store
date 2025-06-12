import React from 'react';
import BenefitCard from '../molecules/BenefitCard'; // Importamos el componente BenefitCard
import { Truck, Headset, Shield, GraduationCap } from 'lucide-react'; // Importamos los íconos necesarios

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl mx-auto container my-8 shadow-lg">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-12">¿Por Qué Elegirnos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <BenefitCard
            Icon={Truck}
            title="Envío Rápido"
            description="Entregas eficientes a todo el país."
          />
          <BenefitCard
            Icon={Headset}
            title="Soporte 24/7"
            description="Asistencia continua para tus consultas."
          />
          <BenefitCard
            Icon={Shield}
            title="Garantía de Calidad"
            description="Productos seleccionados con los más altos estándares."
          />
          <BenefitCard
            Icon={GraduationCap}
            title="Asesoramiento Experto"
            description="Guía personalizada para cada proyecto."
          />
        </div>
      </div>
    </section>
  );
}

