import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="bg-createc-platinum text-createc-charcoal py-16 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">

        {/* Left Text Section */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase text-createc-orange">
            About Us
          </h2>
          <p className="text-base sm:text-lg leading-relaxed">
            At Createc, we blend creativity with technology to deliver comprehensive digital solutions.
            From managing dynamic social media campaigns to developing sleek websites and user-friendly apps,
            we ensure every brand stands out in the digital space.
            <br /><br />
            Our mission is to help brands elevate their digital presence through innovative and tailored solutions.
          </p>
          <p>
            <a
              href="/aboutus"
              className="text-base sm:text-lg text-createc-orange hover:text-createc-yellow transition-colors"
            >
              Learn More
            </a>
          </p>
        </div>

        {/* Right Video Section */}
        <div className="w-full md:w-1/2 relative">
          <div className="aspect-w-16 aspect-h-9 w-full rounded-lg overflow-hidden shadow-lg">
            <video
              src="https://createc-web-assets-2.s3.ap-south-1.amazonaws.com/assets/CREATEC+(1).mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
