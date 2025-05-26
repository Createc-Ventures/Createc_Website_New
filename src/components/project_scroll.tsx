import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

const ScrollVideoCards = () => {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInSection, setIsInSection] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Sample video data
  const videos = [
    {
      id: 1,
      title: "Product Demo",
      description: "See our latest features in action",
      video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      duration: "2:34"
    },
    {
      id: 2,
      title: "Customer Success",
      description: "Real stories from our users",
      video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      duration: "3:45"
    },
    {
      id: 3,
      title: "Behind the Scenes",
      description: "How we build amazing products",
      video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      duration: "4:12"
    },
    {
      id: 4,
      title: "Team Culture",
      description: "Meet the people making it happen",
      video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      duration: "1:58"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Check if section is in view
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;
      
      if (sectionTop <= 0 && sectionBottom > windowHeight) {
        // We're in the section and it's locked
        setIsInSection(true);
        
        // Calculate scroll progress within the section
        const sectionHeight = section.offsetHeight - windowHeight;
        const scrolled = Math.abs(sectionTop);
        const progress = Math.min(scrolled / sectionHeight, 1);
        
        setScrollProgress(progress);
        
        // Update current video index based on progress
        const videoIndex = Math.floor(progress * videos.length * 2);
        setCurrentVideoIndex(Math.min(videoIndex, videos.length - 1));
        
      } else {
        setIsInSection(false);
        if (sectionBottom <= windowHeight) {
          // Section has passed, reset progress
          setScrollProgress(1);
        } else if (sectionTop > 0) {
          // Section hasn't been reached yet
          setScrollProgress(0);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [videos.length]);

  const getCardTransform = (index) => {
    const cardProgress = Math.max(0, Math.min(2, (scrollProgress * videos.length * 2) - index * 2));
    
    // Card moves from right (100%) to center (0%) to left (-100%)
    let translateX;
    if (cardProgress <= 1) {
      // Moving from right to center
      translateX = (1 - cardProgress) * 100;
    } else {
      // Moving from center to left
      translateX = -(cardProgress - 1) * 100;
    }
    
    const opacity = cardProgress > 0 && cardProgress < 2 ? 1 : 0;
    const scale = cardProgress > 0 && cardProgress < 2 ? 0.8 + (Math.min(cardProgress, 1) * 0.2) : 0.8;
    
    return {
      transform: `translateX(${translateX}%) scale(${scale})`,
      opacity,
      zIndex: videos.length - index
    };
  };

  return (
    // Add explicit overflow constraints to the root container
    <div className="bg-gray-50 overflow-x-hidden">
      {/* Content before section */}
      <div className="h-screen bg-gradient-to-b from-blue-500 to-purple-600 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-4">Scroll Down</h1>
          <p className="text-xl">Experience our interactive video showcase</p>
        </div>
      </div>

      {/* Main scroll-controlled section */}
      <div 
        ref={sectionRef}
        className="relative bg-black overflow-hidden" // Added overflow-hidden
        style={{ height: `${500}vh` }} // Extra height for scroll control
      >
        {/* Sticky container with explicit overflow control */}
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          {/* Main content container with width constraints */}
          <div className="relative w-full max-w-6xl mx-auto px-8 overflow-hidden">
            
            {/* Background text */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10 overflow-hidden">
              <h2 className="text-9xl font-black text-white whitespace-nowrap">
                VIDEO SHOWCASE
              </h2>
            </div>

            {/* Progress indicator */}
            <div className="absolute top-8 left-8 text-white z-10">
              <div className="text-sm opacity-60 mb-2">
                {Math.round(scrollProgress * 100)}% Complete
              </div>
              <div className="w-32 h-1 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-white transition-all duration-300"
                  style={{ width: `${scrollProgress * 100}%` }}
                />
              </div>
            </div>

            {/* Video cards container with explicit positioning */}
            <div className="relative h-96 flex items-center justify-center overflow-hidden">
              {/* Cards wrapper to ensure proper containment */}
              <div className="relative w-80 h-80 overflow-hidden">
                {videos.map((video, index) => (
                  <div 
                    key={video.id}
                    className="absolute top-0 left-0 w-80 h-80 bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ease-out"
                    style={getCardTransform(index)}
                  >
                    {/* Full video background */}
                    <div className="relative w-full h-full overflow-hidden">
                      <video 
                        src={video.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Video overlay with content */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <h3 className="text-xl font-bold mb-2">
                            {video.title}
                          </h3>
                          <p className="text-gray-200 text-sm leading-relaxed mb-4">
                            {video.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-300">
                              Video {index + 1} of {videos.length}
                            </span>
                            <div className="flex items-center space-x-2">
                              <div className="text-xs bg-black bg-opacity-50 px-2 py-1 rounded">
                                {video.duration}
                              </div>
                              <button className="text-white hover:text-blue-300 text-sm font-medium bg-blue-500 bg-opacity-80 px-3 py-1 rounded">
                                Watch Full
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Current video indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center z-10">
              <div className="text-lg font-semibold mb-2">
                {scrollProgress > 0 ? videos[currentVideoIndex]?.title : 'Start Scrolling'}
              </div>
              <div className="flex space-x-2 justify-center">
                {videos.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index <= currentVideoIndex ? 'bg-white' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content after section */}
      <div className="h-screen bg-gradient-to-b from-green-500 to-blue-500 flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-5xl font-bold mb-4">Continue Exploring</h2>
          <p className="text-xl">Normal scrolling resumes here</p>
        </div>
      </div>
    </div>
  );
};

export default ScrollVideoCards;