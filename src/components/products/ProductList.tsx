// components/products/ProductList.tsx
import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../../types/product';
import Spinner from '../common/Spinner'; // Asumiendo un componente Spinner

interface ProductListProps {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const ProductList: React.FC<ProductListProps> = ({ products, loading, error }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 mt-8">
        <p>Error al cargar los productos: {error}</p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center text-gray-600 mt-8">
        <p>No se encontraron productos que coincidan con los filtros.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
