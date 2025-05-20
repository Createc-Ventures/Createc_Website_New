
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import WelcomeSection from '@/components/WelcomeSection';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import ServicesSection from '@/components/ServicesSection';
import OurServicesSection from '@/components/OurServicesSection';
import ProcessSection from '@/components/ProcessSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Projects from '@/components/projects';
import TestimonialCarousel from '@/components/TestimonialSection';
import Website from '@/components/website';
import HeroSectionAlt from '@/components/herosectionalt';
import SolutionS from '@/components/SolutionS';

const Index = () => {
  // Enhanced scroll animation function
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on page load
    
    // Stagger animation on page load
    const staggerItems = document.querySelectorAll('.stagger-item');
    staggerItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('active');
      }, 200 * index);
    });
    
    // Parallax effect on scroll
    const parallaxElements = document.querySelectorAll('.parallax');
    const handleParallaxScroll = () => {
      const scrollY = window.scrollY;
      parallaxElements.forEach((element: Element) => {
        const speed = element.getAttribute('data-speed') || '0.1';
        const movement = scrollY * parseFloat(speed);
        if (element instanceof HTMLElement) {
          element.style.transform = `translateY(${movement}px)`;
        }
      });
    };
    
    window.addEventListener('scroll', handleParallaxScroll);
    
    // Cursor follower effect
    const cursorFollower = document.createElement('div');
    cursorFollower.classList.add('cursor-follower');
    document.body.appendChild(cursorFollower);
    
    const handleMouseMove = (e: MouseEvent) => {
      cursorFollower.style.left = e.clientX + 'px';
      cursorFollower.style.top = e.clientY + 'px';
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleParallaxScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeChild(cursorFollower);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <style>{`
        
        
        .parallax {
          will-change: transform;
        }
        
        @keyframes float-around {
          0% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(10px, -10px) rotate(5deg); }
          66% { transform: translate(-10px, 10px) rotate(-5deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        
        .float-around {
          animation: float-around 15s ease-in-out infinite;
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px rgba(252, 181, 8, 0.5); }
          50% { box-shadow: 0 0 20px rgba(236, 124, 48, 0.8); }
        }
        
        .glow-effect {
          animation: glow 3s ease-in-out infinite;
        }
      `}</style>
      <Navigation />
      <HeroSectionAlt />
      
      
      
      <AboutSection />
      
      <SolutionS />
      <OurServicesSection />
      
      <TeamSection />
      
      <Projects />
      <Website />
      
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
