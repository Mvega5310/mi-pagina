import { getProjectById, getSimilarProjects } from '@/utils/projectsDataGenerator'
import React from 'react'
import ProjectDetailsClient from './ProjectDetailsClient'
import { useTranslation } from 'react-i18next'
import SEO from '@/components/SEO'

interface ProjectDetailsProps {
  params: { id: string }
}


const ProjectDetails = async ({ params }: ProjectDetailsProps) => {
  const { id } = await params
  const { t } = useTranslation()
  const project = getProjectById(id, t)
  const similarProjects = getSimilarProjects(id, t)

  const translations = {
    home: t('common.home', 'Inicio'),
    projects: t('common.projects', 'Proyectos'),
    description: t('projectDetails.description', 'Descripción del Proyecto'),
    results: t('projectDetails.results', 'Resultados del Proyecto'),
    category: t('projectDetails.category', 'Categoría'),
    client: t('projectDetails.client', 'Cliente'),
    services: t('projectDetails.services', 'Servicios'),
    relatedProject: t('projectDetails.relatedProject', 'Proyecto Relacionado'),
    similarProjects: t('projectDetails.similarProjects', 'Proyectos Similares'),
    backToProjects: t('projectDetails.backToProjects', 'Volver a Proyectos')
  }

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title={`${project.title} | ${t('seo.projects.title', 'Portfolio de Proyectos | Friendsoft')}`}
        description={project.shortDescription}
        keywords={`${project.category}, ${project.client}, ${project.services.join(', ')}, proyecto, caso de éxito`}
        type="article"
        image={project.image}
        url={`/projects/${project.id}`}
      />
      <ProjectDetailsClient
        project={project}
        similarProjects={similarProjects}
        translations={translations}
      />
    </div>
  )
}

// // Generate static params for all project IDs
// export async function generateStaticParams() {
//   return PROJECT_IDS.map((id) => ({
//     id: id,
//   }))
// }

export default ProjectDetails