import { CardButton } from "../atoms/CardButton";
import { InputField } from "../atoms/InputField";
import { TextAreaField } from "../atoms/TextAreaField";

export const ServiceRequestForm: React.FC = () => (
  <form className="mt-8 space-y-6 p-6 bg-white rounded-lg shadow-md border border-gray-200">
    <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Solicita tu Servicio</h3>
    <InputField label="Nombre Completo" id="fullName" type="text" placeholder="Tu nombre y apellido" />
    <InputField label="Correo Electrónico" id="email" type="email" placeholder="tu@ejemplo.com" />
    <InputField label="Teléfono" id="phone" type="tel" placeholder="+591 XXXXXXXXX" />
    <InputField label="Marca y Modelo de Impresora" id="printerModel" type="text" placeholder="Ej: Creality Ender 3 V2" />
    <TextAreaField label="Describe tu Problema" id="problemDescription" placeholder="Detalla el problema que presenta tu impresora..." rows={6} />
    <CardButton>
      Enviar Solicitud
    </CardButton>
  </form>
);