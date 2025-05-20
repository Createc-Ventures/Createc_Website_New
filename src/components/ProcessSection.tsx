import React from 'react';

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "Understanding your brand, goals, and audience",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="#2C3E50">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Strategy",
      description: "Crafting tailored strategies for creative and tech solutions",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="#2C3E50">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Execution",
      description: "Bringing ideas to life with our expert team",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="#2C3E50">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      )
    }
  ];

  return (
    <section id="process" className="section-padding relative" style={{ backgroundColor: '#D9D9D9' }}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 animate-float" style={{ color: '#2C3E50' }}>
            Our Process
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: '#FFBB00' }}></div>
          <p className="mt-6 max-w-2xl mx-auto" style={{ color: '#2C3E50' }}>
            We follow a proven methodology to ensure your project's success from concept to completion
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative glassmorphism-card p-8 rounded-xl shadow-lg text-center border border-white/30"
                  style={{
                    animation: `fadeUp 0.6s ease forwards`,
                    animationDelay: `${index * 0.3}s`,
                    opacity: 0,
                    transform: 'translateY(20px)',
                    background: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(15px)',
                    WebkitBackdropFilter: 'blur(15px)',
                    borderRadius: '1rem',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(135deg, #FFBB00 0%, #FF7D20 100%)', color: '#2C3E50' }}>
                    {step.icon}
                  </div>
                  <h3 className="font-montserrat font-bold text-xl mb-2" style={{ color: '#2C3E50' }}>{step.title}</h3>
                  <p style={{ color: '#2C3E50' }}>{step.description}</p>
                  
                  <div
                    className="absolute top-0 right-0 w-12 h-12 rounded-full flex items-center justify-center font-montserrat font-bold text-xl"
                    style={{
                      backgroundColor: '#FF7D20',
                      color: '#fff',
                      transform: 'translate(25%, -25%)',
                      boxShadow: '0 4px 8px rgba(255, 125, 32, 0.5)'
                    }}
                  >
                    {step.number}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border-2 rounded-full font-montserrat font-semibold transition-colors duration-300"
              style={{
                backgroundColor: '#2C3E50',
                color: '#FFBB00',
                borderColor: '#2C3E50',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#FFBB00';
                e.currentTarget.style.color = '#2C3E50';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = '#2C3E50';
                e.currentTarget.style.color = '#FFBB00';
              }}
            >
              Start Your Project
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="#FFBB00">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-64 tech-grid opacity-20"></div>

      {/* Animations */}
      <style>{`
        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default ProcessSection;
