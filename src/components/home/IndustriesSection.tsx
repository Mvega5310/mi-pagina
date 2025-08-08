import React from 'react';
import { useTranslation } from 'react-i18next';

// Import SVG icons
import Icon1 from '../../assets/icons/home/section8.icon1.svg';
import Icon2 from '../../assets/icons/home/section8.icon2.svg';
import Icon3 from '../../assets/icons/home/section8.icon3.svg';
import Icon4 from '../../assets/icons/home/section8.icon4.svg';
import Icon5 from '../../assets/icons/home/section8.icon5.svg';

interface IndustryCard {
  icon: string;
  title: string;
  bgColor: string;
}

const IndustriesSection: React.FC = () => {
  const { t } = useTranslation();

  const industries: IndustryCard[] = [
    {
      icon: Icon1,
      title: t('home.section8.industries.banking'),
      bgColor: '#4800F1'
    },
    {
      icon: Icon2,
      title: t('home.section8.industries.healthcare'),
      bgColor: '#4800F1'
    },
    {
      icon: Icon3,
      title: t('home.section8.industries.education'),
      bgColor: '#4800F1'
    },
    {
      icon: Icon4,
      title: t('home.section8.industries.manufacturing'),
      bgColor: '#4800F1'
    },
    {
      icon: Icon5,
      title: t('home.section8.industries.markets'),
      bgColor: '#100D17'
    }
  ];

  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#7B43D6' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-start mb-12 ml-[5.5rem]">
          <p className="text-white/80 text-sm font-medium mb-4 tracking-wide uppercase">
            {t('home.section8.subtitle')}
          </p>
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-2xl">
            {t('home.section8.title')}
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="w-40 h-40 md:w-44 md:h-44 rounded-lg flex flex-col items-center justify-center text-center p-6 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: industry.bgColor }}
            >
              {/* Icon */}
              <div className="mb-4">
                <img 
                  src={industry.icon} 
                  alt={industry.title}
                  className="w-16 h-16 md:w-24 md:h-24"
                />
              </div>
              
              {/* Title */}
              <h3 className="text-white text-lg md:text-xl font-semibold">
                {industry.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;