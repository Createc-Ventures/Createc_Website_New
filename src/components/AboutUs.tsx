import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative bg-[#d9d9d9] py-24 px-4 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="bg-white p-10 rounded-xl shadow-md relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What We're All About
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            At Createc, we blend creativity with technology to deliver
            comprehensive digital solutions.
          </p>
          <p className="text-gray-700 text-lg">
            Our mission is to help brands elevate their digital presence
            through innovative and tailored solutions.
          </p>
        </div>

        {/* Planetary System */}
        <div className="relative w-[600px] h-[600px] flex items-center justify-center">
          {/* Central Circle - Solution */}
          <div className="absolute w-32 h-32 bg-[#f7b500] rounded-full flex items-center justify-center shadow-xl z-10">
            <span className="text-xl font-bold text-gray-800">Solution</span>
          </div>

          {/* Orbiting Wrapper */}
          <motion.div
            className="absolute w-[600px] h-[600px]"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            style={{
              transformOrigin: "center center",
            }}
          >
            {/* Innovation (top) */}
            <div className="absolute top-[-48px] left-1/2 -translate-x-1/2 w-24 h-24 bg-[#fa7d09] rounded-full flex items-center justify-center shadow-md">
              <span className="text-sm font-medium text-black">Innovation</span>
            </div>

            {/* Growth (bottom) */}
            <div className="absolute bottom-[-48px] left-1/2 -translate-x-1/2 w-24 h-24 bg-[#fa7d09] rounded-full flex items-center justify-center shadow-md">
              <span className="text-sm font-medium text-black">Growth</span>
            </div>
          </motion.div>

          {/* Orbit Ring for visual */}
          <div className="absolute w-[600px] h-[600px] border border-black rounded-full z-0" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
