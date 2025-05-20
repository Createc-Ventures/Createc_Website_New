import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "The communication style they encouraged made our business stand out. Personalized notes work wonders in client retention.",
    name: "Dustin Green",
    title: "Web Designer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp9xjbWBR5OtL45B_58Dm01d0xSdfh0YPtzQ&s",
  },
  {
    quote:
      "The communication style they encouraged made our business stand out. Personalized notes work wonders in client retention.",
    name: "Sara West",
    title: "Creative Director",
    image: "https://vanderbilthustler.com/wp-content/uploads/2022/11/West_Sara-1200x1200.jpg",
  },
  {
    quote:
      "Every message they crafted was infused with purpose and emotion. It was a joy to collaborate with such a talented team.",
    name: "Alan Cooper",
    title: "Marketing Consultant",
    image: "https://miro.medium.com/v2/resize:fit:2400/1*Wnmk3ItpT_6cKeQUSlc5hg.jpeg",
  },
  {
    quote:
      "The communication style they encouraged made our business stand out. Personalized notes work wonders in client retention.",
    name: "Lena Smith",
    title: "Client Success Manager",
    image: "https://ysm-res.cloudinary.com/image/upload/c_crop,x_738,y_151,w_1798,h_1798/c_fill,f_auto,q_auto:eco,dpr_3,w_650/v1/yms/prod/e48087fd-11c5-4a4b-856d-afbc632f14d4",
  },
  {
    quote:
      "The communication style they encouraged made our business stand out. Personalized notes work wonders in client retention.",
    name: "Lena Smith",
    title: "Client Success Manager",
    image: "https://ysm-res.cloudinary.com/image/upload/c_crop,x_738,y_151,w_1798,h_1798/c_fill,f_auto,q_auto:eco,dpr_3,w_650/v1/yms/prod/e48087fd-11c5-4a4b-856d-afbc632f14d4",
  },
];

export default function DualTestimonialSlider() {
  const [index, setIndex] = useState(0);
  const pageSize = 2;
  const totalPages = Math.ceil(testimonials.length / pageSize);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % totalPages);
  };

  const currentTestimonials = testimonials.slice(
    index * pageSize,
    index * pageSize + pageSize
  );

  return (
    <section id="testimonials">
    <div className="relative py-20 px-4 sm:px-10 overflow-hidden bg-[#D9D9D9]">
      {/* Left & Right Nav Buttons */}
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-createc-blue mb-2 animate-float">Don't Just Take Our Word for It...</h2>
          <div className="w-24 h-1 bg-createc-purple mx-auto rounded-full"></div>
          <p className="mt-6 #2C3E50 max-w-2xl mx-auto">
            Discover how our solutions made a difference—straight from the voices of those who experienced the magic.
          </p>
        </div>
      </div>
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 #2C3E50 text-3xl bg-createc-blue transition hover:bg-createc-purple p-2 rounded-full shadow z-10"
      >
        ❮
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 #2C3E50 text-3xl bg-createc-blue transition hover:bg-createc-purple p-2 rounded-full shadow z-10"
      >
        ❯
      </button>

      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-start"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.5 }}
          >
            {currentTestimonials.map((t, i) => (
              <div key={i} className="flex flex-col items-start">
                {/* Card */}
                <div className="bg-white/10 w-[450px] backdrop-blur-md rounded-xl shadow-lg p-6 #2C3E50 z-10 border border-white/20">
                  “{t.quote}”
                </div>

                {/* Profile Block below the card */}
                <div className="flex items-center gap-4 mt-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-14 h-14 rounded-full border-2 border-createc-blue"
                  />
                  <div className="text-left">
                    <p className="text-createc-blue font-semibold">– {t.name}</p>
                    <p className="text-createc-purple text-sm">{t.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
    </section>
  );
}
