import { Metadata } from 'next'
import { getProjectById, PROJECT_IDS } from '@/utils/projectsDataGenerator'
import ProjectPageClient from './ProjectPageClient'
import { TFunction } from 'i18next'

// Mock translation function for SSG that implements TFunction interface
const mockTranslation = ((key: string, defaultValue?: string) => {
  return defaultValue || key.split('.').pop() || key
}) as TFunction

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return PROJECT_IDS.map((id) => ({
    id,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const project = getProjectById(id, mockTranslation)

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.'
    }
  }

  return {
    title: `${project.title} | Portfolio de Proyectos | Friendsoft`,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: [project.image],
    },
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params

  // Verify project exists for SSG
  const project = getProjectById(id, mockTranslation)
  if (!project) {
    return <div>Project not found</div>
  }

  return <ProjectPageClient projectId={id} />
}