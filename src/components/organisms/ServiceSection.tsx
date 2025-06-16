import { useRouter } from "next/navigation";
import { PrimaryButton } from "../atoms/PrimaryButton";
import { SectionTitle } from "../atoms/SectionTitle";
import { ServiceFeatureCard } from "../molecules/ServiceFeatureCard";

export const ServiceSection: React.FC = () => {
  const router = useRouter();
  return (
    <section id="servicio-tecnico" className="py-12 px-6 md:px-8 lg:px-12">
      <div className="container mx-auto text-center">
        <SectionTitle>Servicio Técnico Especializado</SectionTitle>
        <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
          Ofrecemos diagnóstico, reparación, mantenimiento preventivo y asesoría para tu impresora 3D. Contamos con técnicos expertos para que tu equipo siempre funcione a la perfección.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <ServiceFeatureCard
            iconClass="fas fa-tools"
            title="Reparación y Mantenimiento"
            description="Solucionamos cualquier problema, desde obstrucciones hasta fallas electrónicas."
          />
          <ServiceFeatureCard
            iconClass="fas fa-wrench"
            title="Calibración y Optimización"
            description="Aseguramos que tu impresora entregue la mejor calidad en cada impresión."
          />
          <ServiceFeatureCard
            iconClass="fas fa-headset"
            title="Asesoría Profesional"
            description="Te guiamos en la elección de equipos y resolución de dudas."
          />
        </div>
        <PrimaryButton href="/service-detail">
          Solicitar Servicio Técnico
        </PrimaryButton>
      </div>
    </section>
  );
};