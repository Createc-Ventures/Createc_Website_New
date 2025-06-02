import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from "@/lib/utils";

type Item = {
  label: string;
  image: string;
  mobileImage: string;
};

const data: Record<'marketing' | 'tech', Item[]> = {
  marketing: [
    { label: 'Product marketing', image: '/assets/img/product.png', mobileImage: '/assets/img/mobile/product.png' },
    { label: 'Brand management', image: '/assets/img/Brand.png', mobileImage: '/assets/img/mobile/Brand.png' },
    { label: 'Seo and paid ads', image: '/assets/img/SEO.png', mobileImage: '/assets/img/mobile/SEO.png' },
    { label: 'Content management', image: '/assets/img/content.png', mobileImage: '/assets/img/mobile/content.png' },
    { label: 'Marketing automation', image: '/assets/img/auto.png', mobileImage: '/assets/img/mobile/auto.png' },
    { label: 'User acquisition and growth', image: '/assets/img/user.png', mobileImage: '/assets/img/mobile/user.png' },
  ],
  tech: [
    { label: 'AI & Blockchain Development ', image: '/assets/img/blockchain.png', mobileImage: '/assets/img/mobile/blockchain.png' },
    { label: 'Full Stack Software Solutions', image: '/assets/img/full.png', mobileImage: '/assets/img/mobile/full.png' },
    { label: 'Mobile & Web Development', image: '/assets/img/web.png', mobileImage: '/assets/img/mobile/web.png' },
    { label: 'Product & Saas Solution', image: '/assets/img/saas.png', mobileImage: '/assets/img/mobile/saas.png' },
    { label: 'Research and emerging tech', image: '/assets/img/emerging.png', mobileImage: '/assets/img/mobile/emerging.png' },
    { label: 'System Architecture', image: '/assets/img/system.png', mobileImage: '/assets/img/mobile/system.png' },
  ],
};

const defaultImages = {
  marketing: '/assets/img/M_Def.png',
  tech: '/assets/img/T_Def.png',
  mobileMarketing: '/assets/img/mobile/M_Def.png',
  mobileTech: '/assets/img/mobile/Mobile_T_Def.png',
};

const transition = {
  type: "spring",
  stiffness: 200,
  damping: 30,
  duration: 0.5,
};

export default function HoverImageTabs() {
  const [activeTab, setActiveTab] = useState<'marketing' | 'tech'>('marketing');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [bgImage, setBgImage] = useState<string>('');

  const isMobile = () => typeof window !== 'undefined' && window.innerWidth < 768;

  const items = data[activeTab];

  const updateImage = (index: number | null) => {
    if (index === null) {
      const defaultImg = isMobile()
        ? activeTab === 'marketing'
          ? defaultImages.mobileMarketing
          : defaultImages.mobileTech
        : defaultImages[activeTab];
      setBgImage(defaultImg);
    } else {
      const selected = items[index];
      setBgImage(isMobile() ? selected.mobileImage : selected.image);
    }
  };

  useEffect(() => {
    updateImage(null); // Set default background when tab changes
    setHoveredIndex(null);
  }, [activeTab]);

  useEffect(() => {
    updateImage(hoveredIndex);
  }, [hoveredIndex]);

  useEffect(() => {
    const handleResize = () => updateImage(hoveredIndex);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [hoveredIndex, activeTab]);

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Top Section */}
      <div className="bg-createc-platinum py-10 px-4 z-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">Our Services for Your Brand</h2>
        <p className="text-base md:text-lg text-black max-w-2xl mx-auto">
          Comprehensive solutions tailored to your needs, from branding to tech innovations.
        </p>
        <div className="mt-6 flex justify-center">
          <div className="relative inline-flex bg-createc-charcoal rounded-full p-1">
            {['marketing', 'tech'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as 'marketing' | 'tech')}
                className={cn(
                  "min-w-[100px] px-4 py-2 text-sm md:px-6 md:py-3 md:text-lg rounded-full font-medium transition-all duration-300",
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

      {/* Background and Labels */}
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

        {/* Labels Section */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-between h-full px-4 md:px-8 py-10 md:py-20 text-center md:text-left space-y-6 md:space-y-0">
          <div className={cn(
            "w-full md:max-w-2xl",
            activeTab === 'tech' ? "md:ml-auto md:text-right" : "md:mr-auto md:text-left"
          )}>
            <div className="flex flex-col space-y-4 md:space-y-6">
              {items.map((item, index) => (
                <div
                  key={index}
                  onMouseEnter={() => {
                    if (!isMobile()) setHoveredIndex(index);
                  }}
                  onClick={() => {
                    if (isMobile()) updateImage(index);
                  }}
                  className={cn(
                    "text-lg sm:text-xl md:text-3xl lg:text-4xl cursor-pointer transition-all duration-500",
                    hoveredIndex === index
                      ? activeTab === 'tech'
                        ? 'text-createc-charcoal font-bold md:-translate-x-12'
                        : 'text-createc-charcoal font-bold md:translate-x-12'
                      : 'text-createc-charcoal font-bold',
                    activeTab === 'tech' ? 'md:pr-24' : 'md:pl-24'
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
