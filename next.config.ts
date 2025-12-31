import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  reactCompiler:true,
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
   output: 'export', // Enables static export
  basePath: '/procode', // Required for subdirectory hosting

  images: {
    unoptimized: true, // Required as Next.js Image Optimization needs a server
  },
};

export default nextConfig;
