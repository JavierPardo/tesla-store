import React from 'react';
import { LucideIcon } from 'lucide-react'; // Importa LucideIcon para tipar el componente del ícono

interface BenefitCardProps {
  Icon: LucideIcon; // Componente de ícono de Lucide React
  title: string;
  description: string;
}

export default function BenefitCard({ Icon, title, description }: BenefitCardProps) {
  return (
    <div className="p-6 rounded-xl bg-white bg-opacity-10 backdrop-blur-sm shadow-md">
      <Icon className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-200">{description}</p>
    </div>
  );
}

