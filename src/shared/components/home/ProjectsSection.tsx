import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { generateProjectsData } from '../../utils/projectsDataGenerator';
import p1 from '../../../assets/images/home/section5-image1.jpg';
import p2 from '../../../assets/images/home/section5-image2.jpg';
import p3 from '../../../assets/images/home/section5-image3.jpg';
import p4 from '../../../assets/images/home/section5-image4.jpg';

// Color mapping for different categories
const categoryColors: { [key: string]: string } = {
  'Diseño': 'bg-blue-100 text-blue-600',
  'Ideas': 'bg-green-100 text-green-600',
  'Soluciones': 'bg-purple-100 text-purple-600',
  'Tecnología': 'bg-orange-100 text-orange-600',
  'Desarrollo': 'bg-red-100 text-red-600',
  'Innovación': 'bg-indigo-100 text-indigo-600',
  'Estrategia': 'bg-pink-100 text-pink-600',
  'Seguridad': 'bg-yellow-100 text-yellow-600',
  'Análisis': 'bg-teal-100 text-teal-600',
  'Móvil': 'bg-cyan-100 text-cyan-600',
  'Web': 'bg-emerald-100 text-emerald-600',
  'Automatización': 'bg-rose-100 text-rose-600'
};

// Image mapping for projects
const projectImages = [p1, p2, p3, p4];
// Transform translation data to component format - showing project data
const transformProjectsData = (t: any) => {
  const projectsData = generateProjectsData(t);
  
  return projectsData.map((project, index) => {
    return {
      id: project.id,
      title: project.title,
      category: project.category,
      image: project.image || projectImages[index % projectImages.length],
      categoryColor: categoryColors[project.category ?? ''] || 'bg-gray-100 text-gray-600'
    };
  });
};

// Projects Carousel Component
const ProjectsCarousel = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Get projects data with translations
  const projectsData = transformProjectsData(t);

  // Handle project click navigation
  const handleProjectClick = (projectId: string) => {
    // Navigate to project detail page using the project ID
    navigate(`/projects/${projectId}`);
  };

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      goToNextPage();
    }, 5000); // Change page every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentPage]);

  // Get projects for current page (4 projects per page)
  const getCurrentPageProjects = () => {
    const startIndex = currentPage * 4;
    return projectsData.slice(startIndex, startIndex + 4);
  };

  // Navigation functions with smooth transitions
  const goToNextPage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentPage((prev) => (prev + 1) % 3);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToPage = (pageIndex: number) => {
    if (isTransitioning || pageIndex === currentPage) return;
    setIsTransitioning(true);
    setCurrentPage(pageIndex);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Projects Grid - Always show 4 cards per page with smooth transitions */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12 transition-all duration-300 ${
        isTransitioning ? 'opacity-75 scale-95' : 'opacity-100 scale-100'
      }`}>
        {getCurrentPageProjects().map((project) => (
          <div 
            key={project.id} 
            className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2"
            onClick={() => handleProjectClick(project.id)}
          >
            {/* Project Card with Image and Text Overlay */}
            <div className="relative overflow-hidden shadow-lg bg-white rounded-lg">
              <img
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
              onClick={() => goToPage(pageIndex)}
              disabled={isTransitioning}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                pageIndex === currentPage 
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
  );
};

const ProjectsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-transparent py-8 sm:py-12 pt-2 sm:pt-4 px-4 sm:px-6 lg:px-8 relative z-[1]">
      <div className="max-w-7xl mx-auto">
        {/* Header - Responsive */}
        <div className="text-center lg:text-left mb-8 sm:mb-12 lg:mb-16">
          {/* Subtitle */}
          <p className="text-[#7B43D6] text-xs sm:text-sm font-bold mb-3 sm:mb-4 uppercase tracking-wide">
            {t("home.section5.subtitle")}
          </p>
          
          {/* Title and Description */}
          <div className="max-w-4xl lg:max-w-none">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
              {t("home.section5.title")}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto lg:mx-0">
              {t("home.section5.description")}
            </p>
          </div>
        </div>

        {/* Projects Carousel */}
        <ProjectsCarousel />
      </div>
    </section>
  );
};

export default ProjectsSection;