'use client'
import React, { useState } from 'react';
// Importa iconos de lucide-react para una mejor representación visual
import { Wrench, CheckCircle2, Handshake } from 'lucide-react';
import { Product, Service, Testimonial } from '@/types';
import { ProductDetailTemplate } from '@/components/templates/ProductDetailTemplate';
import { CatalogTemplate } from '@/components/templates/CatalogTemplate';
import { WhatsAppButton } from '@/components/atoms/WhatsAppButton';

const App: React.FC = () => {
  // Estado para la sección activa de la navegación
  const [activeSection, setActiveSection] = useState<'impresoras' | 'insumos' | 'servicio-tecnico' | 'nosotros' | 'testimonios' | 'contacto'>('impresoras');
  // Estado para el producto seleccionado para la vista de detalle
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Datos simulados de productos, servicios y testimonios.
  // EN UN PROYECTO NEXT.JS REAL:
  // Estos datos serían obtenidos mediante getServerSideProps para renderizado en servidor,
  // especialmente para las secciones de catálogo y detalles de producto/insumo,
  // para mejorar el SEO y el rendimiento inicial.
  const products: Product[] = [
    {
      id: 'p1',
      name: 'Impresora 3D Creality Ender 3 S1 Pro',
      category: 'impresora',
      image: 'https://placehold.co/600x400/2A9D8F/FFFFFF?text=Ender+3+S1+Pro',
      price: 389.99,
      description: 'La evolución de la icónica Ender 3, con extrusor directo "Sprite", nivelación automática CR Touch y altas temperaturas.',
      features: ['Extrusor Directo "Sprite"', 'Nivelación CR Touch', 'Cama de PEI flexible', 'Temperatura hasta 300°C', 'Montaje modular en 6 pasos'],
      isNew: true,
      isFeatured: true,
      longDescription: 'La Creality Ender 3 S1 Pro es una impresora 3D de escritorio de última generación, ideal tanto para aficionados como para profesionales. Equipada con el extrusor directo "Sprite" de doble engranaje, garantiza una alimentación de filamento suave y compatible con una amplia variedad de materiales, incluyendo TPU flexible. Su función de nivelación automática CR Touch simplifica enormemente la configuración de la cama, mientras que la cama de impresión de acero para muelles recubierta de PEI ofrece una excelente adhesión y fácil extracción de piezas. Capaz de alcanzar temperaturas de boquilla de hasta 300°C, abre un mundo de posibilidades con filamentos de ingeniería avanzados. Un verdadero caballo de batalla para cualquier taller.',
      specs: [
        { label: 'Tecnología', value: 'FDM' },
        { label: 'Volumen de impresión', value: '220x220x270mm' },
        { label: 'Temperatura de boquilla máx.', value: '300°C' },
        { label: 'Diámetro de filamento', value: '1.75mm' },
        { label: 'Materiales compatibles', value: 'PLA, ABS, PETG, TPU, Wood, PA, PC' },
      ]
    },
    {
      id: 'p2',
      name: 'Anycubic Photon Mono X2',
      category: 'impresora',
      image: 'https://placehold.co/600x400/E76F51/FFFFFF?text=Anycubic+Photon+Mono+X2',
      price: 649.99,
      description: 'Impresora 3D de resina de alta resolución, ideal para modelos detallados y miniaturas.',
      features: ['Pantalla Mono LCD 4K', 'Gran volumen de impresión', 'Velocidad de impresión rápida', 'Fuente de luz UV mejorada'],
      isFeatured: true,
      longDescription: 'La Anycubic Photon Mono X2 lleva la impresión 3D de resina al siguiente nivel con su impresionante pantalla LCD monocromática 4K (9.1 pulgadas). Esta tecnología permite tiempos de exposición ultracortos, resultando en una velocidad de impresión significativamente mayor y una vida útil prolongada de la pantalla. Su gran volumen de construcción la hace perfecta para proyectos de mayor escala o para imprimir múltiples piezas pequeñas en una sola tanda. La matriz de luz UV paralela garantiza una uniformidad de exposición superior, lo que se traduce en una precisión y un detalle excepcionales en cada capa. Ideal para joyería, prototipos dentales y figuras de colección.',
      specs: [
        { label: 'Tecnología', value: 'MSLA (LCD Resina)' },
        { label: 'Volumen de impresión', value: '196x122x200mm' },
        { label: 'Resolución XY', value: '4096x2560 (4K)' },
        { label: 'Velocidad de impresión máx.', value: '60 mm/h' },
        { label: 'Fuente de luz', value: 'Matrix UV mejorada' },
      ]
    },
    {
      id: 'p3',
      name: 'Filamento PLA Pro Gris Espacial (1kg)',
      category: 'insumo',
      image: 'https://placehold.co/600x400/F4A261/FFFFFF?text=Filamento+PLA+Gris',
      price: 26.50,
      description: 'Filamento PLA de ingeniería de alta resistencia y acabado mate, perfecto para piezas funcionales y prototipos.',
      features: ['Diámetro 1.75mm', 'Tolerancia +/- 0.02mm', 'Bobinado sin enredos', 'Acabado mate'],
      isNew: true,
      longDescription: 'Nuestro filamento PLA Pro Gris Espacial es la elección perfecta para aquellos que buscan un equilibrio entre facilidad de impresión y rendimiento mejorado. Formulado para ofrecer una mayor resistencia al impacto y una mejor adhesión de capa en comparación con el PLA estándar, es ideal para imprimir piezas que requieren durabilidad. Su acabado mate reduce las líneas de capa visibles y le da un aspecto profesional a tus impresiones. Viene bobinado con precisión para evitar enredos y asegurar una experiencia de impresión sin interrupciones.',
      specs: [
        { label: 'Material', value: 'PLA Pro' },
        { label: 'Color', value: 'Gris Espacial' },
        { label: 'Peso Neto', value: '1 kg' },
        { label: 'Temperatura de impresión', value: '195-220°C' },
      ]
    },
    {
      id: 'p4',
      name: 'Resina Estándar ABS-Like Blanco (1L)',
      category: 'insumo',
      image: 'https://placehold.co/600x400/264653/FFFFFF?text=Resina+ABS-Like',
      price: 42.00,
      description: 'Resina UV con propiedades similares al ABS, ofrece mayor tenacidad y resistencia al impacto.',
      features: ['Baja contracción', 'Alta precisión', 'Secado rápido', 'Mayor dureza', 'Compatible con la mayoría de impresoras LCD'],
      longDescription: 'Esta resina estándar ABS-Like ofrece una excelente combinación de dureza, resistencia al impacto y baja contracción, haciéndola ideal para una amplia gama de aplicaciones que van desde prototipos funcionales hasta modelos de ingeniería. Su color blanco puro resalta los detalles finos y es fácil de pintar. Diseñada para un curado rápido, reduce los tiempos de post-procesamiento. Es compatible con la mayoría de impresoras 3D LCD/DLP que utilizan luz UV de 405nm.',
      specs: [
        { label: 'Material', value: 'Resina UV (ABS-Like)' },
        { label: 'Color', value: 'Blanco' },
        { label: 'Volumen', value: '1 Litro' },
        { label: 'Longitud de onda UV', value: '405nm' },
        { label: 'Dureza Shore D', value: '80-85' },
      ]
    },
    {
      id: 'p5',
      name: 'Set de Boquillas de Acero Endurecido (5-piezas)',
      category: 'insumo',
      image: 'https://placehold.co/600x400/E9C46A/333333?text=Boquillas+Acero',
      price: 18.99,
      description: 'Boquillas duraderas de acero endurecido para filamentos abrasivos como fibra de carbono y madera.',
      features: ['Diámetros: 0.2, 0.4, 0.6, 0.8, 1.0mm', 'Resistente al desgaste extremo', 'Alta conductividad térmica'],
      longDescription: 'Este set de 5 boquillas de acero endurecido es esencial para cualquier entusiasta o profesional que trabaje con filamentos abrasivos. A diferencia de las boquillas de latón estándar, el acero endurecido ofrece una resistencia superior al desgaste causado por materiales como la fibra de carbono, el nylon cargado con fibra de vidrio o los filamentos con partículas metálicas/madera. Esto asegura una mayor durabilidad y una calidad de impresión constante a lo largo del tiempo. Incluye los diámetros más comunes para diversas necesidades de impresión.',
      specs: [
        { label: 'Material', value: 'Acero endurecido' },
        { label: 'Cantidad', value: '5 piezas' },
        { label: 'Diámetros', value: '0.2, 0.4, 0.6, 0.8, 1.0mm' },
        { label: 'Compatibilidad', value: 'Impresoras FDM con extrusor M6' },
      ]
    },
    {
      id: 'p6',
      name: 'Kit de Herramientas para Impresión 3D',
      category: 'insumo',
      image: 'https://placehold.co/600x400/A8DADC/333333?text=Kit+Herramientas',
      price: 34.99,
      description: 'Set esencial de herramientas para el mantenimiento y la manipulación de tus impresiones 3D.',
      features: ['Alicates de corte', 'Espátula para cama', 'Pinzas de precisión', 'Set de llaves Allen'],
      longDescription: 'Este kit completo de herramientas está diseñado específicamente para las necesidades del usuario de impresión 3D. Incluye todas las herramientas esenciales para el mantenimiento de su impresora, la limpieza de boquillas, la manipulación de filamentos y el post-procesamiento de sus impresiones. Desde alicates de corte para retirar soportes hasta una espátula robusta para despegar piezas de la cama, este kit garantiza que tendrá todo lo necesario para una experiencia de impresión fluida y eficiente. Herramientas de alta calidad para durar.',
      specs: [
        { label: 'Material', value: 'Acero inoxidable, Plástico de alta resistencia' },
        { label: 'Contenido', value: 'Alicates, Espátula, Pinzas, Llaves Allen, etc.' },
        { label: 'Uso', value: 'Mantenimiento de impresora, Post-procesamiento' },
      ]
    },
  ];

  const services: Service[] = [
    {
      id: 's1',
      name: 'Diagnóstico y Reparación Avanzada',
      icon: Wrench,
      description: 'Análisis detallado y solución de problemas complejos en impresoras 3D de todas las marcas.',
      details: [
        'Diagnóstico electrónico y mecánico.',
        'Reparación de placas base y extrusores.',
        'Reemplazo de piezas originales o compatibles.'
      ]
    },
    {
      id: 's2',
      name: 'Mantenimiento Preventivo y Optimización',
      icon: CheckCircle2,
      description: 'Servicio integral para asegurar el óptimo rendimiento y prolongar la vida útil de su equipo.',
      details: [
        'Limpieza profunda y lubricación de componentes.',
        'Calibración precisa de ejes y nivelación de cama.',
        'Actualización de firmware y perfiles de impresión.'
      ]
    },
    {
      id: 's3',
      name: 'Asesoría Personalizada y Capacitación',
      icon: Handshake,
      description: 'Guía experta para principiantes y usuarios avanzados, desde la configuración inicial hasta técnicas avanzadas.',
      details: [
        'Configuración inicial y primera impresión guiada.',
        'Optimización de parámetros de laminado (slicer).',
        'Soporte para proyectos específicos y materiales especiales.'
      ]
    }
  ];

  const testimonials: Testimonial[] = [
    {
      id: 't1',
      author: 'María P. (Arquitecta)',
      text: '¡El servicio técnico de PrintForge 3D es excepcional! Tenía un problema con mi impresora y lo resolvieron en tiempo récord. Totalmente recomendados.',
      rating: 5,
      date: '10 de Mayo, 2025',
      product: 'Servicio Técnico'
    },
    {
      id: 't2',
      author: 'Carlos G. (Diseñador Industrial)',
      text: 'Compré mi Ender 3 S1 Pro aquí y no podría estar más contento. La calidad de impresión es fantástica y el filamento PLA Pro es de lo mejor que he probado.',
      rating: 5,
      date: '01 de Junio, 2025',
      product: 'Creality Ender 3 S1 Pro'
    },
    {
      id: 't3',
      author: 'Ana M. (Joyería Artesanal)',
      text: 'La Anycubic Photon Mono X2 es una maravilla. Los detalles que consigo con esta impresora y la resina ABS-Like son increíbles. ¡Mis diseños nunca se vieron tan bien!',
      rating: 4,
      date: '25 de Abril, 2025',
      product: 'Anycubic Photon Mono X2'
    },
    {
      id: 't4',
      author: 'Roberto S. (Ingeniero Mecánico)',
      text: 'Adquirí el set de boquillas de acero endurecido y la diferencia es notoria. Imprimo piezas funcionales con materiales abrasivos sin preocuparme por el desgaste. Gran inversión.',
      rating: 5,
      date: '18 de Marzo, 2025',
      product: 'Set de Boquillas de Acero Endurecido'
    },
  ];

  // Función para manejar la visualización de los detalles de un producto
  const handleViewProductDetails = (product: Product) => {
    setSelectedProduct(product);
  };

  // Función para volver a la lista del catálogo
  const handleBackToList = () => {
    setSelectedProduct(null);
  };

  // Renderiza la plantilla de detalle del producto si hay un producto seleccionado,
  // de lo contrario, renderiza la plantilla principal del catálogo.
  return (
    <div className="min-h-screen bg-gray-50 font-['Inter'] text-gray-800">
      {selectedProduct ? (
        <ProductDetailTemplate product={selectedProduct} onBackToList={handleBackToList} />
      ) : (
        <CatalogTemplate
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          products={products}
          services={services}
          testimonials={testimonials}
          onViewProductDetails={handleViewProductDetails}
          onGoHome={() => { setActiveSection('impresoras'); setSelectedProduct(null); }}
        />
      )}

      {/* Botón flotante de WhatsApp */}
      {/* Se puede personalizar el número de teléfono y el mensaje predeterminado */}
      <WhatsAppButton phoneNumber="5917XXXXXXXX" message="¡Hola! Me gustaría más información sobre sus productos de impresión 3D." />

      {/* Estilos globales de animación (pueden ser movidos a un archivo CSS global) */}
      <style jsx>{`
        @keyframes fadeInScaleUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fadeInScaleUp 0.6s ease-out forwards; }
        .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
        .animate-fade-in-down { animation: fadeInDown 0.8s ease-out forwards; }

        /* Animación para el botón de WhatsApp */
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default App;
