import React from 'react';

const videos = [
  {
    src: 'https://www.morexasset.com/',
    label: 'Website 1'
  },
  {
    src: 'https://tailwindcss.com/plus',
    label: 'Website 2'
  },
  {
    src: 'https://example3.com',
    label: 'Website 3'
  },
  {
    src: 'https://example4.com',
    label: 'Website 4'
  },
];

export default function VideoCarousel() {
  const repeatedVideos = Array(100).fill(videos).flat(); // Repeat enough times to create seamless loop

  return (
    <div className="relative overflow-hidden w-full bg-createc-platinum py-8">
      <div
        className="flex gap-4 whitespace-nowrap animate-[scrollRight_100s_linear_infinite]"
        style={{
          animationName: 'scrollRight',
          animationDuration: '100s',
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
        }}
      >
        {repeatedVideos.map((video, index) => (
          <div
            key={index}
            className="relative w-[700px] h-[400px] flex-shrink-0 overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-105"
          >
            <iframe
              src={video.src}
              className="w-full h-full border-none"
              title={`iframe-${index}`}
              loading="lazy"
            ></iframe>
            <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-sm px-3 py-1 rounded pointer-events-none">
              {video.label}
            </div>
          </div>
        ))}
      </div>

      {/* Inline keyframes for scroll animation */}
      <style>
        {`
          @keyframes scrollRight {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(0); }
          }
        `}
      </style>
    </div>
  );
}
