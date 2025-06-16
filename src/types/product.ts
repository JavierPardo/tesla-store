export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  reviewsCount: number;
  image: string;
  category:'impresora' | 'impresoras' | 'consumibles' | 'accesorios' | 'servicios'|'supplier'|'insumo'; // Categorías de productos
  // New properties for detail page
  longDescription?: string;
  specs?: { [key: string]: string };
  galleryImages?: string[];
}
