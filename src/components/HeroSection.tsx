import React from "react";

const HeroSection = () => {
  return (
    <div className="h-screen bg-gray-200 p-6 box-border">
      <div className="bg-[#2c3e50] text-white rounded-lg  h-full flex flex-col justify-center items-center text-center shadow-md">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
          Crafting Digital Experience that Inspire
        </h1>
        <p className="mb-8 text-sm md:text-base max-w-xl">
          Place holder text Place holder text Place holder text Place holder text
        </p>
        <button className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-semibold py-2 px-6 rounded-full shadow hover:opacity-90 transition">
          View Our Work
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
