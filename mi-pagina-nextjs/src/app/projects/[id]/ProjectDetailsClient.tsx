'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { ProjectData } from '@/utils/projectsDataGenerator'

interface ProjectDetailsClientProps {
  project: ProjectData | null
  similarProjects: ProjectData[]
  translations: {
    home: string
    projects: string
    description: string
    results: string
    category: string
    client: string
    services: string
    relatedProject: string
    similarProjects: string
    backToProjects: string
  }
}

const ProjectDetailsClient = ({ project, similarProjects, translations }: ProjectDetailsClientProps) => {
  const router = useRouter()

  // Redirect to projects page if project not found
  useEffect(() => {
    if (!project) {
      router.replace('/projects')
    }
  }, [project, router])

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      {/* Breadcrumb Navigation */}
      <nav className="flex mb-8" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-3a1 1 0 011-1h2a1 1 0 011 1v3a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              {translations.home}
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
              </svg>
              <Link href="/projects" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2">
                {translations.projects}
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
              </svg>
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">{project.title}</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Project Header */}
      <div className="mb-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div className="lg:w-2/3">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              {project.shortDescription}
            </p>
          </div>
        </div>

        {/* Project Image */}
        <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg mb-8">
          <picture>
            <source srcSet={project.image} type="image/webp" />
            <img 
              src={project.fallback} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </picture>
        </div>
      </div>

      {/* Project Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Project Info */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {translations.description}
            </h2>
            <div className="prose prose-lg text-gray-700" dangerouslySetInnerHTML={{ __html: project.longDescription }} />
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {translations.results}
            </h2>
            <div className="prose prose-lg text-gray-700" dangerouslySetInnerHTML={{ __html: project.results }} />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {translations.category}
            </h3>
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${project.color || 'bg-blue-100 text-blue-600'}`}>
              {project.category}
            </span>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {translations.client}
            </h3>
            <p className="text-gray-700">{project.client}</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {translations.services}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.services.map((service: string, index: number) => (
                <span key={index} className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Children Project */}
      {project.children && (
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {translations.relatedProject}
          </h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={project.children.image} 
                  alt={project.children.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6">
                <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {project.children.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {project.children.title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Similar Projects */}
      {similarProjects.length > 0 && (
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {translations.similarProjects}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {similarProjects.map((similarProject) => (
              <div key={similarProject.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <Link href={`/projects/${similarProject.id}`}>
                  <img 
                    src={similarProject.image} 
                    alt={similarProject.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${similarProject.color || 'bg-blue-100 text-blue-600'}`}>
                      {similarProject.category}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {similarProject.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {similarProject.shortDescription}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Back to Projects Button */}
      <div className="text-center">
        <Link 
          href="/projects"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {translations.backToProjects}
        </Link>
      </div>
    </div>
  )
}

export default ProjectDetailsClient