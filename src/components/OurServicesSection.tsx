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
    { label: 'Product marketing', image: '/assets/img/Services/9.png', mobileImage: '/assets/img/Services/10.png' },
    { label: 'Brand management', image: '/assets/img/Services/5.png', mobileImage: '/assets/img/Services/6.png' },
    { label: 'Seo and paid ads', image: '/assets/img/Services/11.png', mobileImage: '/assets/img/Services/12.png' },
    { label: 'Content management', image: '/assets/img/Services/15.png', mobileImage: '/assets/img/Services/16.png' },
    { label: 'Marketing automation', image: '/assets/img/Services/7.png', mobileImage: '/assets/img/Services/8.png' },
    { label: 'User acquisition and growth', image: '/assets/img/Services/13.png', mobileImage: '/assets/img/Services/14.png' },
  ],
  tech: [
    { label: 'AI & Blockchain Development ', image: '/assets/img/Services/21.png', mobileImage: '/assets/img/Services/22.png' },
    { label: 'Full Stack Software Solutions', image: '/assets/img/Services/19.png', mobileImage: '/assets/img/Services/20.png' },
    { label: 'Mobile & Web Development', image: '/assets/img/Services/17.png', mobileImage: '/assets/img/Services/18.png' },
    { label: 'Product & Saas Solution', image: '/assets/img/Services/23.png', mobileImage: '/assets/img/Services/24.png' },
    { label: 'Research and emerging tech', image: '/assets/img/Services/25.png', mobileImage: '/assets/img/Services/26.png' },
    { label: 'System Architecture', image: '/assets/img/Services/27.png', mobileImage: '/assets/img/Services/28.png' },
  ],
};

const defaultImages = {
  marketing: '/assets/img/Services/1.png',
  tech: '/assets/img/Services/3.png',
  mobileMarketing: '/assets/img/Services/2.png',
  mobileTech: '/assets/img/Services/4.png',
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
    updateImage(null);
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
    <div className="w-full min-h-screen flex flex-col bg-createc-platinum">
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

        <div className={cn(
          "relative z-10 flex h-full px-4 md:px-8 py-10 md:py-20",
          activeTab === 'tech' ? 'justify-end text-right' : 'justify-start text-left'
        )}>
          <div className="flex flex-col justify-center space-y-6 md:space-y-10 w-full max-w-3xl ml-10">
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
                  "text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-relaxed font-bold text-createc-charcoal cursor-pointer transition-all duration-500 transform",
                  hoveredIndex === index ? (activeTab === 'tech' ? '-translate-x-6' : 'translate-x-6') : ''
                )}
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
