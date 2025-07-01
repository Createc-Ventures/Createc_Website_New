import React from 'react';

const videos = [
  {
    src: '/assets/vid/web1.mp4',
    label: 'Morex Asset Management',
    subtitle: 'Modern Real Estate Platform',
    url: 'https://www.morexasset.com/',
  },
  {
    src: '/assets/vid/web2.mp4',
    label: 'BTS AI',
    subtitle: 'Landing Page',
    url: 'https://www.btsai.net/',
  },
  {
    src: '/assets/vid/web3.mp4',
    label: 'Game Dome',
    subtitle: 'Landing Page',
    url: 'https://www.instagram.com/gamedome_/?hl=en',
  },
];

export default function VideoCarousel() {
  const duplicatedVideos = [...videos, ...videos];

  return (
    <div className="relative overflow-hidden w-full bg-createc-platinum py-8">
      <div
        className="flex gap-4 whitespace-nowrap animate-scrollRight"
        style={{ width: `${duplicatedVideos.length * 700 + duplicatedVideos.length * 16}px` }}
      >
        {duplicatedVideos.map((video, index) => (
          <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="relative w-[700px] h-[400px] flex-shrink-0 overflow-hidden rounded-lg group"
          >
            <video
              src={video.src}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute bottom-4 left-4 text-white z-10">
              <div className="text-createc-orange bg-opacity-60 px-3 py-1 rounded text-lg font-semibold">
                {video.label}
              </div>
              <div className="text-createc-orange bg-opacity-50 px-3 py-1 rounded text-sm mt-1">
                {video.subtitle}
              </div>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex justify-center items-center opacity-0 group-hover:opacity-100">
              <div className="text-createc-yellow px-5 py-2 rounded-full text-xl font-medium">
                Visit
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Keyframes for left-to-right scroll */}
      <style>
        {`
          @keyframes scrollRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }

          .animate-scrollRight {
            animation: scrollRight 40s linear infinite;
          }
        `}
      </style>
    </div>
  );
}
