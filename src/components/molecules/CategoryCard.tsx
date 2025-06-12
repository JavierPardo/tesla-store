import React from 'react';
import { LucideIcon } from 'lucide-react'; // Importa LucideIcon para tipar el componente del ícono

interface CategoryCardProps {
  Icon: LucideIcon; // Componente de ícono de Lucide React
  title: string;
  description: string;
  href: string;
  buttonText: string;
}

export default function CategoryCard({ Icon, title, description, href, buttonText }: CategoryCardProps) {
  return (
    <div className="bg-slate-50 p-8 rounded-xl text-center shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
      <Icon className="text-indigo-600 h-20 w-20 mx-auto mb-6" />
      <h3 className="text-2xl font-semibold mb-4 text-slate-800">{title}</h3>
      <p className="text-slate-600 mb-6">{description}</p>
      <a href={href} className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-indigo-700 transition duration-300">
        {buttonText}
      </a>
    </div>
  );
}

