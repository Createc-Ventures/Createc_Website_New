import { useState } from "react";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { Megaphone, Cpu, Brush, TrendingUp, Camera, PenTool, Database, Code, MonitorSmartphone, ShieldCheck } from "lucide-react";

const marketingServices = [
  { id: 1, title: "Product marketing", icon: <TrendingUp className="w-6 h-6 text-pink-600" />, desc: "Crafting magnetic brand identities that resonate and convert." },
  { id: 2, title: "Brand management", icon: <Camera className="w-6 h-6 text-pink-600" />, desc: "Visually explosive content tailored for impact." },
  { id: 3, title: "Seo and paid ads", icon: <Megaphone className="w-6 h-6 text-pink-600" />, desc: "Platform-native tactics that drive conversations and conversions." },
  { id: 4, title: "Content management", icon: <Brush className="w-6 h-6 text-pink-600" />, desc: "UI/UX visuals engineered for visual dominance." },
  { id: 5, title: "Marketing automation", icon: <PenTool className="w-6 h-6 text-pink-600" />, desc: "Punchy words that sell, convert, and compel." },
  { id: 6, title: "User acquisition and growth", icon: <TrendingUp className="w-6 h-6 text-pink-600" />, desc: "Strategic collabs with high-reach creators." }
];

const techServices = [
  { id: 1, title: "AI & Blockchain Development", icon: <MonitorSmartphone className="w-6 h-6 text-blue-600" />, desc: "Cross-platform mobile apps built for scale." },
  { id: 2, title: "Full Stack Software Solutions", icon: <Database className="w-6 h-6 text-blue-600" />, desc: "Microservice and monolith systems with uptime in mind." },
  { id: 3, title: "Mobile & Web Development", icon: <Code className="w-6 h-6 text-blue-600" />, desc: "CI/CD pipelines, containers, and cloud infra at hyperspeed." },
  { id: 4, title: "Product & Saas Solution", icon: <Cpu className="w-6 h-6 text-blue-600" />, desc: "Machine learning + APIs for smart, reactive systems." },
  { id: 5, title: "Research and emerging tech", icon: <ShieldCheck className="w-6 h-6 text-blue-600" />, desc: "Vulnerability-proof strategies that secure user trust." },
  { id: 6, title: "System Architecture", icon: <Code className="w-6 h-6 text-blue-600" />, desc: "Plug-and-play endpoints for seamless data exchange." }
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
    <div className="w-full px-4 py-6 space-y-12">
      <div>
        <h2 className="text-xl font-bold mb-4 text-pink-700">Marketing Services</h2>
        <ServiceCarousel items={marketingServices} color="pink" />
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4 text-blue-700">Tech Services</h2>
        <ServiceCarousel items={techServices} color="blue" />
      </div>
    </div>
  );
}
