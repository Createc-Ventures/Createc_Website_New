import React, { useEffect, useState } from 'react';

const clientLogos = [
  "assets/img/logo/1.png",
  "assets/img/logo/2.png",
  "assets/img/logo/5.png",
  "assets/img/logo/3.png",
  "assets/img/logo/4.png",
];

const repeatedLogos = [...clientLogos, ...clientLogos];

const OurClientsCarousel = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="py-10 bg-createc-platinum overflow-hidden relative">
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          .animate-scroll-fast {
            animation: scroll 15s linear infinite;
          }
        `}
      </style>

      <h2 className="text-4xl font-bold text-center mb-8">Our Clients</h2>
      <div className="relative w-full overflow-hidden">
        <div
          className={`flex whitespace-nowrap ${
            isMobile ? 'animate-scroll-fast' : 'animate-scroll'
          }`}
        >
          {repeatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center "
              style={{
                width: isMobile ? '120px' : '256px', // slightly larger mobile icons
                height: isMobile ? '90px' : '192px',
                marginRight: '0px',
              }}
            >
              <img src={logo} alt={`Client ${index + 1}`} className="max-h-full max-w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClientsCarousel;
