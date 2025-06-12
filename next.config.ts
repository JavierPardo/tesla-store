import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Genera un sitio estático
  images: {
    unoptimized: true, // Importante para sitios estáticos en GitHub Pages
  },
  // Descomenta y ajusta si tu sitio se despliega en un subdirectorio
  // Por ejemplo, si tu repo es 'your-username.github.io/my-dental-website'
  // basePath: '/my-dental-website',
  // assetPrefix: '/my-dental-website/',
    basePath: process.env.NODE_ENV === 'production' ? '/tesla-store' : '', // Cambia 'tienda3d-catalogo' por el nombre de tu repositorio
  assetPrefix: process.env.NODE_ENV === 'production' ? '/tesla-store/' : '', // Asegúrate de que el prefijo del asset también sea correcto

};

export default nextConfig;
