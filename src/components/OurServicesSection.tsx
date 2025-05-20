import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from "@/lib/utils"; // Optional utility for class name merging

const data = {
  marketing: [
    { label: 'Brand Strategy', image: 'https://via.placeholder.com/800x600' },
    { label: 'Social Media Management', image: 'https://via.placeholder.com/800x600' },
    { label: 'Content Marketing', image: 'https://via.placeholder.com/800x600' },
    { label: 'Paid Ads', image: 'https://via.placeholder.com/800x600' },
    { label: 'SEO', image: 'https://via.placeholder.com/800x600' },
    { label: 'Conversation Optimization', image: 'https://via.placeholder.com/800x600' },
  ],
  tech: [
    { label: 'Blockchain', image: 'https://www.shutterstock.com/image-illustration/2d-illustration-cloud-computing-concept-600nw-1458581246.jpg' },
    { label: 'AI & Machine Learning', image: 'https://sidgs.com/wp-content/uploads/2023/01/Top-Trends-To-Watch-out-In-Artificial-Intelligence-AI-in-2023-SID-Global-Solutions.png' },
    { label: 'Mobile App Development', image: 'https://via.placeholder.com/800x600' },
    { label: 'Web & Mobile Apps', image: 'https://via.placeholder.com/800x600' },
    { label: 'API Development', image: 'https://via.placeholder.com/800x600' },
    { label: 'SaaS Solutions', image: 'https://via.placeholder.com/800x600' },
  ],
};

const transition = {
  type: "spring",
  stiffness: 200,
  damping: 30,
  duration: 0.5
};

export default function HoverImageTabs() {
  const [activeTab, setActiveTab] = useState('marketing');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [bgImage, setBgImage] = useState<string | null>(null);
  const items = data[activeTab];

  // Only update image on hover
  useEffect(() => {
    if (hoveredIndex !== null) {
      setBgImage(items[hoveredIndex].image);
    }
  }, [hoveredIndex, items]);

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Top Section: Heading and Tabs */}
      <div className="bg-createc-platinum py-10 px-4 z-20 relative text-center">
        <h2 className="text-4xl font-bold text-black mb-2">Our Services for Your Brand</h2>
        <p className="text-lg text-black max-w-2xl mx-auto">
          Comprihensive solutions tailored to your needs, from branding to tech innovations.
        </p>
        <div className="mt-6 flex justify-center">
          <div className="relative inline-flex bg-gray-700 rounded-full p-1">
            {['marketing', 'tech'].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setHoveredIndex(null);
                  setBgImage(null);
                }}
                className={cn(
                  "min-w-[120px] px-6 py-3 rounded-full text-lg font-medium transition-all duration-300",
                  activeTab === tab
                    ? 'bg-white text-black shadow-lg'
                    : 'text-gray-300 hover:bg-gray-600 hover:text-white',
                  'relative z-10'
                )}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
            <motion.div
              className="absolute inset-0  rounded-full shadow-md"
              style={{
                left: activeTab === 'marketing' ? '0%' : '50%',
                width: '50%',
                transition: 'left 0.3s ease-in-out',
              }}
            />
          </div>
        </div>
      </div>

      {/* Image Background Section */}
      <div className="relative flex-1 overflow-hidden">
        <AnimatePresence>
          {bgImage && (
            <motion.div
              key={bgImage}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={transition}
              className="absolute inset-0 w-full h-full z-0"
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <link rel="preload" href={bgImage} as="image" />
              <div className="absolute inset-0 bg-createc-platinum bg-opacity-50" />
            </motion.div>
          )}
        </AnimatePresence>
        {!bgImage && <div className="absolute inset-0 bg-createc-platinum z-0" />}

        {/* Text Labels */}
        <div className="relative z-10 flex items-center justify-between h-full px-8 py-20">
          <div className={cn(
            "w-full max-w-2xl",
            activeTab === 'tech' ? "ml-auto text-right" : "mr-auto text-left"
          )}>
            <div className="flex flex-col space-y-8">
              {items.map((item, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  className={cn(
                    "text-3xl md:text-4xl cursor-pointer font-normal transition-all duration-500",
                    hoveredIndex === index
                      ? activeTab === 'tech'
                        ? 'text-createc-yellow -translate-x-12'
                        : 'text-createc-yellow translate-x-12'
                      : 'text-createc-orange',
                    activeTab === 'tech' ? 'pr-24' : 'pl-24'
                  )}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
