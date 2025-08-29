import React, { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import SEO from '../components/SEO'
import { getProjectById, getSimilarProjects } from '../utils/projectsDataGenerator'

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { t } = useTranslation()

  // Get project data from translations
  const project = id ? getProjectById(id, t) : null
  
  // Get similar projects from translations
  const similarProjects = id ? getSimilarProjects(id, t) : []

  // Redirect to projects page if project not found
  useEffect(() => {
    if (!project) {
      navigate('/projects', { replace: true })
    }
  }, [project, navigate])

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <>
      <SEO 
        title={`${project.title} | ${t('seo.projects.title', 'Portfolio de Proyectos | Friendsoft')}`}
        description={project.shortDescription}
        keywords={`${project.category}, ${project.client}, ${project.services.join(', ')}, proyecto, caso de éxito`}
        type="article"
        image={project.image}
        url={`/projects/${project.id}`}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
       
        {/* Breadcrumb Navigation */}
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link 
                to="/projects" 
                className="hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1 py-1"
              >
                {t('projects.title', 'Proyectos')}
              </Link>
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mx-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-900 font-medium">{project.title}</span>
            </li>
          </ol>
        </nav>

        {/* Project Header */}
        <header className="mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {project.title}
          </h1>
          
          {/* Project Image */}
          <div className="relative overflow-hidden rounded-lg shadow-lg mb-8">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 sm:h-80 lg:h-96 object-cover"
              width="1200"
              height="600"
              loading="eager"
            />
          </div>

          {/* Project Info Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  {t('projectDetails.category', 'Categoría')}
                </h3>
                <p className="text-lg font-medium text-gray-900">{project.category}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  {t('projectDetails.client', 'Cliente')}
                </h3>
                <p className="text-lg font-medium text-gray-900">{project.client}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  {t('projectDetails.services', 'Servicios')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service: any, index: any) => (
                    <span 
                      key={index}
                      className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Project Description */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            {t('home.projectDetailGeneral.description')}
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed text-lg">
              {project.longDescription}
            </p>
          </div>
        </section>

        {/* Project Results */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            {t('projectDetails.results', 'Resultados del Proyecto')}
          </h2>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 sm:p-8">
            <p className="text-gray-800 leading-relaxed text-lg font-medium">
              {project.results}
            </p>
          </div>
        </section>

        {/* Similar Projects */}
        {similarProjects.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
              {t('projectDetails.similarProjects', 'Proyectos Similares')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarProjects.map((similarProject) => (
                <Link
                  key={similarProject.id}
                  to={`/projects/${similarProject.id}`}
                  className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={similarProject.image}
                      alt={similarProject.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      width="400"
                      height="192"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-blue-700 text-white px-2 py-1 text-xs font-semibold rounded shadow-sm">
                        {similarProject.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                      {similarProject.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {similarProject.shortDescription}
                    </p>
                    <div className="mt-3">
                      <span className="text-blue-600 text-sm font-semibold group-hover:text-blue-700 transition-colors duration-200">
                        {t('projects.viewProject', 'Ver proyecto')} →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Back to Projects Button */}
        <div className="text-center">
          <Link
            to="/projects"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t('projectDetails.backToProjects', 'Volver a Proyectos')}
          </Link>
        </div>
      </div>
    </>
  )
}

export default ProjectDetails