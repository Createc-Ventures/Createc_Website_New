import React from "react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const videoCards = [
  {
    src: "https://createc-web-assets.s3.ap-south-1.amazonaws.com/website-videos/AA1.mp4",
    
    title: "AAXGAMING",
    instagram: "https://www.instagram.com/aaxgaming/?hl=en",
  },
  {
    src: "https://createc-web-assets.s3.ap-south-1.amazonaws.com/website-videos/skor1.mp4",
    title: "Skor AI",
    instagram: "https://www.instagram.com/theskorai/?hl=en",
  },
  {
    src: "https://createc-web-assets.s3.ap-south-1.amazonaws.com/website-videos/gamedome1.mp4",
    title: "GAME DOME",
    instagram: "https://www.instagram.com/gamedome_/?hl=en",
  },
  {
    src: "https://createc-web-assets.s3.ap-south-1.amazonaws.com/website-videos/gamedome2.mp4",
    title: "Game Dome",
    instagram: "https://www.instagram.com/gamedome_/?hl=en",
  },
  {
    src: "https://createc-web-assets.s3.ap-south-1.amazonaws.com/website-videos/gamedome3.mp4",
    title: "Game Dome",
    instagram: "https://www.instagram.com/gamedome_/?hl=en",
  },
];

export default function HoverVideoCarousel() {
  return (
    <section id="portfolio">
      <div className="relative w-full py-10" style={{ backgroundColor: "#D9D9D9" }}>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-createc-blue mb-2 animate-float">
              Our Work
            </h2>
            <div className="w-24 h-1 bg-createc-purple mx-auto rounded-full"></div>
            <p className="mt-6 max-w-2xl mx-auto text-gray-800">
              Explore our portfolio of innovative digital solutions for clients across industries
            </p>
          </div>
        </div>

        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...videoCards, ...videoCards].map((card, index) => (
            <div
              key={index}
              className="relative group rounded-2xl overflow-hidden shadow-md w-[300px] h-[450px] flex-shrink-0 transform transition-transform duration-300 hover:scale-105 mx-3"
            >
              <video
                src={card.src}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
              />

              {/* Instagram icon centered */}
              <a
                href={card.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <Instagram size={40} color="#ec7c30" />
              </a>

              {/* Title bottom-left */}
              <div className="absolute bottom-4 left-4 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h2 className="text-lg font-bold text-[#ec7c30]">{card.title}</h2>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
