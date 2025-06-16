import { BackButton } from "@/components/atoms/BackButton";
import { FAQItem } from "@/components/molecules/FAQItem";
import { ServiceFeatureCard } from "@/components/molecules/ServiceFeatureCard";
import { ServiceRequestForm } from "@/components/molecules/ServiceRequestForm";

export const ServiceDetailPage: React.FC = () => (
    <div className="container mx-auto py-12 px-6 md:px-8 lg:px-12">
        <BackButton />
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 lg:p-10">
            <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">Detalle del Servicio Técnico</h1>
            <p className="text-lg text-gray-700 mb-10 max-w-4xl mx-auto text-center">
                En 3DPrintShop, nos comprometemos a mantener tus equipos de impresión 3D funcionando a su máximo rendimiento. Nuestro equipo de técnicos certificados ofrece una gama completa de servicios, desde diagnósticos precisos hasta reparaciones complejas y asesoramiento especializado. Confía en nosotros para el cuidado de tu inversión.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <ServiceFeatureCard
                    iconClass="fas fa-microchip"
                    title="Diagnóstico Avanzado"
                    description="Identificación precisa de fallas en hardware y software, con herramientas especializadas."
                />
                <ServiceFeatureCard
                    iconClass="fas fa-cogs"
                    title="Reparación de Componentes"
                    description="Reparación o reemplazo de extrusores, placas, hotends, motores y más."
                />
                <ServiceFeatureCard
                    iconClass="fas fa-spray-can"
                    title="Mantenimiento Preventivo"
                    description="Limpieza profunda, lubricación y ajuste para prolongar la vida útil de tu equipo."
                />
                <ServiceFeatureCard
                    iconClass="fas fa-screwdriver"
                    title="Instalación y Configuración"
                    description="Ayuda con la puesta en marcha inicial y configuración óptima de tu impresora."
                />
                <ServiceFeatureCard
                    iconClass="fas fa-lightbulb"
                    title="Asesoría Personalizada"
                    description="Guía experta para la optimización de impresiones y resolución de problemas comunes."
                />
                <ServiceFeatureCard
                    iconClass="fas fa-shield-alt"
                    title="Garantía de Servicio"
                    description="Ofrecemos garantía en todas nuestras reparaciones para tu tranquilidad."
                />
            </div>

            <div className="max-w-xl mx-auto">
                <ServiceRequestForm />
            </div>

            <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Preguntas Frecuentes</h3>
                <div className="space-y-4">
                    <FAQItem
                        question="¿Cuánto tiempo tardan las reparaciones?"
                        answer="El tiempo de reparación varía según la complejidad del problema y la disponibilidad de piezas. Normalmente, un diagnóstico se realiza en 24-48 horas, y la reparación en 3-7 días hábiles una vez aprobado el presupuesto."
                    />
                    <FAQItem
                        question="¿Aceptan todas las marcas de impresoras 3D?"
                        answer="Sí, nuestros técnicos están capacitados para trabajar con la mayoría de las marcas y modelos de impresoras 3D FDM y de Resina en el mercado, incluyendo Creality, Prusa, Anycubic, Artillery, Elegoo, y más."
                    />
                    <FAQItem
                        question="¿Ofrecen servicio a domicilio?"
                        answer="Actualmente, la mayoría de nuestros servicios se realizan en nuestro taller para garantizar el uso de herramientas especializadas. Sin embargo, para clientes corporativos o casos especiales, podemos evaluar el servicio a domicilio."
                    />
                    <FAQItem
                        question="¿Cómo puedo saber el estado de mi reparación?"
                        answer="Una vez que dejes tu impresora, te proporcionaremos un número de seguimiento. Podrás consultar el estado de tu reparación contactándonos por teléfono o correo electrónico, o a través de un portal de cliente si se implementa."
                    />
                </div>
            </div>
        </div>
    </div>
);