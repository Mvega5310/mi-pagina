import React from 'react';

const LogoSection = () => {
  return (
    <section className="w-full bg-[#F7F7F9]">
      {/* Top border line */}
      <div className="w-full h-px bg-[#DCD7FF]"></div>
      
      {/* Logo container */}
      <div className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center flex-col items-center gap-8 md:flex-row md:gap-12 lg:gap-16">
            {/* Render 4 logos */}
            {[...Array(4)].map((_, index) => (
              <div key={index} className="flex-shrink-0">
                <img src="src\assets\icons\home\section7-logo.svg" alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSection;