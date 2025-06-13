import { MessageCircleMore } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber: string; // Número de teléfono de WhatsApp (sin '+' ni espacios)
  message?: string; // Mensaje predefinido opcional
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber, message }) => {
  const whatsappLink = `https://wa.me/${phoneNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-green-300 animate-bounce-slow"
      title="Contactar por WhatsApp"
    >
      <MessageCircleMore size={32} /> {/* Icono de WhatsApp */}
    </a>
  );
};
