# 📘 Friendsoft Web Project - Prompt y Reglas

Este documento guía a una IA o desarrollador senior para construir el sitio web de **Friendsoft** usando React, Vite, TailwindCSS y TypeScript, siguiendo buenas prácticas modernas y con soporte multilenguaje.

---

## 🎯 Objetivo General

Actúa como un desarrollador senior experto en React, Vite, TailwindCSS y TypeScript. Tu objetivo es construir la página web principal de mi empresa: **Friendsoft**, aplicando un enfoque profesional, moderno, escalable y eficiente.

---

## 🌐 Idioma y UX Multilenguaje

- Todo el **código fuente debe estar en inglés**: nombres de variables, funciones, componentes, interfaces y comentarios técnicos.
- Toda la **interfaz, contenido visual y documentación visible al usuario debe estar en español**.
- Implementa configuración de internacionalización con `react-i18next`, estructurando los archivos de traducción en:
  ```
  /src/locales
    ├── en/translation.json
    └── es/translation.json
  ```
- El sitio debe estar preparado para ser bilingüe desde el inicio.

---

## 🧩 Alcance

Desarrollar las siguientes páginas, basadas en los archivos SVG proporcionados:

| Página      | Archivo SVG asociado          |
|-------------|-------------------------------|
| Home        | `home-page-design.svg`        |
| Projects    | `projects-page-design.svg`    |
| Services    | `services-page-design.svg`    |
| Contact Us  | `contact-us-page-design.svg`  |

Cada página debe replicar fielmente la estructura, estilo y contenido visual del diseño SVG.

---

## 🛠️ Requisitos técnicos

### 🔧 Tecnologías base
- **React** como librería principal.
- **Vite** como bundler (creación del proyecto con `npm create vite@latest`).
- **TypeScript** obligatorio con `"strict": true` en `tsconfig.json`.

### 🎨 Estilos
- Usa **TailwindCSS** con los siguientes plugins:
  - `@tailwindcss/forms`
  - `@tailwindcss/typography`
  - `@tailwindcss/aspect-ratio`
- Todo el diseño debe hacerse usando clases utilitarias de TailwindCSS.
- Personaliza `tailwind.config.js` si hay una paleta de colores y tipografías corporativas.

---

## 📂 Estructura del Proyecto

```
/src
  ├── /assets         → Imágenes, íconos y SVG
  ├── /components     → Componentes reutilizables
  ├── /pages          → Rutas/páginas principales
  ├── /layout         → Layout global (Header/Footer)
  ├── /hooks          → Hooks personalizados
  ├── /styles         → Archivos Tailwind y resets
  ├── /locales        → Archivos de traducción
  └── main.tsx        → Entrada principal
```

---

## 🧠 Componentización

- Sigue principios de **reutilización, responsabilidad única y atomic design** si es necesario.
- Usa `clsx` o `classnames` para composición de clases dinámicas.
- Separa componentes por nivel de abstracción (presentacionales vs. contenedores si aplica).

---

## 🌍 Navegación

- Usa `react-router-dom` para el enrutamiento entre páginas.
- Usa un `Layout` principal con `Header` y `Footer` reutilizable.
- Asegura navegación por teclado, uso de etiquetas ARIA y cumplimiento de WCAG.

---

## 🌎 Internacionalización

- Usa `react-i18next` con soporte para al menos `es` y `en`.
- Integra el cambio de idioma desde el layout si es posible.
- Textos visibles deben extraerse del sistema de traducción, no estar hardcoded.

---

## ⚙️ Herramientas recomendadas

- **Animaciones**: `Framer Motion`
- **Formularios**: `React Hook Form` + `Zod` (validación)
- **SEO**: `React Helmet`
- **Íconos**: `Heroicons` o `Lucide-react`
- **Calidad de código**:
  - `ESLint`, `Prettier`, `Husky`, `lint-staged`
- **Pruebas (opcional)**:
  - `Vitest` + `React Testing Library`
- **Storybook** (opcional)

---

## 🚀 Optimización

- Lazy loading en imágenes o secciones pesadas.
- Uso eficiente de imágenes SVG y webp.
- Puntaje alto en Lighthouse (Performance, Accessibility, SEO, Best Practices).

---

## 📈 Escalabilidad futura

- Preparado para conectar con CMS Headless (Sanity, Strapi, Contentful).
- Internacionalización con `react-i18next`.
- Posibilidad de migración a SSR (Next.js) en el futuro.