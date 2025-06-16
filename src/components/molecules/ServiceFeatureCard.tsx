import { ServiceIconContainer } from "../atoms/ServiceIconContainer";

interface ServiceFeatureCardProps {
  iconClass: string;
  title: string;
  description: string;
}

export const ServiceFeatureCard: React.FC<ServiceFeatureCardProps> = ({ iconClass, title, description }) => (
  <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center border border-gray-200">
    <ServiceIconContainer iconClass={iconClass} />
    <h3 className="font-semibold text-xl mb-3 text-gray-900">{title}</h3>
    <p className="text-gray-600 text-center text-sm">{description}</p>
  </div>
);