
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden bg-createc-platinum">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-createc-blue mb-2">What We're All About</h2>
            <div className="w-24 h-1 bg-createc-purple mx-auto rounded-full"></div>
          </div>
          
          <div className="relative">
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-montserrat font-bold text-lg text-createc-blue mb-2">Innovation</h3>
                  <p className="text-charcoal">Pushing boundaries with creative tech solutions</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <h3 className="font-montserrat font-bold text-lg text-createc-blue mb-2">Communication</h3>
                  <p className="text-charcoal">Clear and effective brand messaging</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="font-montserrat font-bold text-lg text-createc-blue mb-2">Growth</h3>
                  <p className="text-charcoal">Scalable solutions for evolving brands</p>
                </div>
              </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-20 h-20 border-2 border-createc-purple border-opacity-20 rounded-lg transform rotate-12"></div>
            <div className="absolute -bottom-10 -right-10 w-20 h-20 border-2 border-createc-blue border-opacity-20 rounded-full"></div>
            
            <div className="bg-[#242124] backdrop-blur-2xl bg-opacity-10 rounded-xl shadow-lg p-8 md:p-10 relative z-10 text-center">
              <p className="text-lg text-charcoal leading-relaxed mb-6 ">
                At Createc, we blend creativity with technology to deliver comprehensive digital solutions. 
                
              </p>
              
              <p className="text-lg text-charcoal leading-relaxed  ">
                Our mission is to help brands elevate their digital presence through innovative and tailored solutions.
              </p>
              
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
