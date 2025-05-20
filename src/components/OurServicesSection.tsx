import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const OurServicesSection = () => {
  const techServices = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "AI & Emerging Tech",
      items: ["AI Integrations", "Blockchain Solutions", "Automation Tools"]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Custom Software Development",
      items: ["Web & Mobile App Development", "SaaS Solutions", "API Development"]
    }
  ];

  const marketingServices = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      ),
      title: "Branding & Social Media",
      items: ["Brand Strategy", "Social Media Management", "Content Marketing"]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Performance Marketing",
      items: ["Paid Ads", "SEO", "Conversion Optimization"]
    }
  ];

  const renderServiceCard = (service, index) => (
    <Card
  key={index}
  className="bg-white/10 backdrop-blur-md border-0 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-500 hover:transform hover:-translate-y-2"
>

      <CardContent className="p-6">
        <div className="w-16 h-16 gradient-bg rounded-lg flex items-center justify-center mb-6 text-white animate-pulse-slow">
          {service.icon}
        </div>
        <h3 className="font-montserrat font-bold text-lg text-createc-blue mb-4">{service.title}</h3>
        <ul className="space-y-3">
          {service.items.map((item, idx) => (
            <li key={idx} className="flex items-center text-white group">
              <span className="w-2 h-2 bg-createc-purple rounded-full mr-2 group-hover:w-3 group-hover:h-3 transition-all duration-300"></span>
              <span className="group-hover:text-createc-purple transition-colors duration-300">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );

  return (
    <section className="section-padding bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-createc-purple mb-2 animate-float">Our Services for Your Brand</h2>
          <div className="w-24 h-1 bg-createc-blue mx-auto rounded-full"></div>
          <p className="mt-6 text-white max-w-2xl mx-auto">
            Comprehensive solutions tailored to elevate your brand in the digital landscape
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 justify-center items-start">
          {/* Tech Section */}
          <Card className="w-full lg:w-1/2 bg-[#242124] rounded-2xl shadow-xl p-6 border-2 border-[#242124] hover:border-createc-purple transition-all duration-300">
            <h3 className="text-2xl font-bold text-center text-createc-purple mb-6">Tech</h3>
            <div className="grid grid-cols-1 gap-6">
              {techServices.map(renderServiceCard)}
            </div>
          </Card>

          {/* Marketing Section */}
          <Card className="w-full lg:w-1/2 bg-[#242124] rounded-2xl shadow-xl p-6 border-2 border-[#242124] hover:border-createc-purple transition-all duration-300">
            <h3 className="text-2xl font-bold text-center text-createc-purple mb-6">Marketing</h3>
            <div className="grid grid-cols-1 gap-6">
              {marketingServices.map(renderServiceCard)}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;
