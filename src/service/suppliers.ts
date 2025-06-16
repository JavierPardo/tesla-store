import { Product } from "@/types";

export const fetchSuppliers = async (): Promise<Product[]> => Promise.resolve<Product[]>([
    {
        id: 's1',
        name: 'Filamento PLA Premium (1kg)',
        description: 'Variedad de colores, biodegradable y fácil de imprimir.',
        price: 25.00,
        category: 'insumo',
        rating: 5.0,
        reviewsCount: 200,
        image: 'https://placehold.co/400x300/d0d0d0/ffffff?text=Filamento+PLA',
        longDescription: 'Nuestro filamento PLA (Ácido Poliláctico) Premium de 1kg es la elección ideal para una amplia gama de proyectos de impresión 3D. Fabricado con materias primas de alta calidad, garantiza una excelente adherencia de capa, un warping mínimo y colores vibrantes. Es biodegradable y compatible con la mayoría de impresoras FDM.',
        specs: {
            'Material': 'PLA (Ácido Poliláctico)',
            'Peso Neto': '1 kg',
            'Diámetro': '1.75mm (tolerancia +/- 0.02mm)',
            'Temperatura de Impresión': '190-220°C',
            'Temperatura de Cama': '0-60°C',
            'Características': 'Biodegradable, bajo warping, alta precisión',
        },
        galleryImages: [
            'https://placehold.co/600x450/d0d0d0/ffffff?text=PLA+Filamento+1',
            'https://placehold.co/600x450/d5d5d5/ffffff?text=PLA+Filamento+2',
            'https://placehold.co/600x450/dada%20/ffffff?text=PLA+Filamento+3',
        ]
    },
    {
        id: 's2',
        name: 'Resina Estándar (1L)',
        description: 'Para impresoras de resina, alta resolución y detalles finos.',
        price: 45.00,
        rating: 4.5,
        category: 'insumo',
        reviewsCount: 75,
        image: 'https://placehold.co/400x300/e0e0e0/ffffff?text=Resina+Standard',
        longDescription: 'Nuestra resina UV estándar de 1 litro está formulada para ofrecer resultados de impresión 3D excepcionales en impresoras de resina LCD/DLP/SLA. Proporciona una alta precisión, detalles nítidos y una superficie lisa. Su baja viscosidad facilita el proceso de impresión y limpieza.',
        specs: {
            'Tipo': 'Resina Fotosensible UV',
            'Volumen': '1 Litro',
            'Longitud de Onda UV': '385-405nm',
            'Dureza Shore D': '80-85D',
            'Aplicación': 'Impresoras LCD/DLP/SLA',
            'Características': 'Alta precisión, curado rápido, baja viscosidad',
        },
        galleryImages: [
            'https://placehold.co/600x450/e0e0e0/ffffff?text=Resina+1',
            'https://placehold.co/600x450/e5e5e5/ffffff?text=Resina+2',
            'https://placehold.co/600x450/eaea%20/ffffff?text=Resina+3',
        ]
    },
    {
        id: 's3',
        name: 'Filamento ABS de Ingeniería (1kg)',
        description: 'Alta resistencia y durabilidad, ideal para piezas funcionales.',
        price: 30.00,
        rating: 3.5,
        category: 'insumo',
        reviewsCount: 110,
        image: 'https://placehold.co/400x300/f0f0f0/ffffff?text=Filamento+ABS',
        longDescription: 'El filamento ABS (Acrilonitrilo Butadieno Estireno) de ingeniería de 1kg es conocido por su robustez, resistencia al impacto y durabilidad. Es ideal para imprimir piezas funcionales, prototipos mecánicos y componentes que requieren resistencia al calor. Se recomienda usar con impresoras que tengan cama caliente y, preferiblemente, recinto cerrado.',
        specs: {
            'Material': 'ABS (Acrilonitrilo Butadieno Estireno)',
            'Peso Neto': '1 kg',
            'Diámetro': '1.75mm (tolerancia +/- 0.02mm)',
            'Temperatura de Impresión': '220-250°C',
            'Temperatura de Cama': '80-110°C',
            'Características': 'Alta resistencia, duradero, resistente al calor',
        },
        galleryImages: [
            'https://placehold.co/600x450/f0f0f0/ffffff?text=ABS+Filamento+1',
            'https://placehold.co/600x450/f5f5f5/ffffff?text=ABS+Filamento+2',
            'https://placehold.co/600x450/fafa%20/ffffff?text=ABS+Filamento+3',
        ]
    },
    {
        id: 's4',
        name: 'Set de Boquillas (5 Unidades)',
        description: 'Variedad de tamaños para diferentes tipos de impresión.',
        category: 'insumo',
        price: 15.00,
        rating: 4.0,
        reviewsCount: 90,
        image: 'https://placehold.co/400x300/909090/ffffff?text=Boquillas+Impresora',
        longDescription: 'Este set incluye 5 boquillas de latón de alta calidad para tu impresora 3D FDM, con diámetros de 0.2mm, 0.4mm, 0.6mm, 0.8mm y 1.0mm. Tener una variedad de tamaños te permite optimizar la impresión para diferentes necesidades, desde detalles finos hasta impresiones rápidas con capas más gruesas. Compatibles con la mayoría de hotends tipo MK8.',
        specs: {
            'Material': 'Latón',
            'Cantidad': '5 unidades',
            'Diámetros': '0.2mm, 0.4mm, 0.6mm, 0.8mm, 1.0mm',
            'Compatibilidad': 'Hotends tipo MK8 (Ej. Ender 3, CR-10)',
        },
        galleryImages: [
            'https://placehold.co/600x450/909090/ffffff?text=Boquillas+1',
            'https://placehold.co/600x450/959595/ffffff?text=Boquillas+2',
            'https://placehold.co/600x450/9a9a9a/ffffff?text=Boquillas+3',
        ]
    },
])