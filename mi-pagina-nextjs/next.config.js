/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Deshabilitar Turbopack para evitar errores de build
  experimental: {
    missingSuspenseWithCSRBailout: false,
    turbo: false,
  },
  // Usar webpack en lugar de turbopack
  webpack: (config, { isServer }) => {
    return config;
  },
  // Configuración para rutas dinámicas
  generateStaticParams: async () => {
    // Retorna los parámetros estáticos para las rutas dinámicas
    return [
      { id: 'proyecto-1' },
      { id: 'proyecto-2' },
      { id: 'proyecto-3' }
    ];
  }
};

module.exports = nextConfig;