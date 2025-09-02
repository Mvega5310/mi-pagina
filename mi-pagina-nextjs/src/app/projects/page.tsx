'use client'

import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import SEO from '@/components/SEO'
import Link from 'next/link'
import { generateProjectsData, ProjectData } from '@/utils/projectsDataGenerator'

// Projects Carousel Component
const ProjectsCarousel = ({ projects }: { projects: ProjectData[] }) => {
  const { t } = useTranslation()
  
  // Don't render if no projects
  if (projects.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">{t('projects.noProjects', 'No hay proyectos disponibles')}</p>
      </div>
    )
  }
  
  return (
    <div className="relative">
      {/* Projects Grid - Vertical Layout (all projects displayed) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" role="grid" aria-label={t('projects.gridLabel', 'Portfolio de proyectos')}>
        {projects.map((project, index) => (
          <article
            key={project.id}
            className="group relative bg-white shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 rounded-lg"
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
                  className="w-full h-full object-cover"
                  width="400"
                  height="240"
                  loading={index < 3 ? 'eager' : 'lazy'}
                  decoding={index < 3 ? 'sync' : 'async'}
                />
              </picture>
              
              {/* Overlay with improved contrast - Responsive */}
              <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-85 flex items-center justify-center">
                <div className="text-center text-white p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-xs sm:text-sm mb-3 sm:mb-4 opacity-90 line-clamp-3">{project.shortDescription}</p>
                  <Link 
                    href={`/projects/${project.id}`}
                    className="bg-white text-gray-900 px-4 sm:px-6 py-2 text-sm sm:text-base font-semibold hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded inline-block"
                    aria-label={`${t('projects.viewProject')}: ${project.title}`}
                  >
                    {t('projects.viewProject', 'Discover more')}
                  </Link>
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
              <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">{project.shortDescription}</p>
              
              <div className="mt-3 sm:mt-4">
                <Link 
                  href={`/projects/${project.id}`}
                  className="text-blue-700 text-sm sm:text-base font-semibold hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1 py-1"
                  aria-label={`${t('projects.viewProject')}: ${project.title}`}
                >
                  {t('projects.viewProject', 'Discover more')}
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

const ProjectsPage = () => {
  const { t } = useTranslation()
  
  // Generate projects data from translations
  const projectsData = generateProjectsData(t)

  // Preload critical images for LCP optimization
  useEffect(() => {
    const preloadImages = [
      "/images/projects/section1-imagen1.webp",
      "/images/projects/section1-imagen2.webp",
      "/images/projects/section1-imagen3.webp"
    ]
    
    preloadImages.forEach(src => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = src
      link.type = 'image/webp'
      document.head.appendChild(link)
    })
  }, [])

  // Map images to projects data
  const imageMap = {
    '1': { webp: "/images/projects/section1-imagen1.webp", jpg: "/images/projects/section1-imagen1.jpg" },
    '2': { webp: "/images/projects/section1-imagen2.webp", jpg: "/images/projects/section1-imagen2.jpg" },
    '3': { webp: "/images/projects/section1-imagen3.webp", jpg: "/images/projects/section1-imagen3.jpg" },
    '4': { webp: "/images/projects/section1-imagen4.webp", jpg: "/images/projects/section1-imagen4.jpg" },
    '5': { webp: "/images/projects/section1-imagen5.webp", jpg: "/images/projects/section1-imagen5.jpg" },
    '6': { webp: "/images/projects/section1-imagen6.webp", jpg: "/images/projects/section1-imagen6.jpg" }
  }

  // Combine projects data with images
  const projects = projectsData.map(project => ({
    ...project,
    image: imageMap[project.id as keyof typeof imageMap]?.webp || project.image,
    fallback: imageMap[project.id as keyof typeof imageMap]?.jpg || project.image
  }))

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
        
        {/* Projects Carousel - Responsive */}
        <main>
          <ProjectsCarousel projects={projects} />
        </main>
      </div>
    </div>
  )
}

export default ProjectsPage