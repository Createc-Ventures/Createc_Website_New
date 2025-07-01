import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye, Filter } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react"; // already imported useState and useNavigate

const projects = [
  {
    id: "morex",
    category: "Technology",
    title: "Morex Asset Management",
    description: "A sleek and responsive website with Salesforce integration and Google Analytics tracking.",
    image: "/assets/img/cover/4.png",
    tags: ["React Website", "Salesforce Integration"],
    demoUrl: "https://demo.morex.com",
    caseStudyUrl: "https://createc.com/case-study/morex",
  },
  {
    id: "bts",
    category: "Technology",
    title: "BTS.AI",
    description: "Data-driven campaign to grow engagement across all major platforms.",
    image: "/assets/img/cover/1.png",
    tags: ["React Website", "Social Media"],
    demoUrl: "https://demo.socialboost.com",
    caseStudyUrl: "https://createc.com/case-study/social-boost",
  },
  {
    id: "Skor",
    category: "Marketing",
    title: "Skor AI",
    description: "Enterprise-grade customer management built with RESTful APIs.",
    image: "/assets/img/cover/2.png",
    tags: ["QA Testing","Social Media","User Aquisition"],
    demoUrl: "https://demo.fintrac.com",
    caseStudyUrl: "https://createc.com/case-study/fintrac",
  },
  {
    id: "AAX",
    category: "Marketing",
    title: "AAXGAMING",
    description: "Visual identity revamp and digital storytelling.",
    image: "/assets/img/cover/3.png",
    tags: ["Social Media", "Video Production"],
    demoUrl: "https://demo.luxbrand.com",
    caseStudyUrl: "https://createc.com/case-study/lux",
  },
  {
    id: "gamedome",
    category: "Marketing",
    title: "GameDome",
    description: "Real-time device monitoring system with cloud analytics.",
    image: "/assets/img/cover/5.png",
    tags: ["Video Production", "Social Media","Branding"],
    demoUrl: "https://demo.iotdashboard.com",
    caseStudyUrl: "https://createc.com/case-study/iot-dashboard",
  },
];

const OurWork = () => {
  const [filter, setFilter] = useState("All");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);


  const filteredProjects = projects.filter(
    (project) => filter === "All" || project.category === filter
  );

  return (
    <section>
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Navigation />

      {/* Background Gradient */}
      {/* Hero Section */}
      <div className="text-center py-32">
        <h1 className="text-5xl font-bold text-createc-orange mb-4">Our Work</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our collection of carefully crafted projects that showcase innovation, creativity, and technical excellence across various industries.
        </p>
      </div>

      {/* Filter Controls */}
      <div className="flex items-center justify-center flex-wrap gap-3 mb-10">
        <span className="flex items-center gap-1 text-sm text-gray-500">
          <Filter className="w-4 h-4" /> Filter by:
        </span>
        {['All', 'Technology','Marketing'].map((cat) => (
          <Button
            key={cat}
            variant={filter === cat ? "default" : "outline"}
            className="text-sm px-4 py-1.5"
            onClick={() => setFilter(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="w-[420px] group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 animate-fade-in cursor-pointer"
            style={{ animationDelay: `${index * 150}ms` }}
            onMouseEnter={() => setHoveredCard(project.id)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => navigate(`/portfolio/${project.id}`)}
          >
            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${hoveredCard === project.id ? "opacity-100" : "opacity-0"}`}>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex gap-2 mb-3">
                    <Button
                      size="sm"
                      className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/20"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.demoUrl, "_blank");
                      }}
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/20"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.caseStudyUrl, "_blank");
                      }}
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      Case Study
                    </Button>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 left-4">
                <Badge variant="secondary" className="bg-white/90 text-gray-700 backdrop-blur-sm">
                  {project.category}
                </Badge>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-createc-orange transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <Badge
                    key={i}
                    variant="outline"
                    className="text-xs bg-orange-50 text-createc-orange border-yellow-200 hover:bg-orange-100 transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-200 rounded-2xl transition-colors duration-300 pointer-events-none" />
          </div>
          
        ))}
      </div>
      
    </div>
    <Footer />
    </section>
  );
};

export default OurWork;
