'use client'

import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import SEO from '@/components/SEO'

const ProjectsPage = () => {
  const { t } = useTranslation()

  const projects = [
    {
      id: 1,
      image: '/images/projects/section1-imagen1.webp',
      fallback: '/images/projects/section1-imagen1.jpg',
      category: t('projects.categories.technology'),
      title: t('projects.items.project1.title'),
      description: t('projects.items.project1.description')
    },
    {
      id: 2,
      image: '/images/projects/section1-imagen2.webp',
      fallback: '/images/projects/section1-imagen2.jpg',
      category: t('projects.categories.development'),
      title: t('projects.items.project2.title'),
      description: t('projects.items.project2.description')
    },
    {
      id: 3,
      image: '/images/projects/section1-imagen3.webp',
      fallback: '/images/projects/section1-imagen3.jpg',
      category: t('projects.categories.solution'),
      title: t('projects.items.project3.title'),
      description: t('projects.items.project3.description')
    },
    {
      id: 4,
      image: '/images/projects/section1-imagen4.webp',
      fallback: '/images/projects/section1-imagen4.jpg',
      category: t('projects.categories.design'),
      title: t('projects.items.project4.title'),
      description: t('projects.items.project4.description')
    },
    {
      id: 5,
      image: '/images/projects/section1-imagen5.webp',
      fallback: '/images/projects/section1-imagen5.jpg',
      category: t('projects.categories.technology'),
      title: t('projects.items.project5.title'),
      description: t('projects.items.project5.description')
    },
    {
      id: 6,
      image: '/images/projects/section1-imagen6.webp',
      fallback: '/images/projects/section1-imagen6.jpg',
      category: t('projects.categories.ideas'),
      title: t('projects.items.project6.title'),
      description: t('projects.items.project6.description')
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title={t('seo.projects.title', 'Portfolio de Proyectos | Friendsoft')}
        description={t('seo.projects.description', 'Explora nuestro portfolio de proyectos exitosos en desarrollo de software, aplicaciones web y móviles. Casos de éxito y soluciones innovadoras.')}
        keywords={t('seo.projects.keywords', 'portfolio proyectos, casos éxito, desarrollo software, aplicaciones web, aplicaciones móviles, soluciones tecnológicas')}
        type="website"
        image={'/images/projects/section1-imagen1.webp'}
        url="/projects"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Page Header */}
        <header className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('projects.title', 'Nuestros Proyectos')}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('projects.subtitle', 'Descubre nuestro portfolio de proyectos exitosos y soluciones innovadoras.')}
          </p>
        </header>

        {/* Projects Grid - Responsive */}
        <main>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" role="grid" aria-label={t('projects.gridLabel', 'Portfolio de proyectos')}>
            {projects.map((project, index) => (
              <article
                key={project.id}
                className="group relative bg-white shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 rounded-lg"
                role="gridcell"
                aria-labelledby={`project-title-${project.id}`}
              >
                {/* Project Image - Responsive with explicit dimensions */}
                <div className="relative overflow-hidden" style={{ height: '240px' }}>
                  <picture>
                    <source srcSet={project.image} type="image/webp" />
                    <img
                      src={project.fallback}
                      alt={`${project.title} - ${project.category}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      width="400"
                      height="240"
                      loading={index < 3 ? 'eager' : 'lazy'}
                      decoding={index < 3 ? 'sync' : 'async'}
                    />
                  </picture>

                  {/* Overlay with improved contrast - Responsive */}
                  <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-85 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-xs sm:text-sm mb-3 sm:mb-4 opacity-90 line-clamp-3">{project.description}</p>
                      <button
                        className="bg-white text-gray-900 px-4 sm:px-6 py-2 text-sm sm:text-base font-semibold hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                        aria-label={`${t('projects.viewProject')}: ${project.title}`}
                        type="button"
                      >
                        {t('projects.viewProject')}
                      </button>
                    </div>
                  </div>

                  {/* Category Badge - Responsive with better contrast */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <span className="bg-blue-700 text-white px-2 sm:px-3 py-1 text-xs font-semibold rounded shadow-sm" role="badge" aria-label={`Categoría: ${project.category}`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Info - Responsive */}
                <div className="p-4 sm:p-6">
                  <div className="mb-2">
                    <span className="text-blue-700 text-xs sm:text-sm font-semibold">{project.category}</span>
                  </div>
                  <h2 id={`project-title-${project.id}`} className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-2">{project.title}</h2>
                  <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">{project.description}</p>

                  <div className="mt-3 sm:mt-4">
                    <button
                      className="text-blue-700 text-sm sm:text-base font-semibold hover:text-blue-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1 py-1"
                      aria-label={`${t('projects.viewProject')}: ${project.title}`}
                      type="button"
                    >
                      {t('projects.viewProject')}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

export default ProjectsPage