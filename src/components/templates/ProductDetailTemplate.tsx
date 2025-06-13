import { Product } from "@/types";
import { Header } from "../organisms/Header";
import { Button } from "../atoms/Button";
import { CheckCircle2, ShoppingCart } from "lucide-react";
import { Footer } from "../organisms/Footer";

interface ProductDetailTemplateProps {
  product: Product; // El producto a mostrar
  onBackToList: () => void; // Función para volver a la lista
}

export const ProductDetailTemplate: React.FC<ProductDetailTemplateProps> = ({ product, onBackToList }) => {
  return (
    <div className="min-h-screen bg-gray-50 font-['Inter'] text-gray-800">
      <Header activeSection="" setActiveSection={() => {}} onGoHome={onBackToList} /> {/* Simplificado para la página de detalle */}
      <main className="container mx-auto py-12 px-4">
        <section className="p-8 rounded-2xl shadow-2xl bg-white animate-fade-in-up">
          <Button variant="ghost" onClick={onBackToList} className="mb-8 text-blue-600 hover:underline">
            ← Volver al Catálogo
          </Button>

          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <img
                src={product.image}
                alt={product.name}
                className="rounded-xl shadow-lg w-full object-cover max-h-[500px]"
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/800x600/e0e0e0/333333?text=Imagen+No+Disponible'; }}
              />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl font-extrabold text-blue-800 mb-4">{product.name}</h1>
              <p className="text-gray-600 text-xl font-semibold mb-4">{product.description}</p>
              <span className="text-4xl font-extrabold text-green-700 mb-6 block">${product.price.toFixed(2)}</span>

              <h2 className="text-2xl font-bold text-gray-900 mb-3">Descripción Completa</h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                {product.longDescription || 'No hay una descripción completa disponible para este producto en este momento.'}
              </p>

              {product.features && product.features.length > 0 && (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Características Destacadas</h2>
                  <ul className="list-disc list-inside text-gray-700 text-lg mb-6 space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center"><CheckCircle2 size={18} className="text-green-500 mr-2 flex-shrink-0" />{feature}</li>
                    ))}
                  </ul>
                </>
              )}

              {product.specs && product.specs.length > 0 && (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Especificaciones Técnicas</h2>
                  <div className="bg-gray-100 p-4 rounded-lg mb-6">
                    {product.specs.map((spec, idx) => (
                      <div key={idx} className="flex justify-between py-1 border-b border-gray-200 last:border-b-0">
                        <span className="font-semibold text-gray-700">{spec.label}:</span>
                        <span className="text-gray-800">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              <Button variant="primary" icon={ShoppingCart} className="w-full mt-6 py-4 text-xl">
                Añadir al Carrito
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
