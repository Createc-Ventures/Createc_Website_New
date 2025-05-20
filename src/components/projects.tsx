import React from "react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const videoCards = [
  {
    src: "/assets/vid/4.mp4",
    title: "JetSynthesys",
    subtitle: "Custom Auction System",
    instagram: "#",
  },
  {
    src: "/assets/vid/2.mp4",
    title: "Skor AI",
    subtitle: "User Acquisition",
    instagram: "/assets/vid/2.mp4",
  },
  {
    src: "/assets/vid/3.mp4",
    title: "Skor AI",
    subtitle: "QA Product Testing",
    instagram: "/assets/vid/3.mp4",
  },
  {
    src: "/assets/vid/1.mp4",
    title: "Game Dome",
    subtitle: "Brand Growth",
    instagram: "https://www.instagram.com/gamedome_/?hl=en",
  },
];

export default function HoverVideoCarousel() {
  return (
    <section id="portfolio">
    <div className="relative w-full  py-10 bg-black">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-createc-blue mb-2 animate-float">Our Work</h2>
          <div className="w-24 h-1 bg-createc-purple mx-auto rounded-full"></div>
          <p className="mt-6 text-white max-w-2xl mx-auto">
            Explore our portfolio of innovative digital solutions for clients across industries
          </p>
        </div>
      </div>

      <div className="">
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
              <div className="absolute bottom-4 left-4 right-4 text-white transition-all duration-300 group-hover:bottom-20">
                <h2 className="text-xl font-bold text-[#ec7c30]">{card.title}</h2>
                <p className="text-sm text-[#fcb508]">{card.subtitle}</p>
                <a
                  href={card.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xs"
                >
                  <Instagram color="#ec7c30" className="inline mr-1" />
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
    </section>
  );
}
