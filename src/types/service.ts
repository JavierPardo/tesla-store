// Interfaz para definir la estructura de un servicio
export interface Service {
  id: string;
  name: string;
  icon: React.ElementType;
  description: string;
  details: string[];
}