import { PrimaryButton } from "../atoms/PrimaryButton";

export const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 md:px-8 lg:px-12 rounded-lg mx-auto max-w-6xl mt-8 shadow-xl overflow-hidden">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Tu Destino Integral para la Impresión 3D
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          Descubre nuestra amplia selección de impresoras, insumos de calidad y soporte técnico experto.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <PrimaryButton href="/impresoras" >
            Explorar Impresoras
          </PrimaryButton>
          <PrimaryButton href="/insumos" variant="secondary">
            Ver Insumos
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
};