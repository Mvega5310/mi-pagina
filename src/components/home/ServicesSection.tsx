import React from 'react';
import { useTranslation } from 'react-i18next';

const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      icon: "/src/assets/icons/home/section3-icon1.svg",
      alt: "Product development icon"
    },
    {
      id: 2,
      icon: "/src/assets/icons/home/section3-icon2.svg",
      alt: "UX/UI designing icon"
    },
    {
      id: 3,
      icon: "/src/assets/icons/home/section3-icon3.svg",
      alt: "Digital marketing icon"
    },
    {
      id: 4,
      icon: "/src/assets/icons/home/section3-icon4.svg",
      alt: "Content management icon"
    }
  ];

  return (
    <section className="bg-[#1F0951] py-12 px-4 relative z-5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#70A8FF] text-sm font-medium mb-2">
            {t("home.section3.subtitle")}
          </p>
          <h2 className="text-white text-3xl md:text-4xl font-bold max-w-2xl mx-auto">
            {t("home.section3.title")}
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-lg p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="mb-6 flex justify-center">
                <img
                  src={service.icon}
                  alt={service.alt}
                  className="w-20 h-20 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-gray-900 text-lg font-bold mb-3 group-hover:text-purple-800 transition-colors duration-300">
                {t(`home.section3.services.service${service.id}.title`)}
              </h3>
              <p className="text-gray-600 text-sm mb-6 group-hover:text-gray-700 transition-colors duration-300">
                {t(`home.section3.services.service${service.id}.description`)}
              </p>
              <button className="text-[#1F0951] text-sm font-medium bg-[#F7F7F9] py-2 px-4 hover:text-[#1F0951]/80 hover:scale-105 transition-all duration-200">
                {t(`home.section3.services.service${service.id}.button`)}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;