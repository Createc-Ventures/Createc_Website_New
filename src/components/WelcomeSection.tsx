
import React from 'react';

const WelcomeSection = () => {
  return (
    <section className="section-padding  relative overflow-hidden bg-black text-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center relative z-10 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-createc-blue mb-6 animate-float">
            Hello, Welcome to CREATEC
          </h2>
          <p className="text-xl text-white leading-relaxed animate-pulse-slow">
            We are a full-service agency offering social media management, digital marketing, 
            website development, software and app development.
          </p>
        </div>
      </div>
      
      {/* Background shapes with animation */}
      <div className="absolute top-5 left-0 w-40 h-40 bg-createc-purple opacity-5 rounded-full blur-md animate-pulse-slow"></div>

      <div className="absolute bottom-0 right-0 w-60 h-60 bg-createc-blue opacity-5 rounded-full animate-float"></div>
    </section>
  );
};

export default WelcomeSection;
