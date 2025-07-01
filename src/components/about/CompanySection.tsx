import { Building2, Users, Target, Zap } from 'lucide-react';

export const CompanySection = () => {
  return (
    <section className="py-20 px-4 bg-background bg-createc-platinum">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-createc-orange">Our Story</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-createc-charcoal">
            Founded with a vision to transform the digital landscape, we've grown from a small startup 
            to a leading technology company that serves clients worldwide. Our journey is built on 
            innovation, dedication, and an unwavering commitment to excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-createc-orange">Who We Are</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are a team of passionate professionals who believe in the power of technology 
              to solve complex problems and create meaningful impact. Our diverse backgrounds 
              and shared vision drive us to deliver exceptional solutions that exceed expectations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From our headquarters to remote locations around the globe, we work as one cohesive 
              unit, leveraging our collective expertise to push boundaries and set new standards 
              in our industry.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 bg-card rounded-lg border">
              <Building2 className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h4 className="text-2xl font-bold mb-2">2018</h4>
              <p className="text-muted-foreground">Founded</p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border">
              <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h4 className="text-2xl font-bold mb-2">50+</h4>
              <p className="text-muted-foreground">Team Members</p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border">
              <Target className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h4 className="text-2xl font-bold mb-2">200+</h4>
              <p className="text-muted-foreground">Projects Delivered</p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border">
              <Zap className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h4 className="text-2xl font-bold mb-2">24/7</h4>
              <p className="text-muted-foreground">Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
