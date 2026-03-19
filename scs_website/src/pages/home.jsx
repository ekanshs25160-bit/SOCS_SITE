import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import StatsSection from "../components/sections/Stats";
import ProjectsSection from "../components/sections/Projects";
import { Projects, Stats } from "../data/projects";

const Home = () => {
  return (
    <div className="home-container fade-in-up bg-[#0b111a] min-h-screen text-[#e6edf3]">
      <Navbar />
      <Hero />
      <StatsSection stats={Stats} />
      <ProjectsSection projects={Projects} />
      <Footer />
    </div>
  );
};

export default Home;
