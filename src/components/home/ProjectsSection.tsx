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

  // Calculate visible projects based on screen size
  const getVisibleProjects = () => {
    const startIndex = currentSlide * 4;
    return projectsData.slice(startIndex, startIndex + 4);
  };

  const totalSlides = Math.ceil(projectsData.length / 4);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {getVisibleProjects().map((project, index) => (
          <div key={project.id} className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-2">
            {/* Project Card with Image and Text Overlay */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white">
              <img
                src={project.image}
                alt={t(`home.section5.projects.project${project.id}.title`)}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Text Content Inside Card */}
              <div className="absolute bottom-0 left-0 right-0 bg-white p-6 mx-2 mb-2">
                <span className={`inline-block ${project.categoryColor} text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wide`}>
                  {t(`home.section5.projects.project${project.id}.category`)}
                </span>
                <h3 className="text-gray-900 font-bold text-xl leading-tight group-hover:text-[#7B43D6] transition-colors duration-300">
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
        {Array.from({ length: totalSlides }).map((_, index) => (
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
    <section className="bg-transparent py-12 pt-4 px-4 relative z-[1]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid gap-8 items-start mb-16">
          {/* Left - Subtitle */}
          <div>
            <p className="text-[#7B43D6] text-sm font-bold mb-4">
              {t("home.section5.subtitle")}
            </p>
          </div>
          
          {/* Right - Title and Description */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {t("home.section5.title")}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
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