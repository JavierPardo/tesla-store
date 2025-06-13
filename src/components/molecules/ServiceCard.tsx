import { Service } from "@/types";
import { CheckCircle2 } from "lucide-react";
import { Button } from "../atoms/Button";

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-gray-100 border border-gray-200 rounded-2xl p-8 shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-3xl">
      <div className="flex items-center mb-4">
        {/* Renderiza el icono del servicio */}
        <service.icon className="w-12 h-12 text-blue-600 mr-4" />
        <h3 className="text-3xl font-bold text-blue-700">{service.name}</h3>
      </div>
      <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
      <ul className="list-none text-gray-600 space-y-2 mb-6">
        {service.details.map((detail, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle2 size={18} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
      <Button variant="secondary" className="w-full px-8 py-3 rounded-full text-xl font-bold">
        Solicitar Servicio
      </Button>
    </div>
  );
};
