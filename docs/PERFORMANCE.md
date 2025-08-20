# Performance Optimization Guide

Este documento describe las herramientas y procesos de optimización de rendimiento implementados en el proyecto.

## 🎯 Objetivos de Rendimiento

- **Lighthouse Performance Score**: ≥ 98%
- **Lighthouse Accessibility Score**: ≥ 95%
- **Lighthouse Best Practices Score**: ≥ 95%
- **Lighthouse SEO Score**: ≥ 95%
- **Bundle Size Total**: ≤ 600KB
- **Chunk Size Individual**: ≤ 200KB
- **First Contentful Paint (FCP)**: ≤ 1.8s
- **Largest Contentful Paint (LCP)**: ≤ 2.5s
- **Cumulative Layout Shift (CLS)**: ≤ 0.1

## 🛠️ Scripts Disponibles

### Scripts de Análisis

```bash
# Análisis completo de rendimiento local
npm run performance:local

# Análisis del tamaño del bundle
npm run analyze:bundle

# Optimización de importaciones
npm run optimize:imports
```

### Scripts de Lighthouse CI

```bash
# Ejecutar Lighthouse CI completo
npm run lighthouse

# Solo recolectar métricas
npm run lighthouse:collect

# Solo verificar aserciones
npm run lighthouse:assert

# Subir resultados
npm run lighthouse:upload

# Verificación completa (build + lighthouse)
npm run performance:check
```

## 📊 Herramientas de Análisis

### 1. Bundle Analyzer (`scripts/analyze-bundle.js`)

**Funcionalidades:**
- Análisis del tamaño total del bundle
- Identificación de dependencias no utilizadas
- Recomendaciones de optimización
- Detección de chunks grandes

**Uso:**
```bash
npm run analyze:bundle
```

**Salida esperada:**
- Tamaño total del bundle
- Desglose por tipo de archivo (JS/CSS)
- Lista de dependencias no utilizadas
- Recomendaciones específicas

### 2. Import Optimizer (`scripts/optimize-imports.js`)

**Funcionalidades:**
- Detección de importaciones no utilizadas
- Análisis de importaciones grandes
- Verificación de tree shaking
- Sugerencias de optimización

**Uso:**
```bash
npm run optimize:imports
```

**Optimizaciones detectadas:**
- Importaciones de React no utilizadas
- Importaciones grandes de librerías (ej: Heroicons)
- Tipos TypeScript no utilizados
- Importaciones de desarrollo en producción

### 3. Performance Checker (`scripts/performance-check.js`)

**Funcionalidades:**
- Verificación completa de rendimiento
- Análisis de bundle size con thresholds
- Integración con Lighthouse CI
- Generación de reportes detallados

**Uso:**
```bash
npm run performance:local
```

**Métricas verificadas:**
- Tamaño total del bundle vs. presupuesto
- Tamaño individual de chunks
- Scores de Lighthouse
- Recomendaciones de optimización

## ⚙️ Configuración de Lighthouse CI

### Archivo de Configuración (`lighthouserc.js`)

```javascript
module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3000', 'http://localhost:3000/about'],
      startServerCommand: 'npm run preview:ssr',
      numberOfRuns: 3
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.98 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        // ... más aserciones
      }
    }
  }
};
```

### GitHub Actions Workflow

El workflow `.github/workflows/lighthouse-ci.yml` ejecuta automáticamente:

1. **Lighthouse CI** en múltiples versiones de Node.js
2. **Bundle Analysis** para verificar el tamaño
3. **Performance Budget Check** con límites estrictos
4. **Artifact Upload** para revisar resultados

## 🚀 Optimizaciones Implementadas

### 1. Configuración de Vite

- **Tree Shaking**: Habilitado para eliminar código no utilizado
- **Code Splitting**: Chunks separados para vendors y componentes
- **Minificación**: Terser con configuración optimizada
- **Preload**: Recursos críticos precargados
- **Caché**: Headers de caché optimizados

### 2. Optimización de Imágenes

- **Formato WebP**: Conversión automática de imágenes
- **Lazy Loading**: Carga diferida de imágenes no críticas
- **Responsive Images**: Múltiples tamaños para diferentes dispositivos
- **Optimización**: Compresión sin pérdida de calidad

### 3. Lazy Loading de Componentes

```javascript
// Ejemplo de lazy loading
const MapComponent = lazy(() => import('./components/MapComponent'));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <MapComponent />
    </Suspense>
  );
}
```

### 4. Optimización de Dependencias

- **Eliminación**: Dependencias no utilizadas removidas
- **Tree Shaking**: Importaciones específicas en lugar de librerías completas
- **Bundle Splitting**: Separación de vendors y código de aplicación

## 📈 Monitoreo Continuo

### CI/CD Integration

1. **Pre-commit Hooks**: Verificación de bundle size
2. **Pull Request Checks**: Lighthouse CI automático
3. **Performance Budget**: Límites estrictos en CI
4. **Alertas**: Notificaciones cuando se exceden límites

### Métricas Clave

- **Core Web Vitals**: LCP, FID, CLS
- **Bundle Size**: Tamaño total y por chunks
- **Lighthouse Scores**: Performance, Accessibility, SEO
- **Load Times**: FCP, TTI, Speed Index

## 🔧 Troubleshooting

### Problemas Comunes

1. **Bundle Size Excedido**
   ```bash
   npm run analyze:bundle
   # Revisar dependencias no utilizadas
   # Implementar code splitting adicional
   ```

2. **Lighthouse Score Bajo**
   ```bash
   npm run lighthouse:collect
   # Revisar métricas específicas
   # Optimizar recursos críticos
   ```

3. **Importaciones No Optimizadas**
   ```bash
   npm run optimize:imports
   # Eliminar importaciones no utilizadas
   # Usar importaciones específicas
   ```

### Comandos de Diagnóstico

```bash
# Verificación completa
npm run performance:local

# Solo análisis de bundle
npm run analyze:bundle

# Solo optimización de imports
npm run optimize:imports

# Lighthouse con servidor local
npm run preview:ssr & npm run lighthouse
```

## 📚 Recursos Adicionales

- [Web Vitals](https://web.dev/vitals/)
- [Lighthouse CI Documentation](https://github.com/GoogleChrome/lighthouse-ci)
- [Vite Performance Guide](https://vitejs.dev/guide/performance.html)
- [React Performance Optimization](https://react.dev/learn/render-and-commit)

---

**Nota**: Este documento se actualiza automáticamente con cada optimización implementada. Para sugerencias o mejoras, crear un issue en el repositorio.