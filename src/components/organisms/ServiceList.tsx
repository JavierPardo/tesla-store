import { Service } from "@/types";
import { ServiceCard } from "../molecules/ServiceCard";

interface ServiceListProps {
  services: Service[];
}

export const ServiceList: React.FC<ServiceListProps> = ({ services }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {services.map(service => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
};