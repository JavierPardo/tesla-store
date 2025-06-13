// components/common/BenefitCard.tsx
import React from 'react';
import Link from 'next/link'; // Assuming you're using Next.js for routing
export interface BenefitCardProps {
  icon: React.ElementType; // To pass a React SVG icon component
  title: string;
  description: string;
  linkHref?: string; // Optional link for more details
  linkText?: string; // Optional text for the link
}
const BenefitCard: React.FC<BenefitCardProps> = ({ icon: Icon, title, description, linkHref, linkText }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <div className="mb-4">
        {Icon && <Icon className="h-16 w-16 text-blue-600" />}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      {linkHref && linkText && (
        <Link href={linkHref}>
          <label className="text-blue-600 hover:text-blue-800 font-semibold mt-auto">
            {linkText} &rarr;
          </label>
        </Link>
      )}
    </div>
  );
};

export default BenefitCard;