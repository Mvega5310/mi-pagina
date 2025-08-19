import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// Projects data structure
const projectsData = [
  {
    id: 1,
    image: "src/assets/images/home/section5-image1.jpg",
    categoryColor: "bg-blue-100 text-blue-600"
  },
  {
    id: 2,
    image: "src/assets/images/home/section5-image2.jpg",
    categoryColor: "bg-green-100 text-green-600"
  },
  {
    id: 3,
    image: "src/assets/images/home/section5-image3.jpg",
    categoryColor: "bg-purple-100 text-purple-600"
  },
  {
    id: 4,
    image: "src/assets/images/home/section5-image4.jpg",
    categoryColor: "bg-orange-100 text-orange-600"
  }
];

// Projects Carousel Component
const ProjectsCarousel = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(projectsData.length / 4));
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Calculate visible projects based on screen size - responsive
  const getVisibleProjects = () => {
    // Show 1 on mobile, 2 on tablet, 4 on desktop
    const itemsPerSlide = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 4;
    const startIndex = currentSlide * itemsPerSlide;
    return projectsData.slice(startIndex, startIndex + itemsPerSlide);
  };

  // Calculate total slides based on screen size
  const getTotalSlides = () => {
    const itemsPerSlide = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 4;
    return Math.ceil(projectsData.length / itemsPerSlide);
  };

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Projects Grid - Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
        {getVisibleProjects().map((project, index) => (
          <div key={project.id} className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2">
            {/* Project Card with Image and Text Overlay */}
            <div className="relative overflow-hidden shadow-lg bg-white">
              <img
                src={project.image}
                alt={t(`home.section5.projects.project${project.id}.title`)}
                className="w-full h-64 sm:h-72 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Text Content Inside Card - Responsive */}
              <div className="absolute bottom-0 left-0 right-0 bg-white p-3 sm:p-4 lg:p-6 mx-1 sm:mx-2 mb-1 sm:mb-2">
                <span className={`inline-block ${project.categoryColor} text-xs font-semibold px-2 sm:px-3 py-1 mb-2 sm:mb-3 uppercase tracking-wide`}>
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

      {/* Navigation Dots */}
      <div className="flex justify-center space-x-4">
        {Array.from({ length: getTotalSlides() }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-[#5D7EFF]' 
                : 'bg-[#A8A8B8] hover:bg-[#8B8B9A]'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
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