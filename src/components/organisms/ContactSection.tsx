'use client'
import { useState } from "react";
import { InputField } from "../atoms/InputField";
import { TextAreaField } from "../atoms/TextAreaField";
import { Button } from "../atoms/Button";
import { Factory, MessageSquare, Wrench } from "lucide-react";

interface ContactSectionProps {}

export const ContactSection: React.FC<ContactSectionProps> = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    alert('¡Mensaje enviado! Nos pondremos en contacto contigo pronto.'); // Placeholder
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="p-8 rounded-2xl shadow-2xl bg-white animate-fade-in-up">
      <h2 className="text-5xl font-extrabold text-blue-800 mb-10 text-center animate-fade-in">
        Contáctanos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Formulario de Contacto */}
        <div className="bg-gray-100 p-8 rounded-xl shadow-md">
          <h3 className="text-3xl font-bold text-blue-700 mb-6">Envíanos un Mensaje</h3>
          <form onSubmit={handleSubmit}>
            <InputField
              label="Nombre Completo"
              id="name"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <InputField
              label="Correo Electrónico"
              id="email"
              type="email"
              placeholder="tu@ejemplo.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextAreaField
              label="Tu Mensaje"
              id="message"
              placeholder="Escribe aquí tu consulta..."
              value={formData.message}
              onChange={handleChange}
              required
            />
            <Button type="submit" variant="primary" className="w-full mt-6 py-3">
              Enviar Mensaje
            </Button>
          </form>
        </div>

        {/* Información de Contacto */}
        <div className="bg-blue-50 p-8 rounded-xl shadow-md flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-bold text-blue-800 mb-6">Nuestra Información</h3>
            <div className="space-y-4 text-gray-700 text-lg">
              <p className="flex items-center">
                <MessageSquare className="mr-3 text-blue-600" size={24} /> info@printforge3d.com
              </p>
              <p className="flex items-center">
                <Wrench className="mr-3 text-blue-600" size={24} /> +591 7XXXXXXX (Soporte Técnico)
              </p>
              <p className="flex items-center">
                <Factory className="mr-3 text-blue-600" size={24} /> Calle Falsa 123, Cochabamba, Bolivia
              </p>
              <p>Horario de Atención: Lunes a Viernes, 9:00 AM - 6:00 PM</p>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">¿Dónde Encontrarnos?</h3>
            {/* Aquí podrías insertar un mapa de Google Maps */}
            <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center text-gray-600">
              [Mapa de Ubicación]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
