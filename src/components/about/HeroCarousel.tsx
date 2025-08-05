import { FC } from 'react';

export const HeroCarousel: FC = () => {
  const image = {
    url: '/assets/img/Team/5.png',
    alt: 'Team collaboration with modern technology',
    title: 'Innovation at Heart',
    subtitle: 'Pushing boundaries with cutting-edge solutions'
  };

  return (
    <section
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${image.url})` }}
      aria-label={image.alt}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center px-4 text-white text-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            About Us
          </h1>
          <p
            className="text-lg md:text-xl opacity-90 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            We’re a passionate team building innovative tech to solve real-world problems, driven by purpose, powered by creativity, and focused on impact.
          </p>
        </div>
      </div>
    </section>
  );
};
