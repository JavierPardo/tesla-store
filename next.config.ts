import type { NextConfig } from "next";
// next.config.js
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {

  output: 'export', // Enables static HTML export

  // Optional: Add a basePath for GitHub Pages deployment if your repo name is not your domain
  // Replace 'your-repo-name' with the actual name of your GitHub repository
  basePath: isProd ? '/tesla-store' : '',

  // Optional: assetPrefix should also be set if basePath is used, to correctly load static assets
  assetPrefix: isProd ? '/tesla-store/' : '',

  images: {
    unoptimized: true, // Disable default image optimization, as it requires a server
    // If you need optimized images, you'd configure a 'custom' loader here
    // loader: 'custom',
    // loaderFile: './path/to/your/custom-image-loader.js',
  },

  // If you are using the Pages Router and have dynamic routes like `/posts/[slug]`,
  // you might need `trailingSlash: true` to ensure consistent paths for static files.
  // trailingSlash: true,
};

module.exports = nextConfig;