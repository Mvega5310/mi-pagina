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
    <section className="bg-[#1F0951] py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 relative z-5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <p className="text-[#70A8FF] text-xs sm:text-sm font-medium mb-2 sm:mb-3 uppercase tracking-wider">
            {t("home.section3.subtitle")}
          </p>
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold max-w-4xl mx-auto leading-tight">
            {t("home.section3.title")}
          </h2>
        </div>

        {/* Services Grid - Improved responsive layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white p-4 sm:p-6 lg:p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group cursor-pointer"
            >
              <div className="mb-4 sm:mb-6 flex justify-center">
                <img
                  src={service.icon}
                  alt={service.alt}
                  className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-gray-900 text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 group-hover:text-purple-800 transition-colors duration-300 leading-tight">
                {t(`home.section3.services.service${service.id}.title`)}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm lg:text-base mb-4 sm:mb-6 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                {t(`home.section3.services.service${service.id}.description`)}
              </p>
              <button className="text-[#1F0951] text-xs sm:text-sm font-medium bg-[#F7F7F9] py-2 sm:py-3 px-3 sm:px-4 lg:px-6 hover:text-[#1F0951]/80 hover:scale-105 hover:bg-gray-100 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
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