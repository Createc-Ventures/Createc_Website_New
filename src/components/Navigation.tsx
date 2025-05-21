import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    
    { name: 'Team', href: '#team' },
    { name: 'Our Work', href: '#portfolio' },
    
  ];

  return (
    <nav
      className={cn(
        'fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] z-50 transition-all duration-500',
        isScrolled
          ? ' bg-white bg-opacity-10 backdrop-blur-md shadow-lg py-3 rounded-2xl w-[60%]'
          : 'bg-transparent py-6'
      )}

    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#home" className="text-createc-orange font-montserrat font-bold text-2xl bg-createc-platinum p-2 text-center rounded-2xl">
            CREATEC
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-black hover:text-createc-orange font-montserrat font-medium text-sm transition duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-4 py-2 rounded-full text-white font-medium text-sm bg-gradient-to-r from-[#ec7c30] to-[#fcb508] hover:scale-105 hover:shadow-lg transition duration-300 transform"
          >
            Contact
          </a>
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg py-4 px-4 rounded-b-2xl">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-800 hover:text-createc-purple font-montserrat font-medium text-sm py-2 transition duration-300"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-2 rounded-full text-white font-medium text-sm bg-gradient-to-r from-[#ec7c30] to-[#fcb508] hover:scale-105 hover:shadow-lg transition duration-300 transform text-center"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
