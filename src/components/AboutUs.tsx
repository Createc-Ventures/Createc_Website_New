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
        <div className="relative w-[400px] h-[400px] flex items-center justify-center ml-36">
          {/* Central Circle - Solution */}
          <div className="absolute w-32 h-32 rounded-full bg-gradient-to-tr from-yellow-300 via-yellow-500 to-yellow-700 shadow-[inset_0_0_20px_rgba(255,255,255,0.4),0_12px_20px_rgba(0,0,0,0.4)] border-4 border-yellow-600 flex items-center justify-center z-20">
            <span className="text-xl font-bold text-white drop-shadow-lg">Solution</span>
          </div>

          {/* Orbit Ring (behind orbiting items but visible) */}
          <div className="absolute w-[400px] h-[400px] rounded-full border border-gray-700 opacity-30 blur-[1px] z-10" />

          {/* Orbiting Circles */}
          <motion.div
            className="absolute w-[400px] h-[400px] z-30"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            style={{
              transformOrigin: "center center",
            }}
          >
            {/* Innovation */}
            <div className="absolute top-[-48px] left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-orange-200 via-orange-500 to-orange-700 shadow-[inset_0_0_15px_rgba(255,255,255,0.3),0_10px_20px_rgba(0,0,0,0.4)] border-[3px] border-orange-700 flex items-center justify-center">
              <span className="text-sm font-semibold text-white drop-shadow-md">Innovation</span>
            </div>

            {/* Growth */}
            <div className="absolute bottom-[-48px] left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-orange-200 via-orange-500 to-orange-700 shadow-[inset_0_0_15px_rgba(255,255,255,0.3),0_10px_20px_rgba(0,0,0,0.4)] border-[3px] border-orange-700 flex items-center justify-center">
              <span className="text-sm font-semibold text-white drop-shadow-md">Growth</span>
            </div>
          </motion.div>

          {/* Optional glow aura around system */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-yellow-100 opacity-20 blur-3xl z-0" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
