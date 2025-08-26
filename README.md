# FriendSoft - Modern React SSR Application

A high-performance, multilingual React application built with TypeScript, Vite, and Server-Side Rendering (SSR) capabilities. This project showcases modern web development practices with a focus on performance, accessibility, and user experience.

## 🚀 Features

- **Server-Side Rendering (SSR)** - Fast initial page loads and SEO optimization
- **Client-Side Rendering (CSR)** - Dynamic user interactions after hydration
- **Internationalization (i18n)** - Multi-language support (English/Spanish)
- **Performance Optimized** - Lighthouse CI integration and performance monitoring
- **Modern Tech Stack** - React 18, TypeScript, Vite, Tailwind CSS
- **Interactive Maps** - Leaflet integration for location services
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Accessibility** - WCAG compliant with proper semantic HTML
- **SEO Optimized** - React Helmet for meta tags and structured data

## 📁 Project Structure

```
src/
├── client/           # Client-side entry point
│   └── main.tsx
├── ssr/             # Server-side rendering
│   ├── entry-client.tsx
│   ├── entry-server.tsx
│   ├── server.ts
│   └── ClientOnly.tsx
├── shared/          # Shared components and logic
│   ├── components/  # Reusable UI components
│   ├── hooks/       # Custom React hooks
│   ├── layout/      # Layout components
│   ├── pages/       # Page components
│   └── services/    # Business logic and API calls
├── assets/          # Static assets (images, icons, etc.)
├── locales/         # Translation files
├── styles/          # Global styles and CSS
└── routes.tsx       # Application routing
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: React Context + Hooks
- **Internationalization**: i18next
- **Maps**: Leaflet + React Leaflet
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **SEO**: React Helmet Async
- **Server**: Express.js (for SSR)
- **Performance**: Lighthouse CI

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mi-pagina
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
# Client-side development
npm run dev

# Server-side rendering development
npm run dev:ssr
```

4. Open your browser and navigate to `http://localhost:3000` (CSR) or `http://localhost:3000` (SSR)

## 📜 Available Scripts

### Development
- `npm run dev` - Start Vite development server (CSR)
- `npm run dev:ssr` - Start SSR development server
- `npm run preview` - Preview production build locally
- `npm run preview:ssr` - Preview SSR production build

### Building
- `npm run build` - Build for production (CSR)
- `npm run build:ssr` - Build for SSR production
- `npm run build:client` - Build client bundle only
- `npm run build:server` - Build server bundle only
- `npm run build:clean` - Clean and build SSR

### Code Quality
- `npm run lint` - Run ESLint with strict warnings
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run type-check` - Run TypeScript type checking

### Performance & Analysis
- `npm run lighthouse` - Run Lighthouse CI tests
- `npm run performance:check` - Full performance audit
- `npm run performance:local` - Local performance check
- `npm run analyze:bundle` - Analyze bundle size
- `npm run optimize:imports` - Optimize import statements

### Utilities
- `npm run clean` - Clean dist directory

## 🌍 Internationalization

The application supports multiple languages using i18next:

- **English** (default)
- **Spanish**

Translation files are located in `src/locales/` directory. To add a new language:

1. Create a new folder in `src/locales/`
2. Add translation JSON files
3. Update the i18n configuration in `src/i18n.ts`

## 🎨 Styling

The project uses Tailwind CSS for styling with:

- **Responsive Design**: Mobile-first approach
- **Custom Theme**: Extended Tailwind configuration
- **Component Styles**: Utility-first CSS classes
- **Accessibility**: Focus states and screen reader support

## 📊 Performance

Performance is monitored using:

- **Lighthouse CI**: Automated performance testing
- **Bundle Analysis**: Code splitting and optimization
- **SSR**: Fast initial page loads
- **Image Optimization**: WebP format support
- **Code Splitting**: Dynamic imports for better loading

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration with SSR support
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint rules and settings
- `lighthouserc.js` - Lighthouse CI configuration

## 🚀 Deployment

### Production Build

```bash
# Build for production
npm run build:ssr

# Start production server
npm run preview:ssr
```

## 🐳 Docker Deployment

Este proyecto incluye una configuración completa de Docker con scripts npm para facilitar el despliegue y gestión de contenedores.

### Scripts de Construcción y Despliegue

#### `npm run docker:build`
**Propósito**: Construye la imagen Docker de la aplicación.
```bash
npm run docker:build
# Equivale a: docker build -t mi-pagina .
```

#### `npm run deploy:prod`
**Propósito**: Script completo de despliegue en producción que construye la aplicación SSR y la imagen Docker.
```bash
npm run deploy:prod
# Equivale a: npm run build:ssr && npm run docker:build
```

### Scripts de Ejecución de Contenedores

#### `npm run docker:run`
**Propósito**: Ejecuta el contenedor en modo daemon (background) en el puerto 3013.
```bash
npm run docker:run
# Equivale a: docker run -d -p 3013:3000 --name mi-pagina-container mi-pagina
```

#### `npm run docker:run:dev`
**Propósito**: Ejecuta el contenedor en modo interactivo para desarrollo y debugging.
```bash
npm run docker:run:dev
# Equivale a: docker run -it -p 3013:3000 --name mi-pagina-dev mi-pagina
```

### Scripts de Gestión de Contenedores

#### `npm run docker:stop`
**Propósito**: Detiene el contenedor en ejecución sin eliminarlo.
```bash
npm run docker:stop
# Equivale a: docker stop mi-pagina-container
```

#### `npm run docker:remove`
**Propósito**: Elimina el contenedor (debe estar detenido previamente).
```bash
npm run docker:remove
# Equivale a: docker rm mi-pagina-container
```

#### `npm run docker:clean`
**Propósito**: Detiene y elimina el contenedor en un solo comando.
```bash
npm run docker:clean
# Equivale a: docker stop mi-pagina-container && docker rm mi-pagina-container
```

#### `npm run docker:rebuild`
**Propósito**: Reconstruye completamente el contenedor (limpia, construye y ejecuta).
```bash
npm run docker:rebuild
# Equivale a: npm run docker:clean && npm run docker:build && npm run docker:run
```

### Scripts de Monitoreo y Debugging

#### `npm run docker:logs`
**Propósito**: Muestra los logs del contenedor.
```bash
npm run docker:logs
# Equivale a: docker logs mi-pagina-container
```

#### `npm run docker:logs:follow`
**Propósito**: Sigue los logs del contenedor en tiempo real.
```bash
npm run docker:logs:follow
# Equivale a: docker logs -f mi-pagina-container
```

#### `npm run docker:shell`
**Propósito**: Accede al shell del contenedor para debugging interno.
```bash
npm run docker:shell
# Equivale a: docker exec -it mi-pagina-container sh
```

### Scripts de Docker Compose

#### `npm run docker:compose:up`
**Propósito**: Inicia todos los servicios definidos en docker-compose.yml.
```bash
npm run docker:compose:up
# Equivale a: docker-compose up -d
```

#### `npm run docker:compose:down`
**Propósito**: Detiene y elimina todos los servicios de Docker Compose.
```bash
npm run docker:compose:down
# Equivale a: docker-compose down
```

#### `npm run docker:compose:logs`
**Propósito**: Muestra logs de todos los servicios de Docker Compose en tiempo real.
```bash
npm run docker:compose:logs
# Equivale a: docker-compose logs -f
```

### Scripts de Mantenimiento

#### `npm run docker:prune`
**Propósito**: Limpia recursos Docker no utilizados (imágenes, contenedores, redes).
```bash
npm run docker:prune
# Equivale a: docker system prune -f
```

### Flujo de Trabajo Recomendado

#### Para Desarrollo:
```bash
# 1. Construir la imagen
npm run docker:build

# 2. Ejecutar en modo desarrollo
npm run docker:run:dev

# 3. Ver logs en tiempo real
npm run docker:logs:follow
```

#### Para Producción:
```bash
# 1. Despliegue completo
npm run deploy:prod

# 2. Ejecutar en background
npm run docker:run

# 3. Verificar estado
npm run docker:logs
```

#### Para Mantenimiento:
```bash
# Reconstruir completamente
npm run docker:rebuild

# Limpiar recursos
npm run docker:prune
```

### Configuración del Contenedor

- **Puerto de la aplicación**: 3000 (interno del contenedor)
- **Puerto expuesto**: 3013 (accesible desde el host)
- **URL de acceso**: http://localhost:3013
- **Imagen base**: Node.js 18 Alpine
- **Usuario**: nextjs (no-root para seguridad)
- **Healthcheck**: Endpoint `/health` cada 30 segundos

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Links

- [React Documentation](https://reactjs.org/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)

---

**Built with ❤️ using modern web technologies**
