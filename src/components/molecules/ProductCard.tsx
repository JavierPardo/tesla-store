import { CheckCircle2, ShoppingCart, Sparkles } from "lucide-react";
import { CardImage } from "../atoms/CardImage";
import { Button } from "../atoms/Button";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void; // Función para ver detalles
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  return (
    <div className="bg-gray-100 border border-gray-200 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-3xl relative">
      {/* Etiquetas "Nuevo" y "Destacado" condicionales */}
      {product.isNew && (
        <span className="absolute top-3 left-3 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md animate-pulse">
          <Sparkles className="inline-block mr-1" size={14} /> Nuevo
        </span>
      )}
      {product.isFeatured && (
        <span className="absolute top-3 right-3 bg-yellow-500 text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow-md">
          <Sparkles className="inline-block mr-1" size={14} /> Destacado
        </span>
      )}
      <CardImage src={product.image} alt={product.name} className="rounded-t-2xl" />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
        <p className="text-gray-700 text-sm mb-4 line-clamp-3">{product.description}</p>
        {/* Lista de características si existen */}
        {product.features && (
          <ul className="text-sm text-gray-600 mb-4 space-y-1">
            {product.features.map((feature, idx) => (
              <li key={idx} className="flex items-center"><CheckCircle2 size={16} className="text-green-500 mr-2 flex-shrink-0" />{feature}</li>
            ))}
          </ul>
        )}
        <div className="flex justify-between items-center mt-5">
          <span className="text-3xl font-extrabold text-green-700">${product.price.toFixed(2)}</span>
          <Button variant="primary" icon={ShoppingCart} onClick={() => onViewDetails(product)} className="px-5 py-2">
            Ver Detalles
          </Button>
        </div>
      </div>
    </div>
  );
};
