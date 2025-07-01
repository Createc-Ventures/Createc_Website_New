import React from "react";
import { Code, Lightbulb, TrendingUp } from "lucide-react";

const features = [
  {
    icon: <Code size={40} />,
    title: "Software Solutions",
    description: "Custom Software, Web & App Development tailored for growth.",
    cta: "Explore Software",
  },
  {
    icon: <Lightbulb size={40} />,
    title: "Tech Innovation",
    description: "AI, Blockchain & Emerging Tech that push boundaries.",
    cta: "Discover Innovations",
  },
  {
    icon: <TrendingUp size={40} />,
    title: "Growth & Marketing",
    description: "Branding, Digital Strategy & Scalable Market Reach.",
    cta: "Boost Growth",
  },
];

const SmartSolutions = () => {
  return (
    <section
      id="services"
      className="relative py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#D9D9D9" }}
    >
      {/* Blurred Background Image */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-[280px] sm:w-[350px] md:w-[500px] opacity-20 blur-2xl pointer-events-none z-0">
        <img
          src="/iphone-mockup.png"
          alt="iPhone Background"
          className="w-full h-auto"
        />
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          Smart Solutions for Your Business
        </h2>
        <p className="text-gray-700 text-base sm:text-lg max-w-xl mx-auto">
          We merge innovation with strategy to create digital experiences that
          elevate your brand and fuel business growth.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-2">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative bg-white/30 backdrop-blur-xl border border-white/40 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-[0_8px_40px_rgba(236,124,48,0.3)] transition-all hover:-translate-y-2 hover:scale-[1.02] duration-300 overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-tr from-[#ec7c30] to-[#fcb508] rounded-full opacity-10 blur-3xl pointer-events-none" />

            <div className="flex justify-center mb-4 text-[#ec7c30]">{feature.icon}</div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 uppercase tracking-wide mb-2 text-center">
              {feature.title}
            </h3>
            <p className="text-gray-700 text-sm sm:text-base text-center">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Decorative Background Shapes */}
      <div className="absolute bottom-0 left-0 w-1/2 sm:w-1/3 h-1/3 bg-createc-orange opacity-10 rounded-tr-full"></div>
      <div className="absolute top-0 right-0 w-1/3 sm:w-1/4 h-1/4 bg-createc-yellow opacity-10 rounded-bl-full"></div>
    </section>
  );
};

export default SmartSolutions;
