import { Building2, Users, Target, Zap, MapPinHouse } from 'lucide-react';

export const CompanySection = () => {
  return (
    <section className="py-20 px-4 bg-background bg-createc-platinum">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-createc-orange">Our Story</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-createc-charcoal">
            Born from a shared passion for innovation and problem-solving, we are a nimble startup on a mission to 
            make technology more impactful and accessible. Though small in size, our ambitions are bold, collaborating 
            with clients across diverse industries to deliver agile, tailored solutions. Every step of our journey is 
            driven by curiosity, creativity, and a commitment to turning ideas into scalable, high-impact digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-createc-orange">Who We Are</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are a passionate team of technologists, creators, and problem-solvers united by a common
              goal, to build solutions that make a real difference. With a startup spirit and a growth mindset, 
              we partner with clients across industries to tackle challenges head-on and unlock new opportunities through innovation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Operating from our core base and extending to remote collaborators worldwide, we function as one seamless team. 
              Our diverse perspectives, hands-on expertise, and shared commitment to excellence empower us to deliver forward-thinking, 
              scalable solutions that not only meet but exceed expectations.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
  <div className="text-center p-6 rounded-lg border border-white/20 bg-white/10 backdrop-blur shadow-md">
    <Building2 className="w-12 h-12 mx-auto mb-4 text-createc-orange" stroke="currentColor" />
    <h4 className="text-2xl font-bold mb-2">2025</h4>
    <p className="text-muted-foreground">Founded</p>
  </div>
  <div className="text-center p-6 rounded-lg border border-white/20 bg-white/10 backdrop-blur shadow-md">
    <MapPinHouse className="w-12 h-12 mx-auto mb-4 text-createc-orange" stroke="currentColor" />
    <h4 className="text-2xl font-bold mb-2">Pune</h4>
    <p className="text-muted-foreground">Headquarters</p>
  </div>
  <div className="text-center p-6 rounded-lg border border-white/20 bg-white/10 backdrop-blur shadow-md">
    <Target className="w-12 h-12 mx-auto mb-4 text-createc-orange" stroke="currentColor" />
    <h4 className="text-2xl font-bold mb-2">5+</h4>
    <p className="text-muted-foreground">Projects Delivered</p>
  </div>
  <div className="text-center p-6 rounded-lg border border-white/20 bg-white/10 backdrop-blur shadow-md">
    <Zap className="w-12 h-12 mx-auto mb-4 text-createc-orange" stroke="currentColor" />
    <h4 className="text-2xl font-bold mb-2">24/7</h4>
    <p className="text-muted-foreground">Support</p>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};
