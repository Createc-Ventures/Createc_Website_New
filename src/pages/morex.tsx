import React from "react";
import { Instagram, Linkedin, Facebook } from "lucide-react";

const HomePage = () => {
  return (
    <div className="bg-[#f4f6f8] text-[#1a1a1a] min-h-screen font-sans">
      {/* Fullscreen Video Header */}
      <header className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-auto h-full min-w-full min-h-screen object-cover z-0"
        >
          <source src="/assets/vid/morex/morex_full.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 flex items-center justify-center h-full w-full bg-black/50 text-white px-8">
          
        </div>
      </header>

      {/* SKOR AI Section */}
      <section className="py-16 px-6 md:px-20 bg-white text-[#2c3e50]">
        <h2 className="text-4xl font-bold mb-4">Morex Asset Management</h2>
        <div className="flex gap-4 mb-6">
          <Instagram size={24} />
          <Linkedin size={24} />
          <Facebook size={24} />
        </div>
        <h3 className="text-2xl font-semibold mb-2">Project Overview</h3>
        <p className="text-lg max-w-4xl leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </section>
    </div>
  );
};

export default HomePage;
