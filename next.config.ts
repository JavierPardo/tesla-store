import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  output: 'export', // This is the key line for static export
  reactStrictMode: true,
  // Optional: Add a base path if your GitHub Pages URL is like username.github.io/repo-name/
  // If your repo is `my-store-repo` and your URL is `username.github.io/my-store-repo/`
  // basePath: '/my-store-repo',
  // images: {
  //   unoptimized: true, // Required for static export if you use next/image
  // },
};

export default nextConfig;
