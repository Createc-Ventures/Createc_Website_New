import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Ensure you're using react-router-dom

const allProjects = [
  {
    title: "Morex Asset Management",
    description: "Placeholder placeholders placeholders placeholders Placeholder placeholders placeholders placeholders",
    image: "/assets/img/logo/4.png",
    bgColor: "bg-white",
    textColor: "text-black",
    link: "/morex",
  },
  {
    title: "Game Dome",
    description: "Placeholder placeholders placeholders placeholders Placeholder placeholders placeholders placeholders",
    image: "/assets/img/logo/5.png",
    bgColor: "bg-createc-platinum",
    textColor: "text-white",
    link: "/gamedome",
  },
  {
    title: "Skor AI",
    description: "Placeholder placeholders placeholders placeholders Placeholder placeholders placeholders placeholders",
    image: "/assets/img/logo/1.png",
    bgColor: "bg-gradient-to-r from-black to-orange-500",
    textColor: "text-white",
    link: "/skorai",
  },
  {
    title: "BTS.AI",
    description: "Placeholder placeholders placeholders placeholders Placeholder placeholders placeholders placeholders",
    image: "/assets/img/logo/2.png",
    bgColor: "bg-white",
    textColor: "text-black",
    link: "/btsai",
  },
  {
    title: "AAX Gaming",
    description: "Placeholder placeholders placeholders placeholders Placeholder placeholders placeholders placeholders",
    image: "/assets/img/logo/3.png",
    bgColor: "bg-[#1E1E1E]",
    textColor: "text-white",
    link: "/aaxgaming",
  },
];

const FeaturedProjects = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const navigate = useNavigate();

  const handleShowMore = () => {
    setVisibleCount(allProjects.length);
  };

  const handleShowLess = () => {
    setVisibleCount(3);
  };

  return (
    <section className="bg-gray-200 py-10 px-6">
      <h2 className="text-4xl font-semibold mb-6">Featured Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <AnimatePresence>
          {allProjects.slice(0, visibleCount).map((project, index) => (
            <motion.button
              key={project.title}
              onClick={() => navigate(project.link)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={`rounded-lg overflow-hidden text-left w-full shadow-md transition-transform duration-300 ${project.bgColor} ${project.textColor}`}
            >
              <div className="h-40 flex items-center justify-center">
                <img src={project.image} alt={project.title} className="h-40 object-contain" />
              </div>
              <div className="p-4 bg-white text-black">
                <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
                <p className="text-l text-gray-700">{project.description}</p>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </div>
      <div className="mt-6">
        {visibleCount < allProjects.length ? (
          <button onClick={handleShowMore} className="text-sm font-medium text-black underline">
            View All
          </button>
        ) : (
          <button onClick={handleShowLess} className="text-sm font-medium text-black underline">
            Show Less
          </button>
        )}
      </div>
    </section>
  );
};

export default FeaturedProjects;
// This component can be imported and used in your main application file, such as portfolio.tsx