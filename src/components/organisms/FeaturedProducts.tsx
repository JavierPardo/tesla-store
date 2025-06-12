import React from 'react';
import ProductCard from '@/components/molecules/ProductCard'; // Importamos el componente ProductCard con ruta absoluta

export default function FeaturedProducts() {
  const products = [
    {
      imageUrl: "https://placehold.co/400x300/4F46E5/FFFFFF?text=Impresora+3D+Ender+3",
      altText: "Impresora 3D Creality Ender 3 Pro",
      name: "Creality Ender 3 Pro",
      description: "Impresora FDM ideal para principiantes y entusiastas.",
      rating: 4.5,
      reviewCount: 150,
      price: "$299.99",
    },
    {
      imageUrl: "https://placehold.co/400x300/6D28D9/FFFFFF?text=Filamento+PLA+1.75mm",
      altText: "Filamento PLA Premium",
      name: "Filamento PLA Premium 1.75mm",
      description: "Amplia variedad de colores, alta calidad y facilidad de uso.",
      rating: 4.0,
      reviewCount: 80,
      price: "$24.99",
    },
    {
      imageUrl: "https://placehold.co/400x300/4F46E5/FFFFFF?text=Impresora+Resina+Anycubic",
      altText: "Impresora de Resina Anycubic Photon",
      name: "Anycubic Photon Mono X",
      description: "Impresora de resina para detalles finos y alta precisión.",
      rating: 5.0,
      reviewCount: 65,
      price: "$549.99",
    },
    {
      imageUrl: "https://placehold.co/400x300/6D28D9/FFFFFF?text=Resina+UV+500ml",
      altText: "Resina UV Estándar 500ml",
      name: "Resina UV Estándar 500ml",
      description: "Para impresiones de alta resolución y detalles nítidos.",
      rating: 3.5,
      reviewCount: 45,
      price: "$39.99",
    },
  ];

  return (
    <section className="py-16 bg-white rounded-xl mx-auto container my-8 shadow-lg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">Nuestros Productos Destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="#" className="inline-block bg-indigo-700 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:bg-indigo-800 transform hover:scale-105 transition duration-300 ease-in-out">
            Ver Todo el Catálogo
          </a>
        </div>
      </div>
    </section>
  );
}

