import { Product } from "@/types";
import { StarRating } from "./StarRating";
import { CardButton } from "../atoms/CardButton";

interface ProductCardProps {
  product: Product;
  isSupply?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, isSupply = false }) => {

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl border border-gray-200">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
        onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x300/cccccc/333333?text=Imagen+no+disponible'; }}
      />
      <div className="p-6">
        <h3 className="font-semibold text-xl mb-2 text-gray-900">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-blue-600 font-bold text-lg">${product.price.toFixed(2)}</span>
          <div className="flex items-center">
            <StarRating rating={product.rating} />
            <span className="text-gray-500 text-xs ml-1">({product.reviewsCount})</span>
          </div>
        </div>
        <CardButton href={'/tesla-store/impresoras/'}>
          {isSupply ? 'Añadir al Carrito' : 'Ver Detalles'}
        </CardButton>
      </div>
    </div>
  );
};