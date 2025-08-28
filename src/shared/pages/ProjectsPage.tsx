import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import projectsData from '../data/projectsData.json'
import p1w from '../../assets/images/projects/section1-imagen1.webp'
import p1j from '../../assets/images/projects/section1-imagen1.jpg'
import p2w from '../../assets/images/projects/section1-imagen2.webp'
import p2j from '../../assets/images/projects/section1-imagen2.jpg'
import p3w from '../../assets/images/projects/section1-imagen3.webp'
import p3j from '../../assets/images/projects/section1-imagen3.jpg'
import p4w from '../../assets/images/projects/section1-imagen4.webp'
import p4j from '../../assets/images/projects/section1-imagen4.jpg'
import p5w from '../../assets/images/projects/section1-imagen5.webp'
import p5j from '../../assets/images/projects/section1-imagen5.jpg'
import p6w from '../../assets/images/projects/section1-imagen6.webp'
import p6j from '../../assets/images/projects/section1-imagen6.jpg'

const ProjectsPage = () => {
  const { t } = useTranslation()

  // Preload critical images for LCP optimization
  useEffect(() => {
    const preloadImages = [
      p1w,
      p2w,
      p3w
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
    '1': { webp: p1w, jpg: p1j },
    '2': { webp: p2w, jpg: p2j },
    '3': { webp: p3w, jpg: p3j },
    '4': { webp: p4w, jpg: p4j },
    '5': { webp: p5w, jpg: p5j },
    '6': { webp: p6w, jpg: p6j }
  }

  // Combine projects data with images
  const projects = projectsData.map(project => ({
    ...project,
    image: imageMap[project.id as keyof typeof imageMap]?.webp || project.image,
    fallback: imageMap[project.id as keyof typeof imageMap]?.jpg || project.image
  }))

  return (
    <>
      <SEO 
        title={t('seo.projects.title', 'Portfolio de Proyectos | Friendsoft')}
        description={t('seo.projects.description', 'Explora nuestro portfolio de proyectos exitosos en desarrollo de software, aplicaciones web y móviles. Casos de éxito y soluciones innovadoras.')}
        keywords={t('seo.projects.keywords', 'portfolio proyectos, casos éxito, desarrollo software, aplicaciones web, aplicaciones móviles, soluciones tecnológicas')}
        type="website"
        image={p1w}
        url="/projects"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        
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
                  <p className="text-xs sm:text-sm mb-3 sm:mb-4 opacity-90 line-clamp-3">{project.shortDescription}</p>
                  <Link 
                    to={`/projects/${project.id}`}
                    className="bg-white text-gray-900 px-4 sm:px-6 py-2 text-sm sm:text-base font-semibold hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded inline-block"
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
                  to={`/projects/${project.id}`}
                  className="text-blue-700 text-sm sm:text-base font-semibold hover:text-blue-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1 py-1"
                  aria-label={`${t('projects.viewProject')}: ${project.title}`}
                >
                  {t('projects.viewProject', 'Discover more')}
                </Link>
              </div>
            </div>
          </article>
            ))}
          </div>
        </main>
      </div>
    </>
  )
}

export default ProjectsPage