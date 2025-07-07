import { m } from "framer-motion";
import React from "react";

const TeamSection = () => {
  const team = [
    {
      name: "Apoorva Bordoloi",
      role: "Co-Founder & CTO",
      link: "https://www.linkedin.com/in/apoorva-bordoloi/",
      image: "assets/img/1.png",
      description:
        "With 4 years of experience in software development, data science, AI engineering, and system architecture, driving the tech vision and building robust, scalable solutions.",
    },
    {
      name: "Ranjit Dhoran",
      role: "Co-Founder & CEO",
      link: "https://www.linkedin.com/in/ranjit-dhoran17/",
      image: "assets/img/3.png",
      description:
        "Bringing 6+ years of experience in product, operations, marketing, and growth; driving strategy and execution to scale impactful solutions.",
    },
    {
      name: "Shivam Lingade",
      role: "CMO",
      link: "https://www.linkedin.com/in/shivam-lingade-996b12215/",
      image: "assets/img/2.png",
      description:
        "With 5 years of expertise in team management, marketing, content, and growth strategy, leading initiatives that drive brand presence and business expansion.",
    },
    
  ];

  return (
    <section
      id="team"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-createc-platinum"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-createc-orange mb-2">
            Meet the Leadership
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-createc-purple mx-auto rounded-full"></div>
          <p className="mt-5 text-base sm:text-lg max-w-2xl mx-auto text-createc-charcoal">
            Our talented team of innovators, creators, and strategists is dedicated
            to bringing your vision to life.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white/30 backdrop-blur-lg border border-white/30 rounded-xl shadow-lg overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-[0_0_25px_rgba(236,124,48,0.7)]"
            >
              {/* Image */}
              <div className="relative h-60 sm:h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-createc-orange/70 to-transparent opacity-0 hover:opacity-60 transition-opacity duration-500 rounded-t-xl"></div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 text-gray-900">
                <h3 className="text-lg sm:text-xl font-bold text-createc-orange">
                  {member.name}
                </h3>
                <p className="text-createc-purple font-semibold text-sm sm:text-base mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">{member.description}</p>

                {/* Social */}
                {member.link && (
                  <div className="mt-4">
                    <a
                      href={member.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-8 h-8 rounded-full bg-white items-center justify-center hover:bg-createc-orange hover:text-white transition-colors"
                    >
                      <img
                        src="/assets/img/linedin.svg"
                        alt="LinkedIn"
                        className="w-4 h-4"
                      />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
