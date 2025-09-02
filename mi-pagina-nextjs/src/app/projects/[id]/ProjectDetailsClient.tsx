'use client'

import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import { ProjectData, ProjectNavigation } from '@/utils/projectsDataGenerator'

interface ProjectDetailsClientProps {
  project: ProjectData
  similarProjects: ProjectData[]
  projectNavigation?: ProjectNavigation
}

const ProjectDetailsClient = ({ project, similarProjects, projectNavigation }: ProjectDetailsClientProps) => {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">

        {/* Breadcrumb Navigation */}
        {/* <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link
                href="/projects"
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
        </nav> */}

        {/* Project Header */}
        <header className="relative mb-36">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {project.title}
          </h1>

          {/* Project Image */}
          <div className="relative overflow-hidden rounded-lg shadow-lg mb-8">
            <Image
              src={project.coverImage}
              alt={project.title}
              className="w-full h-64 sm:h-80 lg:h-96 object-cover"
              width={1200}
              height={600}
              loading="eager"
            />
          </div>

          {/* Project Info Card */}
          <div className="absolute top-4/6 w-full bg-transparent p-8 sm:p-4 mb-8">
            <div className="bg-white shadow-lg  p-4 grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
              <div className="relative md:pr-6 flex flex-col justify-center md:items-center">
                <div className='flex flex-col'>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    {t('projects.projectDetailGeneral.client')}
                  </h3>
                  <p className="text-lg font-medium text-gray-900">{project.client}</p></div>
                <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-12 w-px bg-gray-200"></div>
              </div>
              <div className="relative md:pr-6 flex flex-col justify-center md:items-center">
                <div className='flex flex-col'>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    {t('projects.projectDetailGeneral.category')}
                  </h3>
                  <p className="text-lg font-medium text-gray-900">{project.category}</p>
                </div>

                <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-12 w-px bg-gray-200"></div>
              </div>
              <div className="relative md:pr-6 flex flex-col justify-center md:items-center">
                <div className='flex flex-col'>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    {t('projects.projectDetailGeneral.services')}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service: string, index: number) => (
                      <p key={index} className="text-lg font-medium text-gray-900">
                        {service}{index < project.services.length - 1 ? ',' : ''}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-12 w-px bg-gray-200"></div>
              </div>
              <div className="flex flex-col justify-center md:items-center">
                <div className='flex flex-col'>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    {t('projects.projectDetailGeneral.web')}
                  </h3>
                </div>

                <p className="text-lg font-medium text-gray-900">{project.web}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Project Description */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            {t('projects.projectDetailGeneral.description')}
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed text-lg">
              {project.longDescription}
            </p>
          </div>
        </section>

        {/* Project Results */}
        <section className="flex flex-col gap-4 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-1">
            {t('projects.projectDetailGeneral.description')}
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            {project.shortDescription}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                  width={400}
                  height={256}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Features List */}
            <div className="order-1 lg:order-2">
              <ul className="space-y-4">
                {project.scopes.map((scope: string, index: number) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-2 h-2 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 leading-relaxed">
                      {scope}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

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

        {/* Service Navigation */}
        <section className="mb-12 py-8 border-y-2 border-gray-200">
          <div className="flex justify-between items-center">
            {/* Previous Service */}
            <div className="flex items-center">
              {projectNavigation?.previous?.id ? (
                <Link href={`/projects/${projectNavigation.previous.id}`}>
                  <div className="flex items-center space-x-4 group cursor-pointer">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-200 bg-[#F7F7F9] hover:bg-blue-50">
                      <svg className="w-6 h-6 transition-colors duration-200" fill="none" stroke="#6653E8" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-500 mb-1">{t('projects.projectDetailGeneral.previous')}</span>
                      <span className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                        {projectNavigation.previous.title}
                      </span>
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="invisible flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full">
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm mb-1">{t('projects.projectDetailGeneral.previous')}</span>
                    <span className="text-lg font-semibold">
                      Placeholder
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Next Service */}
            <div className="flex items-center">
              {projectNavigation?.next?.id ? (
                <Link href={`/projects/${projectNavigation.next.id}`}>
                  <div className="flex items-center space-x-4 group cursor-pointer">
                    <div className="flex flex-col text-right">
                      <span className="text-sm text-gray-500 mb-1">{t('projects.projectDetailGeneral.next')}</span>
                      <span className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                        {projectNavigation.next.title}
                      </span>
                    </div>
                    <div className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-200 bg-[#F7F7F9] hover:bg-blue-50">
                      <svg className="w-6 h-6 transition-colors duration-200" fill="none" stroke="#6653E8" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="invisible flex items-center space-x-4">
                  <div className="flex flex-col text-right">
                    <span className="text-sm mb-1">{t('projects.projectDetailGeneral.next')}</span>
                    <span className="text-lg font-semibold">
                      Placeholder
                    </span>
                  </div>
                  <div className="w-16 h-16 rounded-full">
                  </div>
                </div>
              )}
            </div>
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
                  href={`/projects/${similarProject.id}`}
                  className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={similarProject.image}
                      alt={similarProject.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      width={400}
                      height={192}
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
        {/* <div className="text-center">
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t('projectDetails.backToProjects', 'Volver a Proyectos')}
          </Link>
        </div> */}
      </div>
    </div>
  )
}

export default ProjectDetailsClient