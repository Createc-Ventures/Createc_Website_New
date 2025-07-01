import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  ExternalLink,
  Eye,
  Calendar,
  Users,
  Target,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Mock project data
const projects = [
  {
    id: "Bts",
    title: "BTS AI",
    category: "Technology",
    longDescription: "We provided BTS.Ai with Website Development and Social Media Management. The custom-built website showcased their AI-driven solutions with a sleek, modern interface designed for clarity and engagement. Our social media strategy focused on building brand authority and community engagement, resulting in increased visibility, consistent audience growth, and stronger digital presence.",
    demoUrl: "https://www.btsai.net/",
    caseStudyUrl: "https://skorai.com/case-study",
    image: "/assets/img/Bts/cover.webp",
    challenge: "BTS.Ai needed a compelling online presence to communicate their innovative AI solutions but lacked a cohesive digital identity and engagement strategy across platforms.",
    solution: "We built a modern, user-focused website and executed a targeted social media strategy that boosted engagement and positioned BTS.Ai as a credible voice in the AI space.",
    duration: "3 months",
    teamSize: "2 developers",
    tags: ["QA Testing","Social Media","User Aquisition"],
    
  },
  // You can add more project objects here
];

const Bts = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id) || projects[0]; // fallback to first

  useEffect(() => {
  window.scrollTo(0, 0);
}, []);


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-36 pb-6 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge variant="secondary" className="mb-4">
                {project.category}
              </Badge>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {project.title}
              </h1>

              <p className="text-xl text-gray-600 mb-8">
                {project.longDescription}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Button
                  className="bg-gradient-to-r from-createc-orange to-createc-yellow hover:scale-105 transition-transform"
                  onClick={() => window.open(project.demoUrl, "_blank")}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit
                </Button>
                <Button
                  className="bg-white text-gray-900 hover:scale-105 transition-transform"
                  variant="outline"
                  onClick={() => window.open(project.caseStudyUrl, "_blank")}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Case Study
                </Button>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="bg-orange-50 text-createc-orange border-orange-200"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Challenge */}
            <div className="animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Challenge</h3>
                <p className="text-gray-600">{project.challenge}</p>
              </div>
            </div>

            {/* Solution */}
            <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Solution</h3>
                <p className="text-gray-600">{project.solution}</p>
              </div>
            </div>

            {/* Project Info */}
            <div className="animate-fade-in" style={{ animationDelay: "500ms" }}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <Calendar className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Project Info</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">Duration: {project.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">Team: {project.teamSize}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Image Gallery
            </h2>
            <p className="text-xl text-gray-600 mb-10">A Visual Snapshot of Our Work</p>
            <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
  {[
    "/assets/img/Bts/5.jpg",
    "/assets/img/Bts/1.png",
    "/assets/img/Bts/4.png",
    "/assets/img/Bts/6.jpg",
    "/assets/img/Bts/2.png",
    "/assets/img/Bts/3.png",
    

    
    
  ].map((src, index) => (
    <div key={index} className="break-inside-avoid">
      <img
        src={src}
        alt={`Skor Gallery ${index + 1}`}
        className="w-full rounded-xl shadow-md hover:scale-[1.01] transition-transform"
      />
    </div>
  ))}
</div>
          </div>

          
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Bts;
