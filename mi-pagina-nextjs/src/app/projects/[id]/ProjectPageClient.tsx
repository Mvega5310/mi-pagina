'use client'

import { useTranslation } from 'react-i18next'
import { notFound } from 'next/navigation'
import { getProjectById, getProjectNavigation, getSimilarProjects, ProjectNavigation } from '@/utils/projectsDataGenerator'
import ProjectDetailsClient from './ProjectDetailsClient'
import SEO from '@/components/SEO'
import { useEffect, useState } from 'react'
import { ProjectData } from '@/utils/projectsDataGenerator'

interface ProjectPageClientProps {
  projectId: string
}

export default function ProjectPageClient({ projectId }: ProjectPageClientProps) {
  const { t } = useTranslation()
  const [project, setProject] = useState<ProjectData | null>(null)
  const [similarProjects, setSimilarProjects] = useState<ProjectData[]>([])
  const [projectNavigation, setProjectNavigation] = useState<ProjectNavigation>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (t) {
      const projectData = getProjectById(projectId, t)
      if (!projectData) {
        notFound()
        return
      }

      const similarProjectsData = getSimilarProjects(projectId, t)
      const projectNavigationData = getProjectNavigation(projectId, t)

      setProject(projectData)
      setSimilarProjects(similarProjectsData)
      setProjectNavigation(projectNavigationData)
      setLoading(false)
    }
  }, [projectId, t])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">{t('common.loading', 'Cargando...')}</div>
      </div>
    )
  }

  if (!project) {
    notFound()
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
      <ProjectDetailsClient
        project={project}
        similarProjects={similarProjects}
        projectNavigation={projectNavigation}
      />
    </>
  )
}