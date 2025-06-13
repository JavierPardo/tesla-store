// Interfaz para definir la estructura de un producto
export interface Product {
  id: string;
  name: string;
  category: 'impresora' | 'insumo';
  image: string;
  price: number;
  description: string;
  features?: string[]; // Características opcionales del producto
  isNew?: boolean;      // Indica si el producto es nuevo
  isFeatured?: boolean; // Indica si el producto es destacado
  longDescription?: string; // Descripción extendida para la página de detalle
  specs?: { label: string; value: string; }[]; // Especificaciones técnicas
}