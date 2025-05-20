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
    <section className="relative py-20 px-4" style={{ backgroundColor: "#D9D9D9" }}>
      {/* 📱 Blurred iPhone Background */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-[400px] md:w-[500px] opacity-20 blur-xl pointer-events-none z-0">
        <img
          src="/iphone-mockup.png"
          alt="iPhone Background"
          className="w-full h-auto"
        />
      </div>

      <div className="relative z-10 text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Smart Solutions for Your Business
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          We merge innovation with strategy to create digital experiences that
          elevate your brand and fuel business growth.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative bg-white/30 backdrop-blur-xl border border-white/40 rounded-3xl p-10 shadow-xl hover:shadow-[0_8px_40px_rgba(236,124,48,0.3)] transition-transform hover:-translate-y-2 hover:scale-[1.02] duration-300 overflow-hidden"
          >
            {/* Decorative blob */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-tr from-[#ec7c30] to-[#fcb508] rounded-full opacity-10 blur-3xl pointer-events-none" />

            <div className="flex justify-center mb-6 text-[#ec7c30]">{feature.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 uppercase tracking-wide mb-3 text-center">
              {feature.title}
            </h3>
            <p className="text-gray-700 text-sm text-center mb-6">{feature.description}</p>
            <div className="flex justify-center">
              <button className="bg-[#ec7c30] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#fcb508] transition duration-300 shadow-md">
                {feature.cta}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SmartSolutions;
