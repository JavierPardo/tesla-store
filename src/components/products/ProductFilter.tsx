// components/products/ProductFilter.tsx
import React, { useState } from 'react';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Checkbox from '../ui/Checkbox';

interface ProductFilterProps {
  onFilterChange: (filters: any) => void;
  categories: string[];
  brands: string[];
}

const ProductFilter: React.FC<ProductFilterProps> = ({ onFilterChange, categories, brands }) => {
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const handleApplyFilters = () => {
    onFilterChange({
      minPrice: parseFloat(minPrice) || undefined,
      maxPrice: parseFloat(maxPrice) || undefined,
      category: selectedCategory || undefined,
      brands: selectedBrands.length > 0 ? selectedBrands : undefined,
    });
  };

  const handleBrandChange = (brand: string, checked: boolean) => {
    if (checked) {
      setSelectedBrands((prev) => [...prev, brand]);
    } else {
      setSelectedBrands((prev) => prev.filter((b) => b !== brand));
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Filtrar Productos</h2>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Categoría</label>
        <Select
          options={[{ value: '', label: 'Todas' }, ...categories.map(c => ({ value: c, label: c }))]}
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Precio</label>
        <div className="flex space-x-2">
          <Input
            type="number"
            placeholder="Min"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-1/2"
          />
          <Input
            type="number"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-1/2"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Marca</label>
        {brands.map((brand) => (
          <Checkbox
            key={brand}
            label={brand}
            checked={selectedBrands.includes(brand)}
            onChange={(e) => handleBrandChange(brand, e.target.checked)}
          />
        ))}
      </div>

      <button
        onClick={handleApplyFilters}
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors mt-4"
      >
        Aplicar Filtros
      </button>
    </div>
  );
};

export default ProductFilter;