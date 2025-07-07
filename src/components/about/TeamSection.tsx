import { Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const teamMembers = [
  {
    name: 'Ranjit Dhoran',
    role: 'CEO & Co-Founder',
    image: 'assets/img/3.png',
    bio: 'Visionary leader with 6+ years in marketing, passionate about innovation and team growth.',
    social: {
      linkedin: 'https://www.linkedin.com/in/ranjit-dhoran17/',
    }
  },
  {
    name: 'Apoorva Bordoloi',
    role: 'CTO & Co-Founder',
    image: 'assets/img/1.png',
    bio: '4 years of experience in software development, data science, AI engineering.',
    social: {
      linkedin: 'https://www.linkedin.com/in/apoorva-bordoloi/',
    }
  },
  {
    name: 'Shivam Lingade',
    role: 'CMO',
    image: 'assets/img/2.png',
    bio: 'With 5 years of expertise in team management, marketing, content, and growth strategy.',
    social: {
      linkedin: 'https://www.linkedin.com/in/shivam-lingade-996b12215/',
    }
  },
];

export const TeamSection = () => {
  return (
    <section className="py-20 px-4 bg-createc-platinum">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-createc-orange">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The talented individuals who make our vision a reality
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>
                <div className="flex space-x-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-8 h-8 hover:bg-blue-100 hover:text-blue-600"
                    asChild
                  >
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
