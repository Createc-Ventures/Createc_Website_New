import { HeroCarousel } from '@/components/about/HeroCarousel';
import { CompanySection } from '@/components/about/CompanySection';
import { TeamSection } from '@/components/about/TeamSection';
import { ValuesSection } from '@/components/about/ValuesSection';
import Navbar from '@/components/Navigation';
import Footer from '@/components/Footer';
const About = () => {
  return (
    <div className="min-h-screen bg-background">
        <Navbar />
      <HeroCarousel />
      <CompanySection />
      <ValuesSection />
      <TeamSection />
        <Footer />
    </div>
  );
};

export default About;
