import { Heart, Shield, Lightbulb, Users, HeartHandshake } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Passion',
    description: 'We are passionate about what we do and believe in creating solutions that make a real difference.'
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We conduct business with the highest level of integrity and transparency in all our interactions.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We embrace new technologies and creative approaches to solve complex challenges.'
  },
  {
    icon: HeartHandshake,
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and foster an environment of mutual respect and support.'
  }
];

export const ValuesSection = () => {
  return (
    <section className="py-20 px-4  bg-createc-platinum">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-createc-orange">Our Values</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The principles that guide everything we do and shape our company culture
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
  {values.map((value, index) => (
    <div 
      key={index} 
      className="text-center p-8 rounded-xl border border-white/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-white/10 backdrop-blur-md"
    >
      <div className="w-16 h-16 mx-auto mb-6  rounded-full flex items-center justify-center">
        <value.icon className="w-16 h-16 text-createc-orange" />
      </div>
      <h3 className="text-xl font-bold mb-4">{value.title}</h3>
      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};
