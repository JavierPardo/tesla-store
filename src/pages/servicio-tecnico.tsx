// pages/servicio-tecnico.tsx
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Input from '../components/ui/Input';
import Button from '../components/common/Button';

const ServicioTecnicoPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    issue: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario a un backend o servicio de correo
    console.log('Formulario de servicio técnico enviado:', formData);
    alert('Su solicitud ha sido enviada. Nos pondremos en contacto pronto.');
    setFormData({ name: '', email: '', phone: '', issue: '' }); // Limpiar formulario
  };

  return (
    <Layout>
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">Servicio Técnico</h1>

      <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl mx-auto">
        <p className="text-lg text-gray-700 mb-6">
          Ofrecemos servicio técnico especializado para tu impresora 3D. Rellena el siguiente formulario para describir tu problema y nos pondremos en contacto contigo lo antes posible.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Nombre Completo
            </label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Correo Electrónico
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
              Teléfono (Opcional)
            </label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="issue" className="block text-gray-700 font-medium mb-2">
              Describe tu problema
            </label>
            <textarea
              id="issue"
              name="issue"
              rows={5}
              value={formData.issue}
              onChange={handleChange}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            ></textarea>
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Enviar Solicitud
          </Button>
        </form>

        <div className="mt-8 text-center text-gray-600">
          <p>También puedes contactarnos directamente:</p>
          <p className="font-semibold">Teléfono: +123 456 7890</p>
          <p className="font-semibold">Email: soporte@impresoras3d.com</p>
        </div>
      </div>
    </Layout>
  );
};

export default ServicioTecnicoPage;