import React from "react";

interface Website {
  title: string;
  url: string;
}

const websites: Website[] = [
  { title: "OpenAI", url: "https://openai.com" },
  { title: "Iphone", url: "https://www.apple.com/in/store?cid=aos-IN-kwgo-brand" },
  { title: "Samsung", url: "https://www.samsung.com/in/" },
  { title: "Morex Asset Management", url: "http://morex-web.vercel.app" },
];

const InfiniteWebsiteCarousel: React.FC = () => {
  const items: Website[] = [...websites, ...websites]; // Duplicated for looping

  return (
    <div className="w-full  py-12 flex flex-col items-center gap-10 bg-createc-platinum">
      {/* Keyframe animation and hover pause */}
      <style>
        {`
          @keyframes scrollLeftToRight {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0%);
            }
          }

          .scroll-wrapper:hover .animate-left-to-right {
            animation-play-state: paused;
          }

          .animate-left-to-right {
            animation: scrollLeftToRight 40s linear infinite;
            animation-play-state: running;
          }
        `}
      </style>

      {/* Scrolling Cards */}
      <div className="overflow-hidden w-full scroll-wrapper ">
        <div className="flex w-max animate-left-to-right whitespace-nowrap ">
          {items.map((site, idx) => (
            <div
              key={idx}
              className="w-[500px] h-[400px] mx-6 rounded-2xl overflow-hidden  bg-createc-platinum"
            >
              <div className="p-4 font-semibold text-2xl text-[#ec7c30]">{site.title}</div>
              <iframe
                src={site.url}
                title={site.title}
                className="w-full h-[320px] border-0 rounded-xl"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Button below the cards */}
      <button className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-semibold px-8 py-3 rounded-full shadow-md flex items-center gap-2 transition hover:scale-105">
        View Full Portfolio
        <span className="text-xl">→</span>
      </button>
    </div>
  );
};

export default InfiniteWebsiteCarousel;
