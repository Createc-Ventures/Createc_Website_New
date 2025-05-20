
import React from 'react';

const ServicesSection = () => {
  const pillars = [
    {
      title: "SOFTWARE SOLUTIONS",
      description: "Custom Software, Web & App Development",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "TECH INNOVATION",
      description: "AI, Blockchain & Emerging Technologies",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "GROWTH & MARKETING",
      description: "Branding, Digital Marketing & Social Media Strategy",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="section-padding bg-createc-platinum">
      <div className="container mx-auto">
        <div className="text-center mb-16 reveal ">
          <h2 className="text-3xl md:text-4xl font-bold text-createc-blue mb-2 animate-float">Smart Solutions for Your Business</h2>
          <div className="w-24 h-1 bg-createc-purple mx-auto rounded-full"></div>
          <p className="mt-6 text-white max-w-2xl mx-auto">
            We combine creativity and technology to deliver comprehensive digital solutions tailored to your business needs
          </p>
        </div>
        
        {/* Three Service Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="bg-[#242124] reveal tech-card hover:border-l-4 hover:border-createc-purple p-8 flex flex-col items-center text-center hover:shadow-lg hover:transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-createc-blue mb-6 animate-float">
                {pillar.icon}
              </div>
              <h3 className="font-montserrat font-bold text-xl text-createc-blue mb-3">{pillar.title}</h3>
              <p className="text-white">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
