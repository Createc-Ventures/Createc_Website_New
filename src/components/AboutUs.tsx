import React from 'react';

const AboutUs = () => {
  return (
    <section id='about' className="bg-createc-platinum text-createc-charcoal py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        
        {/* Left Text Section */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold uppercase text-createc-orange">About Us</h2>
          <p className="text-lg leading-relaxed">
            At Createc, we blend creativity with technology to deliver comprehensive digital solutions. From managing dynamic social media campaigns to developing sleek websites and user-friendly apps, we ensure every brand stands out in the digital space.
            <br/><br/>Our mission is to help brands elevate their digital presence through innovative and tailored solutions.
          </p>
        </div>

        {/* Right Video Section */}
        <div className="md:w-1/2 relative">
          <div className="border-r-[6px] border-b-[6px] border-createc-yellow">
            <video 
              src="\assets\vid\CREATEC.mp4" // replace with the correct path to your video
              autoPlay
              muted
              loop
              playsInline
              className="w-full object-cover"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default AboutUs;
