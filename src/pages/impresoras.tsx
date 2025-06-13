// pages/impresoras.tsx
import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import ProductList from '../components/products/ProductList';
import ProductFilter from '../components/products/ProductFilter';
import { Product } from '../types/product';
import { fetchProducts } from '../utils/api'; // Función para obtener datos de la API

interface Filters {
  minPrice?: number;
  maxPrice?: number;
  category?: string;
  brands?: string[];
}

const ImpresorasPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<Filters>({});

  // Simulación de datos para filtros (en un entorno real, vendrían de la API)
  const availableCategories = ['FDM', 'SLA', 'DLP'];
  const availableBrands = ['Creality', 'Prusa', 'Anycubic', 'Elegoo'];

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        // En un entorno real, pasarías los filtros a la función fetchProducts
        const fetchedProducts = await fetchProducts('impresoras', filters); // Asume que fetchProducts filtra
        setProducts(fetchedProducts);
      } catch (err) {
        setError('No se pudieron cargar las impresoras.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, [filters]); // Vuelve a cargar productos cuando cambian los filtros

  const handleFilterChange = (newFilters: Filters) => {
    setFilters(newFilters);
  };

  return (
    <Layout>
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">Impresoras 3D</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <ProductFilter
            onFilterChange={handleFilterChange}
            categories={availableCategories}
            brands={availableBrands}
          />
        </div>
        <div className="md:col-span-3">
          <ProductList products={products} loading={loading} error={error} />
        </div>
      </div>
    </Layout>
  );
};

export default ImpresorasPage;

