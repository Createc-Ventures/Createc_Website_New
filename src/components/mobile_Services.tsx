import { useState } from "react";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { Megaphone, Cpu, Brush, TrendingUp, Camera, PenTool, Database, Code, MonitorSmartphone, ShieldCheck } from "lucide-react";

const marketingServices = [
  { id: 1, title: "Product marketing", icon: <TrendingUp className="w-6 h-6 text-createc-yellow" />, desc: "Strategic narratives that drive product adoption and customer obsession." },
  { id: 2, title: "Brand management", icon: <Camera className="w-6 h-6 text-createc-yellow" />, desc: "Crafting iconic brand identities that lead markets and spark loyalty." },
  { id: 3, title: "Seo and paid ads", icon: <Megaphone className="w-6 h-6 text-createc-yellow" />, desc: "Precision targeting that ranks, converts, and scales visibility." },
  { id: 4, title: "Content management", icon: <Brush className="w-6 h-6 text-createc-yellow" />, desc: "Seamless content orchestration that fuels engagement and retention." },
  { id: 5, title: "Marketing automation", icon: <PenTool className="w-6 h-6 text-createc-yellow" />, desc: "Intelligent workflows that nurture leads and accelerate pipelines." },
  { id: 6, title: "User acquisition and growth", icon: <TrendingUp className="w-6 h-6 text-createc-yellow" />, desc: "Data-driven growth loops that supercharge user expansion." }
];

const techServices = [
  { id: 1, title: "AI & Blockchain Development", icon: <MonitorSmartphone className="w-6 h-6 text-createc-yellow" />, desc: "Future-first solutions powered by intelligence and immutability." },
  { id: 2, title: "Full Stack Software Solutions", icon: <Database className="w-6 h-6 text-createc-yellow" />, desc: "End-to-end engineering that turns vision into velocity." },
  { id: 3, title: "Mobile & Web Development", icon: <Code className="w-6 h-6 text-createc-yellow" />, desc: "Responsive, robust, and ready for scale—wherever users are." },
  { id: 4, title: "Product & Saas Solution", icon: <Cpu className="w-6 h-6 text-createc-yellow" />, desc: "Scalable platforms built to transform industries." },
  { id: 5, title: "Research and emerging tech", icon: <ShieldCheck className="w-6 h-6 text-createc-yellow" />, desc: "Exploring the edge to build what’s next." },
  { id: 6, title: "System Architecture", icon: <Code className="w-6 h-6 text-createc-yellow" />, desc: "Structuring scalable backbones for tomorrow’s tech ecosystems." }
];

const ServiceCarousel = ({ items, color }) => {
  const [index, setIndex] = useState(0);

  const handleSwipe = (dir) => {
    if (dir === "LEFT") {
      setIndex((prev) => (prev + 1) % items.length);
    } else if (dir === "RIGHT") {
      setIndex((prev) => (prev - 1 + items.length) % items.length);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("LEFT"),
    onSwipedRight: () => handleSwipe("RIGHT"),
    trackMouse: true
  });

  const getOffset = (i) => {
    if (i === index) return 0;
    if (i === (index - 1 + items.length) % items.length) return -100;
    if (i === (index + 1) % items.length) return 100;
    return 2000; // hide others
  };

  return (
    
    <div {...swipeHandlers} className="relative h-48 overflow-hidden">
      {items.map((item, i) => (
        <motion.div
          key={item.id}
          initial={{ x: getOffset(i), scale: i === index ? 1 : 0.8, opacity: i === index ? 1 : 0.3 }}
          animate={{ x: getOffset(i), scale: i === index ? 1 : 0.8, opacity: i === index ? 1 : 0.3 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={`absolute w-4/5 left-[10%] top-0 p-4 bg-white rounded-2xl shadow-xl ${i === index ? "z-10" : "z-0"}`}
        >
          <div className={`p-2 flex justify-center rounded-full`}>{item.icon}</div>
          <h3 className={`text-base font-semibold text-${color}-800 text-center`}>{item.title}</h3>
          <p className="text-sm text-gray-600 text-center">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default function MobileServices() {
  return (
    <div className="w-full px-4 py-6 space-y-12 bg-createc-platinum">
      <div>
        <h2 className="text-xl font-bold mb-4 text-createc-orange">Marketing Services</h2>
        <ServiceCarousel items={marketingServices} color="pink" />
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4 text-createc-orange">Tech Services</h2>
        <ServiceCarousel items={techServices} color="blue" />
      </div>
    </div>
  );
}

