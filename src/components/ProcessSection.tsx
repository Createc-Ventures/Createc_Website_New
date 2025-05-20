
import React from 'react';

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "Understanding your brand, goals, and audience",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Strategy",
      description: "Crafting tailored strategies for creative and tech solutions",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Execution",
      description: "Bringing ideas to life with our expert team",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      )
    }
  ];

  return (
    <section id="process" className="section-padding bg-black relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-createc-blue mb-2">Our Process</h2>
          <div className="w-24 h-1 bg-createc-purple mx-auto rounded-full"></div>
          <p className="mt-6 text-white max-w-2xl mx-auto ">
            We follow a proven methodology to ensure your project's success from concept to completion
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline connector for desktop */}
            
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Process Card */}
                  <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-8 text-center relative z-10 border border-white/20">

                    <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                      {step.icon}
                    </div>
                    <h3 className="font-montserrat font-bold text-xl text-createc-blue mb-2">{step.title}</h3>
                    <p className="text-white">{step.description}</p>
                  </div>
                  
                  {/* Step number */}
                  <div className="absolute top-0 right-0 bg-createc-purple text-white font-montserrat font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center transform translate-x-1/4 -translate-y-1/4">
                    {step.number}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-16">
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 bg-black text-createc-blue border-2 border-createc-blue rounded-full font-montserrat font-semibold hover:bg-createc-blue hover:text-white transition-colors duration-300"
            >
              Start Your Project
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-64 tech-grid opacity-20"></div>
    </section>
  );
};

export default ProcessSection;
