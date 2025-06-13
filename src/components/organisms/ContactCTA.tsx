'use client';
import { Button } from "../atoms/Button";

interface ContactCTAProps {
    title: string;
    description: string;
    ctaText: string;
    ctaOnClick: () => void;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({ title, description, ctaText, ctaOnClick }) => {
    return (
        <div className="mt-12 p-8 bg-blue-50 border border-blue-200 rounded-2xl text-center shadow-inner animate-fade-in">
            <h3 className="text-3xl font-bold text-blue-800 mb-4">{title}</h3>
            <p className="text-lg text-gray-700 mb-6">{description}</p>
            <Button variant="accent" onClick={ctaOnClick} className="px-10 py-4 text-xl font-semibold">
                {ctaText}
            </Button>
        </div>
    );
};
