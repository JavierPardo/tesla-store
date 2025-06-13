// utils/api.ts (Función de utilidad para simular una llamada a la API)
import { Product } from '../types/product';

// Datos de ejemplo para simular una API
const dummyProducts: Product[] = [
  { id: '1', name: 'Creality Ender 3 V2 Neo', price: 299.99, imageUrl: '/images/ender3v2.jpg', description: 'Impresora 3D FDM de escritorio.', category: 'impresora', rating: 4.5 },
  { id: '2', name: 'Anycubic Photon Mono X2', price: 450.00, imageUrl: '/images/photonmonox2.jpg', description: 'Impresora 3D de resina de alta precisión.', category: 'impresora', rating: 4.8 },
  { id: '3', name: 'Filamento PLA Rojo 1kg', price: 25.00, imageUrl: '/images/pla-red.jpg', description: 'Filamento PLA de alta calidad, 1.75mm.', category: 'insumo' },
  { id: '4', name: 'Resina UV Estándar 500ml', price: 35.00, imageUrl: '/images/resin-uv.jpg', description: 'Resina UV para impresoras SLA/DLP.', category: 'insumo' },
  { id: '5', name: 'Prusa MK3S+', price: 999.00, imageUrl: '/images/prusa-mk3s.jpg', description: 'Impresora 3D FDM Open Source, muy confiable.', category: 'impresora', rating: 4.9 },
  // ... más productos
];

export const fetchProducts = async (type: 'impresoras' | 'insumos', filters?: any): Promise<Product[]> => {
  // Simular una llamada a la API
  return new Promise((resolve) => {
    setTimeout(() => {
      let filtered = dummyProducts.filter(p => {
        const matchesCategory = type === 'impresoras' ? p.category === 'impresora' : p.category === 'insumo';
        if (!matchesCategory) return false;

        if (filters?.minPrice && p.price < filters.minPrice) return false;
        if (filters?.maxPrice && p.price > filters.maxPrice) return false;
        if (filters?.category && p.category !== filters.category) return false;
        if (filters?.brands && filters.brands.length > 0) {
          // Esto es una simplificación, necesitarías un campo 'brand' en Product
          const productBrand = p.name.split(' ')[0]; // Ejemplo: 'Creality Ender 3' -> 'Creality'
          if (!filters.brands.includes(productBrand)) return false;
        }
        return true;
      });
      resolve(filtered);
    }, 500); // Simular tiempo de carga
  });
};