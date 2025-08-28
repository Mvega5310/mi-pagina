import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import p1 from '../../../assets/images/home/section5-image1.jpg';
import p2 from '../../../assets/images/home/section5-image2.jpg';
import p3 from '../../../assets/images/home/section5-image3.jpg';
import p4 from '../../../assets/images/home/section5-image4.jpg';

// Projects data structure - Extended to 12 projects
const projectsData = [
  {
    id: 1,
    image: p1,
    categoryColor: "bg-blue-100 text-blue-600"
  },
  {
    id: 2,
    image: p2,
    categoryColor: "bg-green-100 text-green-600"
  },
  {
    id: 3,
    image: p3,
    categoryColor: "bg-purple-100 text-purple-600"
  },
  {
    id: 4,
    image: p4,
    categoryColor: "bg-orange-100 text-orange-600"
  },
  // New projects 5-8
  {
    id: 5,
    image: p1, // Reusing existing images for demo, you can replace with new ones
    categoryColor: "bg-red-100 text-red-600"
  },
  {
    id: 6,
    image: p2,
    categoryColor: "bg-indigo-100 text-indigo-600"
  },
  {
    id: 7,
    image: p3,
    categoryColor: "bg-pink-100 text-pink-600"
  },
  {
    id: 8,
    image: p4,
    categoryColor: "bg-yellow-100 text-yellow-600"
  },
  // New projects 9-12
  {
    id: 9,
    image: p1,
    categoryColor: "bg-teal-100 text-teal-600"
  },
  {
    id: 10,
    image: p2,
    categoryColor: "bg-cyan-100 text-cyan-600"
  },
  {
    id: 11,
    image: p3,
    categoryColor: "bg-emerald-100 text-emerald-600"
  },
  {
    id: 12,
    image: p4,
    categoryColor: "bg-rose-100 text-rose-600"
  }
];

// Projects Carousel Component
const ProjectsCarousel = () => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

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
          <div key={project.id} className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2">
            {/* Project Card with Image and Text Overlay */}
            <div className="relative overflow-hidden shadow-lg bg-white rounded-lg">
              <img
                src={project.image}
                alt={t(`home.section5.projects.project${project.id}.title`)}
                className="w-full h-64 sm:h-72 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                width={400}
                height={256}
                loading="lazy"
              />
              
              {/* Text Content Inside Card - Responsive */}
              <div className="absolute bottom-0 left-0 right-0 bg-white p-3 sm:p-4 lg:p-6 mx-1 sm:mx-2 mb-1 sm:mb-2">
                <span className={`inline-block ${project.categoryColor} text-xs font-semibold px-2 sm:px-3 py-1 mb-2 sm:mb-3 uppercase tracking-wide rounded-full`}>
                  {t(`home.section5.projects.project${project.id}.category`)}
                </span>
                <h3 className="text-gray-900 font-bold text-base sm:text-lg lg:text-xl leading-tight group-hover:text-[#7B43D6] transition-colors duration-300">
                  {t(`home.section5.projects.project${project.id}.title`)}
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
          Page {currentPage + 1} of 3
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