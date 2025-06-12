import React from 'react';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16 md:py-24 rounded-bl-3xl rounded-br-3xl mx-auto container mt-4 shadow-xl">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Impulsa tus Ideas con la <span className="text-yellow-300">Impresión 3D</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          Descubre nuestra amplia gama de impresoras, insumos de alta calidad y soporte técnico experto.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="#" className="bg-white text-indigo-700 px-8 py-3 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
            Explorar Impresoras
          </a>
          <a href="#" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg hover:bg-white hover:text-indigo-700 transform hover:scale-105 transition duration-300 ease-in-out">
            Ver Insumos
          </a>
        </div>
      </div>
    </section>
  );
}

