import React from "react";

const BlurredBackgroundImage = ({ src, className = "" }) => {
  return (
    <div
      className={`absolute top-10 left-1/2 transform -translate-x-1/2 w-[400px] md:w-[500px] opacity-20 blur-xl pointer-events-none z-0 ${className}`}
    >
      <img src={src} alt="Background" className="w-full h-auto" />
    </div>
  );
};

export default BlurredBackgroundImage;
