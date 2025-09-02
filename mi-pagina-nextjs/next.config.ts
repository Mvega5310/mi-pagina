import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimización de imágenes (configurada para export estático)
  images: {
    unoptimized: true,
    qualities: [75, 90, 100],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Configuración de compilación
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Configuración experimental
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['react-icons'],
  },
  
  // Configuración de Turbopack
  turbopack: {
    resolveAlias: {
      fs: require.resolve('fs'),
    },
  },
  
  // Configuración de headers para SEO y seguridad
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  
  // Configuración de compresión
  compress: true,
  
  // Configuración de salida
  output: 'export',
  trailingSlash: true,
  
  // Configuración de webpack para optimizaciones adicionales (solo cuando no se usa Turbopack)
  webpack: (config, { isServer }) => {
    // Solo aplicar configuración webpack si no estamos usando Turbopack
    if (process.env.TURBOPACK === undefined) {
      if (!isServer) {
        config.resolve.fallback = {
          ...config.resolve.fallback,
          fs: false,
        };
      }
    }
    return config;
  },
};

export default nextConfig;
