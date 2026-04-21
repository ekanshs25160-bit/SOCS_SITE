import React from "react";
import Card from "../ui/Card";

const ProjectsSection = () => {
  const projects = [
    {
      id: "PRJ_844",
      title: "STARK_SHIELD",
      description: "L2 privacy-preserving protocol for institutional asset transfers with zero-knowledge proof verification.",
      icon: "shield_lock",
      color: "text-[#d1b3ff]",
      borderColor: "border-[#d1b3ff]/10"
    },
    {
      id: "PRJ_109",
      title: "NEXUS_NODE",
      description: "Distributed edge computing mesh designed for low-latency decentralized application hosting.",
      icon: "hub",
      color: "text-[#00f5ff]",
      borderColor: "border-[#00f5ff]/10"
    },
    {
      id: "PRJ_021",
      title: "CORE_SHELL",
      description: "Hardware-level security interface for cold-storage management and multi-sig authorization flows.",
      icon: "terminal",
      color: "text-[#39ff14]",
      borderColor: "border-[#39ff14]/10"
    }
  ];

  return (
    <section id="projects" className="bg-[#0b111a] py-32 px-[8%] lg:px-[12%] overflow-hidden relative border-y border-white/5">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
        <div className="space-y-4 font-fade-in">
          <span className="font-mono text-[#00f5ff] text-xs font-bold tracking-[0.4em] uppercase opacity-70">
            PORTFOLIO_EXHIBITS
          </span>
          <h2 className="text-white text-5xl md:text-7xl font-black font-space tracking-tight uppercase">
            FEATURED PROJECTS
          </h2>
        </div>
        
        <div className="hidden lg:flex flex-col items-end font-mono text-[10px] text-white/30 space-y-1 tracking-widest uppercase">
          <span>001_ENCRYPT</span>
          <span>002_VALIDATE</span>
          <span>003_SECURE</span>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <Card 
            key={i}
            id={project.id}
            title={project.title}
            description={project.description}
            icon={project.icon}
            color={project.color}
            borderColor={project.borderColor}
          />
        ))}
      </div>

      {/* Bottom Accent Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
};

export default ProjectsSection;

