import React from 'react';
import RatingStars from '../atoms/RatingStars'; // Importamos el átomo de estrellas

interface ProductCardProps {
  imageUrl: string;
  altText: string;
  name: string;
  description: string;
  rating: number;
  reviewCount: number;
  price: string;
}

export default function ProductCard({
  imageUrl,
  altText,
  name,
  description,
  rating,
  reviewCount,
  price,
}: ProductCardProps) {
  return (
    <div className="bg-slate-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
      <img src={imageUrl} alt={altText} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-slate-800">{name}</h3>
        <p className="text-slate-600 mb-4">{description}</p>
        <div className="flex items-center mb-4">
          <RatingStars rating={rating} />
          <span className="text-slate-500 ml-2">({reviewCount} Reseñas)</span>
        </div>
        <p className="text-3xl font-bold text-indigo-700 mb-4">{price}</p>
        <button className="w-full bg-indigo-600 text-white py-3 rounded-full font-bold hover:bg-indigo-700 shadow-md hover:shadow-lg transition duration-300 ease-in-out">
          Añadir al Carrito
        </button>
      </div>
    </div>
  );
}

