import React from 'react';

// List of client logos
const clientLogos = [
  "/assets/img/logo/1.png",
  "/assets/img/logo/2.png",
  "/assets/img/logo/5.png",
  "/assets/img/logo/3.png",
  
  "/assets/img/logo/4.png",
];

// Repeat logos for seamless infinite effect
const repeatedLogos = [...clientLogos, ...clientLogos];

const OurClientsCarousel = () => {
  return (
    <section className="py-10 bg-createc-platinum overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-8">Our Clients</h2>
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
          {repeatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0   w-64 h-48 flex items-center justify-center"
              style={{ marginRight: '0px' }}
            >
              <img
                src={logo}
                alt={`Client ${index + 1}`}
                className=""
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClientsCarousel;
