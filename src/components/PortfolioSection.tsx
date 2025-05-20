import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Image, Box, GalleryVertical, Gem } from 'lucide-react';

const PortfolioSection = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const clients = [
    {
      name: "JetSynthesys",
      image: "https://ei.marketwatch.com/Multimedia/2017/03/29/Photos/ZQ/MW-FJ245_wr_art_20170329122150_ZQ.jpg?uuid=d02fbdae-149b-11e7-bba1-001cc448aede",
      description: "Custom Auction System",
      icon: <Box className="w-10 h-10 text-createc-blue" />
    },
    {
      name: "Skor AI",
      image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd",
      description: "User Acquisition",
      icon: <GalleryVertical className="w-10 h-10 text-createc-purple" />
    },
    {
      name: "Skor AI",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692",
      description: "QA Product Testing",
      icon: <Gem className="w-10 h-10 text-createc-blue" />
    },
    {
      name: "Game Dome",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      description: "Brand Growth",
      icon: <Image className="w-10 h-10 text-createc-purple" />
    }
  ];

  // Custom hook for mouse parallax effect
  const useMouseParallax = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    
    useEffect(() => {
      const handleMouseMove = (event: MouseEvent) => {
        setMousePosition({
          x: (event.clientX / window.innerWidth) - 0.5,
          y: (event.clientY / window.innerHeight) - 0.5
        });
      };
      
      window.addEventListener('mousemove', handleMouseMove);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);
    
    return mousePosition;
  };
  
  const mousePosition = useMouseParallax();
  
  return (
    <section id="portfolio" className="section-padding relative overflow-hidden" style={{ backgroundColor: "#D9D9D9" }}>
      <div className="absolute inset-0 tech-grid opacity-30"></div>
      
      {/* Floating Elements */}
      <div 
        className="absolute top-20 left-20 w-32 h-32 bg-createc-blue opacity-10 rounded-full animate-float"
        style={{ 
          transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)` 
        }}
      ></div>
      <div 
        className="absolute bottom-20 right-20 w-40 h-40 bg-createc-purple opacity-10 rounded-lg transform rotate-45 animate-float"
        style={{ 
          animationDelay: '1s',
          transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px) rotate(45deg)` 
        }}
      ></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-createc-blue mb-2 animate-float">Our Work</h2>
          <div className="w-24 h-1 bg-createc-purple mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-700 max-w-2xl mx-auto">
            Explore our portfolio of innovative digital solutions for clients across industries
          </p>
        </div>
        
        {/* Interactive Client Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <motion.div 
              key={index}
              className="reveal stagger-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <Card className={`h-full overflow-hidden transition-all duration-500 hover:shadow-2xl ${activeCard === index ? 'scale-105' : ''}`}>
                <div className="h-48 relative overflow-hidden group">
                  <img 
                    src={client.image} 
                    alt={client.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                    <div className="transform transition-transform duration-300 group-hover:translate-y-0 translate-y-4">
                      <div className="mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        {client.icon}
                      </div>
                      <h3 className="font-montserrat font-bold text-xl text-white">{client.name}</h3>
                      <p className="text-white/80 transform transition-all duration-300 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-20">
                        {client.description}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-gradient-to-r from-createc-blue/5 to-createc-purple/5">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium text-createc-blue">{client.name}</h4>
                    <motion.div 
                      whileHover={{ scale: 1.2, rotate: 90 }}
                      transition={{ duration: 0.3 }}
                    >
                      <a 
                        href="https://drive.google.com/drive/folders/1_aKINi8P4pzKtdMARce0CJGalimi-a8a" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-createc-purple bg-opacity-10 text-createc-purple"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </motion.div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="mt-12 text-center reveal">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="https://drive.google.com/drive/folders/1_aKINi8P4pzKtdMARce0CJGalimi-a8a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="gradient-bg text-white font-montserrat font-semibold px-8 py-4 rounded-full inline-flex items-center shadow-lg transition-all duration-300"
            >
              <span className="mr-2">View Full Portfolio</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
