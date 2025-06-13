// types/product.d.ts
export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  category: 'impresora' | 'insumo';
  rating?: number; // Opcional para mostrar valoraciones
}

// components/products/ProductCard.tsx
import Link from 'next/link';
import React from 'react';
import type { Product as ProductModel } from '../../types/product'; // Asegúrate de tener esta interfaz definida

interface ProductCardProps {
  product: ProductModel;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
      <Link href={`/producto/${product.id}`}>
        <a>
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-48 object-cover object-center"
          />
        </a>
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          <Link href={`/producto/${product.id}`}>
            <a className="hover:text-blue-600">{product.name}</a>
          </Link>
        </h3>
        <p className="text-gray-600 mt-1">${product.price.toFixed(2)}</p>
        {/* Opcional: Rating */}
        {product.rating && (
          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`h-5 w-5 ${i < product.rating! ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        )}
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
