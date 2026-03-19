import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ProjectsSection from "../components/sections/Projects";
import { Projects } from "../data/projects";

const ProjectsPage = () => {
  return (
    <div className="bg-[#0b111a] min-h-screen text-[#e6edf3]">
      <Navbar />
      <main className="pt-32">
        <div className="px-[10%] mb-12">
            <h1 className="text-7xl font-black gradient-text mb-4">Our Projects</h1>
            <p className="text-[#8b949e] text-xl max-w-2xl font-medium">A showcase of the innovative software and hardware solutions developed by our members.</p>
        </div>
        <ProjectsSection projects={Projects} />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
