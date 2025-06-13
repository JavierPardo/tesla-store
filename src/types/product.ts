export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: 'impresora' | 'insumo';
    rating?: number; // Opcional para mostrar valoraciones
    brand?: string; // Opcional para filtrar por marca
    stock?: number; // Opcional para mostrar disponibilidad
    specifications?: {
        [key: string]: string | number; // Especificaciones técnicas del producto   
    };
    reviews?: {
        userId: number;
        rating: number;
        comment: string;
    }[]; // Reseñas de usuarios
    createdAt?: string; // Fecha de creación del producto
    updatedAt?: string; // Fecha de última actualización del producto
    isFeatured?: boolean; // Indica si el producto es destacado
    isActive?: boolean; // Indica si el producto está activo
    discount?: number; // Descuento aplicado al producto
    images?: string[]; // Lista de URLs de imágenes adicionales
    tags?: string[]; // Etiquetas para facilitar la búsqueda    
};