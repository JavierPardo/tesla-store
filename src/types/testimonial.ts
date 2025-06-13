// Interfaz para definir la estructura de un testimonio
export interface Testimonial {
  id: string;
  author: string;
  text: string;
  rating: number; // 1-5 estrellas
  date: string;
  product?: string; // Opcional, si el testimonio es sobre un producto específico
}