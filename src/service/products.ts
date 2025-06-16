import { Product } from "@/types"

const printers: Product[] = [
    {
        id: 'p1',
        name: 'Creality Ender 3 V3 KE',
        description: 'Ideal para principiantes y entusiastas, fácil de usar y con gran calidad de impresión.',
        price: 350.00,
        rating: 4.5,
        reviewsCount: 125,
        category: 'impresoras',
        image: 'https://placehold.co/400x300/a0a0a0/ffffff?text=Impresora+FDM',
        longDescription: 'La Creality Ender 3 V3 KE es una impresora FDM (Fused Deposition Modeling) que combina asequibilidad con un rendimiento excepcional. Es perfecta para iniciarse en la impresión 3D gracias a su fácil montaje y su interfaz de usuario intuitiva. Cuenta con una nivelación automática de la cama, extrusor directo "Sprite" para una mejor compatibilidad con filamentos flexibles, y una velocidad de impresión optimizada.',
        specs: {
            'Tecnología de Impresión': 'FDM',
            'Volumen de Impresión': '220x220x250mm',
            'Temperatura Máx. Extrusor': '300°C',
            'Velocidad de Impresión': 'Hasta 250mm/s',
            'Filamentos Compatibles': 'PLA, ABS, PETG, TPU',
            'Nivelación': 'CR Touch Automático',
        },
        galleryImages: [
            'https://placehold.co/600x450/a0a0a0/ffffff?text=Ender+3+V3+KE+1',
            'https://placehold.co/600x450/a5a5a5/ffffff?text=Ender+3+V3+KE+2',
            'https://placehold.co/600x450/ababab/ffffff?text=Ender+3+V3+KE+3',
        ]
    },
    {
        id: 'p2',
        name: 'Anycubic Photon Mono X2',
        description: 'Para impresiones de alta precisión y detalle, perfecta para modelos complejos.',
        price: 580.00,
        category: 'impresoras',
        rating: 4.0,
        reviewsCount: 89,
        image: 'https://placehold.co/400x300/808080/ffffff?text=Impresora+Resina',
        longDescription: 'La Anycubic Photon Mono X2 es una impresora 3D de resina (SLA/DLP) que ofrece una increíble precisión y velocidad. Su pantalla monocromática 4K de 9.1 pulgadas permite tiempos de exposición más cortos y una vida útil prolongada. Ideal para figuras, prototipos detallados y joyas.',
        specs: {
            'Tecnología de Impresión': 'Resina (LCD Mono)',
            'Volumen de Impresión': '196x122x200mm',
            'Resolución XY': '48µm',
            'Velocidad de Impresión': 'Hasta 50mm/h',
            'Pantalla LCD': '9.1" 4K Monocromática',
        },
        galleryImages: [
            'https://placehold.co/600x450/808080/ffffff?text=Photon+Mono+X2+1',
            'https://placehold.co/600x450/858585/ffffff?text=Photon+Mono+X2+2',
            'https://placehold.co/600x450/8a8a8a/ffffff?text=Photon+Mono+X2+3',
        ]
    },
    {
        id: 'p3',
        name: 'Prusa i3 MK4',
        description: 'Rendimiento profesional y fiabilidad, ideal para uso comercial e industrial.',
        category: 'impresoras',
        price: 1100.00,
        rating: 5.0,
        reviewsCount: 62,
        image: 'https://placehold.co/400x300/b0b0b0/ffffff?text=Impresora+Profesional',
        longDescription: 'La Original Prusa i3 MK4 es la última generación de las galardonadas impresoras de código abierto de Prusa Research. Conocida por su fiabilidad, facilidad de uso y alta calidad de impresión, la MK4 incorpora el nuevo extrusor Nextruder, nivelación automática F.I.N.D.A. y un rendimiento de impresión superior.',
        specs: {
            'Tecnología de Impresión': 'FDM',
            'Volumen de Impresión': '250x210x210mm',
            'Temperatura Máx. Hotend': '300°C',
            'Velocidad de Impresión': 'Hasta 200mm/s (con Input Shaper)',
            'Filamentos Compatibles': 'PLA, PETG, ABS, ASA, PC, Nylon',
            'Características': 'Nextruder, Nivelación Automática',
        },
        galleryImages: [
            'https://placehold.co/600x450/b0b0b0/ffffff?text=Prusa+MK4+1',
            'https://placehold.co/600x450/b5b5b5/ffffff?text=Prusa+MK4+2',
            'https://placehold.co/600x450/bababa/ffffff?text=Prusa+MK4+3',
        ]
    },
    {
        id: 'p4',
        name: 'Bambu Lab P1S',
        description: 'Impresora de alta velocidad con capacidad multicolor.',
        price: 700.00,
        category: 'impresoras',
        rating: 4.5,
        reviewsCount: 45,
        image: 'https://placehold.co/400x300/c0c0c0/ffffff?text=Impresora+Nueva',
        longDescription: 'La Bambu Lab P1S es una impresora 3D de alta velocidad y rendimiento que se destaca por su capacidad de impresión multicolor a través del sistema AMS (Automatic Material System). Ofrece una experiencia de usuario fluida, con características avanzadas como compensación de vibraciones, extrusor de accionamiento directo y cámara integrada para monitoreo.',
        specs: {
            'Tecnología de Impresión': 'FDM',
            'Volumen de Impresión': '256x256x256mm',
            'Velocidad Máx.': '500 mm/s',
            'Características': 'AMS (opcional), Compensación de vibración, extrusor directo',
            'Filamentos Compatibles': 'PLA, PETG, ABS, ASA, PVA, PET',
        },
        galleryImages: [
            'https://placehold.co/600x450/c0c0c0/ffffff?text=Bambu+Lab+P1S+1',
            'https://placehold.co/600x450/c5c5c5/ffffff?text=Bambu+Lab+P1S+2',
            'https://placehold.co/600x450/cacaca/ffffff?text=Bambu+Lab+P1S+3',
        ]
    },
];

export const fetchPrinters = async (): Promise<Product[]> => {

    return Promise.resolve<Product[]>(printers)
}

export const getProductById = (id: string): Product | undefined => {
  return [...printers].find(p => p.id === id);
};