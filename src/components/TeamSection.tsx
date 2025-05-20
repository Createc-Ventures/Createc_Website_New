
import React from 'react';

const TeamSection = () => {
  const team = [
    {
      name: "Apoorva Bordoloi",
      role: "Co-Founder & CTO",
      image: "https://images.squarespace-cdn.com/content/v1/5e335c197ce81d501c607a07/43a23995-70da-44ce-a4cb-a37df62aea6c/male-professional-headshot-tips-mens-corporate-headshots-guide.jpg",
      description: "Tech visionary with expertise in emerging technologies and software solutions."
    },
    {
      name: "Ranjit Dhoran",
      role: "Co-Founder & CEO",
      image: "https://images.squarespace-cdn.com/content/v1/5e335c197ce81d501c607a07/43a23995-70da-44ce-a4cb-a37df62aea6c/male-professional-headshot-tips-mens-corporate-headshots-guide.jpg",
      description: "Strategic leader with a passion for innovation and business growth."
    },
    {
      name: "Shivam Lingade",
      role: "CMO",
      image: "https://images.squarespace-cdn.com/content/v1/5e335c197ce81d501c607a07/43a23995-70da-44ce-a4cb-a37df62aea6c/male-professional-headshot-tips-mens-corporate-headshots-guide.jpg",
      description: "Marketing expert with a creative approach to brand development and strategy."
    }
  ];

  return (
    <section id="team" className="section-padding bg-black relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-createc-blue mb-2">Meet the Leadership</h2>
          <div className="w-24 h-1 bg-createc-purple mx-auto rounded-full"></div>
          <p className="mt-6 text-white max-w-2xl mx-auto">
            Our talented team of innovators, creators, and strategists is dedicated to bringing your vision to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden group hover-scale"
            >
              <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-createc-blue to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              <div className="p-6">
                <h3 className="font-montserrat font-bold text-xl text-createc-blue">{member.name}</h3>
                <p className="text-createc-purple font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
                
                <div className="mt-4 flex space-x-3">
                  {/* Social icons - placeholders */}
                  <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-createc-blue hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-createc-blue hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-createc-blue hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-createc-purple opacity-5 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-createc-blue opacity-5 rounded-tr-full"></div>
    </section>
  );
};

export default TeamSection;
