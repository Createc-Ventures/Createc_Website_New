import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from "@/lib/utils"; // Optional utility for class name merging

const data = {
  marketing: [
    { label: 'Product marketing', image: '/assets/img/product.png' },
    { label: 'Brand management', image: '/assets/img/Brand.png' },
    { label: 'Seo and paid ads', image: '/assets/img/SEO.png' },
    { label: 'Content management', image: '/assets/img/content.png' },
    { label: 'Marketing automation', image: '/assets/img/auto.png' },
    { label: 'User acquisition and growth', image: '/assets/img/user.png' },
  ],
  tech: [
    { label: 'AI & Blockchain Development ', image: '/assets/img/blockchain.png' },
    { label: 'Full Stack Software Solutions', image: '/assets/img/full.png' },
    { label: 'Mobile & Web Development', image: '/assets/img/web.png' },
    { label: 'Product & Saas Solution', image: '/assets/img/saas.png' },
    { label: 'Research and emerging tech', image: '/assets/img/emerging.png' },
    { label: 'System Architecture', image: '/assets/img/system.png' },
  ],
};

const defaultImages = {
  marketing: '/assets/img/M_Def.png',
  tech: '/assets/img/T_Def.png',
};

const transition = {
  type: "spring",
  stiffness: 200,
  damping: 30,
  duration: 0.5
};

export default function HoverImageTabs() {
  const [activeTab, setActiveTab] = useState<'marketing' | 'tech'>('marketing');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [bgImage, setBgImage] = useState<string>(defaultImages['marketing']);
  const items = data[activeTab];

  // Set background to hovered item
  useEffect(() => {
    if (hoveredIndex !== null) {
      setBgImage(items[hoveredIndex].image);
    }
  }, [hoveredIndex]);

  // Reset background on tab change
  useEffect(() => {
    setHoveredIndex(null);
    setBgImage(defaultImages[activeTab]);
  }, [activeTab]);

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Top Section: Heading and Tabs */}
      <div className="bg-createc-platinum py-10 px-4 z-20 relative text-center">
        <h2 className="text-4xl font-bold text-black mb-2">Our Services for Your Brand</h2>
        <p className="text-lg text-black max-w-2xl mx-auto">
          Comprehensive solutions tailored to your needs, from branding to tech innovations.
        </p>
        <div className="mt-6 flex justify-center">
          <div className="relative inline-flex bg-createc-charcoal rounded-full p-1">
            {['marketing', 'tech'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as 'marketing' | 'tech')}
                className={cn(
                  "min-w-[120px] px-6 py-3 rounded-full text-lg font-medium transition-all duration-300",
                  activeTab === tab
                    ? 'bg-createc-platinum text-createc-orange shadow-lg'
                    : 'text-createc-yellow hover:text-white',
                  'relative z-10'
                )}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
            <motion.div
              className="absolute inset-0 rounded-full shadow-md"
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
            />
          )}
        </AnimatePresence>

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
                        ? 'text-createc-charcoal font-bold -translate-x-12'
                        : 'text-createc-charcoal font-bold translate-x-12'
                      : 'text-createc-charcoal font-bold',
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
