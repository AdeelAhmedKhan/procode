import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactCompiler:true,
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
   output: 'export', // Enables static export
  basePath: isProd ? '/procode' : '', // Required for subdirectory hosting

  images: {
    unoptimized: true, // Required as Next.js Image Optimization needs a server
  },
};

export default nextConfig;
