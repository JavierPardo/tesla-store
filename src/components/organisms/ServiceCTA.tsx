import React from 'react';

export default function ServiceCTA() {
  return (
    <section className="py-16 bg-white rounded-xl mx-auto container my-8 shadow-lg">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-slate-800 mb-6">¿Tu Impresora 3D Necesita Atención?</h2>
        <p className="text-xl text-slate-600 mb-8">
          Confía en nuestros técnicos especializados para un diagnóstico preciso y una reparación eficiente.
        </p>
        <a href="#" className="inline-block bg-green-500 text-white px-10 py-5 rounded-full text-xl font-bold shadow-lg hover:bg-green-600 transform hover:scale-105 transition duration-300 ease-in-out">
          ¡Agenda tu Servicio Técnico Ahora!
        </a>
      </div>
    </section>
  );
}

