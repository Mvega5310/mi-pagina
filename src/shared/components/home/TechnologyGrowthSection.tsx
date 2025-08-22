import { useTranslation } from 'react-i18next';
import bg1 from '../../../assets/images/home/section6-image1-bg.webp';
import bgLetters from '../../../assets/images/home/section6-image2-bg-letters.webp';

const TechnologyGrowthSection = () => {
  const { t } = useTranslation();

  const progressBars = [
    { label: 'Software', percentage: 90 },
    { label: 'Development', percentage: 85 },
    { label: 'Technology', percentage: 75 }
  ];

  return (
    <section className="bg-[#F7F7F9] py-8 lg:py-12">
      {/* First Part - Technology Text with Background */}
      <div className="relative mb-12 sm:mb-16 lg:mb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex justify-center items-center min-h-[250px] sm:min-h-[300px] lg:min-h-[400px]">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-center bg-no-repeat bg-contain bottom-12 sm:bottom-16 md:bottom-0 left-4 sm:left-8 md:left-24"

              style={{
                backgroundImage: `url('${bg1}')`
              }}
            />
            
            {/* Technology Text with Image Fill */}
            <div className="relative z-10 -top-8 sm:-top-12">
              <h2 
                className="text-[50px] sm:text-[80px] md:text-[140px] lg:text-[180px] xl:text-[200px] font-bold leading-[0.8] lg:leading-[265px] text-transparent bg-clip-text select-none"
                style={{
                  backgroundImage: `url('${bgLetters}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  fontWeight: 700,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                technology
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Second Part - Content and Progress Bars */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-4 sm:space-y-6">
            <p className="text-[#70A8FF] text-sm font-semibold uppercase tracking-wider">
              {t('home.section6.subtitle')}
            </p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {t('home.section6.title')}
            </h3>
          </div>

          {/* Right Side - Progress Bars */}
          <div className="space-y-6 sm:space-y-8">
            {progressBars.map((item, index) => (
              <div key={index} className="space-y-2 sm:space-y-3">
                {/* Label and Percentage */}
                <div className="flex justify-between items-center">
                  <span className="text-gray-900 font-semibold text-base sm:text-lg">
                    {item.label}
                  </span>
                  <span className="text-gray-600 font-medium text-base sm:text-lg">
                    {item.percentage}%
                  </span>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 h-2 sm:h-3 rounded-full">
                  <div 
                    className="bg-gradient-to-r from-[#70A8FF] to-[#565CFD] h-2 sm:h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyGrowthSection;