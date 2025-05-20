import React from "react";

const TeamSection = () => {
  const team = [
    {
      name: "Apoorva Bordoloi",
      role: "Co-Founder & CTO",
      image:
        "https://images.squarespace-cdn.com/content/v1/5e335c197ce81d501c607a07/43a23995-70da-44ce-a4cb-a37df62aea6c/male-professional-headshot-tips-mens-corporate-headshots-guide.jpg",
      description:
        "With 4 years of experience in software development, data science, AI engineering, and system architecture; driving the tech vision and building robust, scalable solutions.",
    },
    {
      name: "Ranjit Dhoran",
      role: "Co-Founder & CEO",
      image:
        "https://images.squarespace-cdn.com/content/v1/5e335c197ce81d501c607a07/43a23995-70da-44ce-a4cb-a37df62aea6c/male-professional-headshot-tips-mens-corporate-headshots-guide.jpg",
      description: "Bringing 6+ years of experience in product, operations, marketing, and growth; driving strategy and execution to scale impactful solutions."    },
    {
      name: "Shivam Lingade",
      role: "CMO",
      image:
        "https://images.squarespace-cdn.com/content/v1/5e335c197ce81d501c607a07/43a23995-70da-44ce-a4cb-a37df62aea6c/male-professional-headshot-tips-mens-corporate-headshots-guide.jpg",
      description:
        "With 5 years of expertise in team management, marketing, content, and growth strategy; leading initiatives that drive brand presence and business expansion.",
    },
  ];

  return (
    <section
      id="team"
      className="section-padding relative"
      style={{ backgroundColor: "#D9D9D9" }}
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-createc-orange mb-2">
            Meet the Leadership
          </h2>
          <div className="w-24 h-1 bg-createc-purple mx-auto rounded-full"></div>
          <p className="mt-6 max-w-2xl mx-auto text-createc-charcoal">
            Our talented team of innovators, creators, and strategists is dedicated
            to bringing your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="relative rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg
              overflow-hidden cursor-pointer
              transform transition duration-500
              hover:scale-105
              hover:shadow-[0_0_25px_rgba(236, 124, 48,0.7)]
              hover:animate-pulse"
              style={{ willChange: "transform" }}
            >
              <div className="relative h-72 overflow-hidden rounded-t-xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-createc-orange/70 to-transparent opacity-0 hover:opacity-60 transition-opacity duration-500 rounded-t-xl"></div>
              </div>

              <div className="p-6 text-gray-900">
                <h3 className="font-montserrat font-bold text-xl text-createc-orange">
                  {member.name}
                </h3>
                <p className="text-createc-purple font-semibold mb-3">{member.role}</p>
                <p className="text-gray-700 text-sm">{member.description}</p>

                <div className="mt-4 flex space-x-3">
                  {/* Social icons - placeholders */}
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-createc-orange hover:text-white transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-createc-yellow opacity-10 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-createc-orange opacity-10 rounded-tr-full"></div>
    </section>
  );
};

export default TeamSection;
