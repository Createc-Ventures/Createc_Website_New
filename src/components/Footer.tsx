import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const socialLinks = [
  {
    name: 'instagram',
    icon: Instagram,
    url: 'https://www.instagram.com/createc.solutions/?hl=en',
  },
  {
    name: 'linkedin',
    icon: Linkedin,
    url: 'https://www.linkedin.com/company/createc-solutions-llp/',
  },
];

const Footer = () => {
  return (
    <footer className="bg-createc-orange text-black py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-montserrat font-bold">CREATEC</h2>
            <p className="text-sm opacity-80 mt-1">Where Creativity Meets Innovation</p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map(({ name, icon: Icon, url }, index) => (
              <a 
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-black bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-colors"
              >
                <span className="sr-only">{name}</span>
                <Icon className="w-5 h-5" />
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
                <p>Email: Info@createc.in</p>
                <p>Phone: +91 7057731716</p>
              </address>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 gap-x-4">
                <ul className="space-y-2">
                  {['Home', 'About', 'Services'].map((item, index) => (
                    <li key={index}>
                      <a href={`#${item.toLowerCase()}`} className="text-sm text-gray-800 hover:text-black transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2">
                  {['Team', 'Process', 'Our Work'].map((item, index) => (
                    <li key={index}>
                      <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm text-gray-800 hover:text-black transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
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
