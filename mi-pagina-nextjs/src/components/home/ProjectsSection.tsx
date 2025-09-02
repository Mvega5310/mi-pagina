'use client'

import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/navigation'
import { generateProjectsData } from '@/utils/projectsDataGenerator';
import { TFunction } from 'i18next';
import Image from 'next/image'

// Image mapping for projects
const projectImages = ["/images/home/section5-image1.jpg", "/images/home/section5-image2.jpg", "/images/home/section5-image3.jpg", "/images/home/section5-image4.jpg"];
// Transform translation data to component format - showing project data
const transformProjectsData = (t: TFunction) => {
  const projectsData = generateProjectsData(t);

  return projectsData.map((project, index) => {
    return {
      id: project.id,
      title: project.title,
      category: project.category,
      image: project.image || projectImages[index % projectImages.length],
      categoryColor: project?.color || 'bg-gray-100 text-gray-600'
    };
  });
};

// Projects Carousel Component
const ProjectsCarousel = () => {
  const { t } = useTranslation()
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mobileActiveTab, setMobileActiveTab] = useState(0);

  // Get projects data with translations
  const projectsData = transformProjectsData(t);

  // Handle project click navigation
  const handleProjectClick = (projectId: string) => {
    // Navigate to project detail page using Next.js router
    console.log('projectId', projectId)
    router.push(`/projects/${projectId}`);
  };

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const goToNext = () => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrentPage((prev) => (prev + 1) % 3);
      setTimeout(() => setIsTransitioning(false), 300);
    };

    const interval = setInterval(() => {
      goToNext();
    }, 5000); // Change page every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, isTransitioning]);

  // Get projects for current page (4 projects per page)
  const getCurrentPageProjects = () => {
    const startIndex = currentPage * 4;
    return projectsData.slice(startIndex, startIndex + 4);
  };

  // Navigation functions with smooth transitions
  const goToPage = (pageIndex: number) => {
    if (isTransitioning || pageIndex === currentPage) return;
    setIsTransitioning(true);
    setCurrentPage(pageIndex);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  // Mobile tab navigation
  const handleMobileTabClick = (tabIndex: number) => {
    setMobileActiveTab(tabIndex);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Mobile View - Single Image with Tabs */}
      <div className="block sm:hidden mb-8">
        {/* Mobile Tabs */}
        <div className="flex justify-center mb-4 bg-gray-100 rounded-lg p-1 mx-4">
          {getCurrentPageProjects().map((project, index) => (
            <button
              key={project.id}
              onClick={() => handleMobileTabClick(index)}
              className={`flex-1 py-2 px-3 text-xs font-medium rounded-md transition-all duration-200 ${mobileActiveTab === index
                ? 'bg-white text-[#7B43D6] shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              {project.category}
            </button>
          ))}
        </div>

        {/* Mobile Single Project Display */}
        {getCurrentPageProjects()[mobileActiveTab] && (
          <div className="px-4">
            <div
              className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-1"
              onClick={() => handleProjectClick(getCurrentPageProjects()[mobileActiveTab].id)}
            >
              <div className="relative overflow-hidden shadow-lg bg-white rounded-lg">
                <Image
                  src={getCurrentPageProjects()[mobileActiveTab].image}
                  alt={getCurrentPageProjects()[mobileActiveTab].title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  width={400}
                  height={256}
                  loading="lazy"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-white p-4 mx-2 mb-2">
                  <span className={`inline-block ${getCurrentPageProjects()[mobileActiveTab].categoryColor} text-xs font-semibold px-3 py-1 mb-3 uppercase tracking-wide rounded-full`}>
                    {getCurrentPageProjects()[mobileActiveTab].category}
                  </span>
                  <h3 className="text-gray-900 font-bold text-lg leading-tight group-hover:text-[#7B43D6] transition-colors duration-300">
                    {getCurrentPageProjects()[mobileActiveTab].title}
                  </h3>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Tablet and Desktop View - Original Grid */}
      <div className={`hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12 transition-all duration-300 ${isTransitioning ? 'opacity-75 scale-95' : 'opacity-100 scale-100'
        }`}>
        {getCurrentPageProjects().map((project) => (
          <div
            key={project.id}
            className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2"
            onClick={() => handleProjectClick(project.id)}
          >
            {/* Project Card with Image and Text Overlay */}
            <div className="relative overflow-hidden shadow-lg bg-white rounded-lg">
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-64 sm:h-72 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                width={400}
                height={256}
                loading="lazy"
              />

              {/* Text Content Inside Card - Responsive */}
              <div className="absolute bottom-0 left-0 right-0 bg-white p-3 sm:p-4 lg:p-6 mx-1 sm:mx-2 mb-1 sm:mb-2">
                <span className={`inline-block ${project.categoryColor} text-xs font-semibold px-2 sm:px-3 py-1 mb-2 sm:mb-3 uppercase tracking-wide rounded-full`}>
                  {project.category}
                </span>
                <h3 className="text-gray-900 font-bold text-base sm:text-lg lg:text-xl leading-tight group-hover:text-[#7B43D6] transition-colors duration-300">
                  {project.title}
                </h3>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls - Only Dots */}
      <div className="flex flex-col items-center space-y-4">
        {/* Page Dots */}
        <div className="flex justify-center space-x-3">
          {[0, 1, 2].map((pageIndex) => (
            <button
              key={pageIndex}
              onClick={() => {
                goToPage(pageIndex);
                // Reset mobile tab when changing page
                setMobileActiveTab(0);
              }}
              disabled={isTransitioning}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${pageIndex === currentPage
                ? 'bg-[#7B43D6] scale-125'
                : 'bg-[#A8A8B8] hover:bg-[#8B8B9A] hover:scale-110'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              aria-label={`Go to page ${pageIndex + 1}`}
            />
          ))}
        </div>

        {/* Page Indicator */}
        <div className="text-sm text-gray-500 font-medium">
          {t(`home.section5.page`)} {currentPage + 1}  {t(`home.section5.of`)} 3
        </div>
      </div>
    </div>
  )
}

const ProjectsSection = () => {
  const { t } = useTranslation()

  return (
    <section className="bg-transparent py-8 sm:py-12 pt-2 sm:pt-4 px-4 sm:px-6 lg:px-8 relative z-[1]">
      <div className="max-w-7xl mx-auto">
        {/* Header - Responsive */}
        <div className="text-center lg:text-left mb-8 sm:mb-12 lg:mb-16">
          {/* Subtitle */}
          <p className="text-[#7B43D6] text-xs sm:text-sm font-bold mb-3 sm:mb-4 uppercase tracking-wide">
            {t('home.section5.subtitle')}
          </p>

          {/* Title and Description */}
          <div className="max-w-4xl lg:max-w-none">
            <h2 className="text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl font-bold text-gray-900 leading-tight mb-4 sm:!mb-6">
              {t('home.section5.title')}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto lg:mx-0">
              {t('home.section5.description')}
            </p>
          </div>
        </div>

        {/* Projects Carousel */}
        <ProjectsCarousel />
      </div>
    </section>
  )
}

export default ProjectsSection