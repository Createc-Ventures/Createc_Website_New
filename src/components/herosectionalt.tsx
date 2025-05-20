import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = [
  {
    id: 'marketing',
    label: 'Marketing',
    video: 'https://createc-web-assets.s3.ap-south-1.amazonaws.com/hero-section/HD_Gradient_Background+02.mp4', // Replace with your actual external video URL
    scrollingTexts: ['Engage', 'Promote', 'Connect', 'Inspire'],
    content: {
      title: 'Marketing',
      subtitle: 'Placeholder for marketing content Placeholder for marketing content Placeholder for marketing content Placeholder for marketing content',
      intro: ''
    },
  },
  {
    id: 'tech',
    label: 'Tech',
    video: 'https://createc-web-assets.s3.ap-south-1.amazonaws.com/hero-section/HD_Gradient_Background+07.mp4', // Replace with your actual external video URL
    scrollingTexts: ['Code', 'Build', 'Deploy', 'Scale'],
    content: {
      title: 'Technology',
      subtitle: 'Placeholder for technology content Placeholder for technology content Placeholder for technology content Placeholder for technology content',
      intro: ''
    },
  }
];


export default function PixelStreamingTabs() {
  const [activeTab, setActiveTab] = useState('marketing');
  const [scrollingIndex, setScrollingIndex] = useState(0);
  const activeContent = tabs.find(tab => tab.id === activeTab);

  useEffect(() => {
    const tabInterval = setInterval(() => {
      setActiveTab(prev => (prev === 'marketing' ? 'tech' : 'marketing'));
    }, 10000);

    const scrollInterval = setInterval(() => {
      setScrollingIndex(prev => (prev + 1) % activeContent.scrollingTexts.length);
    }, 2000);

    return () => {
      clearInterval(tabInterval);
      clearInterval(scrollInterval);
    };
  }, [activeContent]);

  return (
    <div id='home' className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <AnimatePresence mode="wait">
        <motion.video
          key={activeTab}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <source src={activeContent.video} type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
      </AnimatePresence>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-12 text-white z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + '-text'}
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute max-w-full md:max-w-[700px]"
          >
            <p className="text-xl mb-4">{activeContent.content.intro}</p>
            <div className="flex items-baseline mb-4 h-[1.25em] overflow-hidden text-4xl md:text-6xl font-bold">
              <h1 className="whitespace-nowrap text-[#2C3E50]">
                {activeContent.content.title}&nbsp;
                <span className="inline-block relative h-[1.21em] w-[520px] overflow-hidden align-middle">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={scrollingIndex}
                      initial={{ y: '100%' }}
                      animate={{ y: 0 }}
                      exit={{ y: '-100%' }}
                      transition={{ duration: 0.5 }}
                      className="absolute left-0 top-0"
                    >
                      {activeContent.scrollingTexts[scrollingIndex]}
                    </motion.div>
                  </AnimatePresence>
                </span>
              </h1>
            </div>
            <p className="text-lg text-[#2C3E50]">{activeContent.content.subtitle}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Tab Bar 
      <div className="absolute bottom-0 w-full flex justify-center z-10 h-16  px-2 md:px-0">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`w-1/2 h-full text-sm md:text-xl font-semibold transition duration-300 rounded-t-md flex items-center justify-center gap-2 ${
              activeTab === tab.id ? 'bg-white text-black' : 'bg-white/30 text-white hover:bg-white/50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>*/}
    </div>
  );
}
