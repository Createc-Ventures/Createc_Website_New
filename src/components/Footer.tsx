import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-createc-orange text-black py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-montserrat font-bold">CREATEC</h2>
            <p className="text-sm opacity-80 mt-1">Where Creativity Meets Technology</p>
          </div>

          <div className="flex space-x-6">
            {['facebook', 'twitter', 'instagram', 'linkedin'].map((social, index) => (
              <a 
                key={index}
                href="#" 
                className="w-10 h-10 rounded-full bg-black bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-colors"
              >
                <span className="sr-only">{social}</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  {/* SVG paths as before */}
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-black border-opacity-20 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <address className="not-italic text-sm text-gray-800 space-y-2">
                <p>Viman Nagar, Pune 411014</p>
                <p>Email: info@createc.in</p>
                <p>Phone: +91 7057731716</p>
              </address>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'About', 'Services', 'Team', 'Process', 'Portfolio', 'Contact'].map((item, index) => (
                  <li key={index}>
                    <a href={`#${item.toLowerCase()}`} className="text-sm text-gray-800 hover:text-black transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-gray-800">
          <p>© {new Date().getFullYear()} CREATEC VENTURES. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
