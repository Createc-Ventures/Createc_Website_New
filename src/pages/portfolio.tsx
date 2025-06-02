import React from 'react';
import HeroSection from '@/components/HeroSection';
import Showcase from '@/components/showcase';
// Main App component
const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased">
      {/* Hero Section */}
      <HeroSection/>
      {/* Featured Projects Section */}
      <Showcase />
      {/* Testimonials Section */}
      <section className="bg-gray-200 py-16 px-4 sm:px-6 lg:px-8 rounded-t-lg shadow-inner">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">
            Testimonials
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {/* Testimonial Card 1 */}
            <TestimonialCard
              name="Name"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            />
            {/* Testimonial Card 2 */}
            <TestimonialCard
              name="Name"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            />
            {/* Testimonial Card 3 */}
            <TestimonialCard
              name="Name"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ title, description, logo, logoBgColor, logoTextColor }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
    <div className={`w-24 h-24 flex items-center justify-center rounded-full mb-4 ${logoBgColor}`}>
      <span className={`text-5xl font-bold ${logoTextColor}`}>{logo}</span>
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

// Testimonial Card Component
const TestimonialCard = ({ name, text }) => (
  <div className="bg-gray-700 p-6 rounded-lg shadow-md flex items-start space-x-4">
    {/* Avatar Placeholder */}
    <div className="w-12 h-12 flex-shrink-0 bg-blue-400 rounded-full flex items-center justify-center text-white text-xl font-bold">
      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    </div>
    <div>
      <h3 className="text-lg font-semibold text-white mb-2">{name}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{text}</p>
    </div>
  </div>
);

export default App;
