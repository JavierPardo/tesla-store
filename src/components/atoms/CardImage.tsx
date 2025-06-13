// Componente CardImage: Una imagen para usar dentro de tarjetas con manejo de error
interface CardImageProps {
  src: string; // URL de la imagen
  alt: string; // Texto alternativo de la imagen
  className?: string; // Clases CSS adicionales
}

export const CardImage: React.FC<CardImageProps> = ({ src, alt, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full h-56 object-cover ${className}`}
      // Manejo de error para imágenes no cargadas, mostrando un placeholder
      onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/e0e0e0/333333?text=Imagen+No+Disponible'; }}
    />
  );
};