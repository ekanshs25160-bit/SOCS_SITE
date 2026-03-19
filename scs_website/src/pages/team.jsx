import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Team = () => {
  return (
    <div className="bg-[#0b111a] min-h-screen text-[#e6edf3]">
      <Navbar />
      <main className="pt-32 px-[10%] text-center">
        <h1 className="text-6xl font-black gradient-text mb-8">Meet the Team</h1>
        <p className="text-[#8b949e] max-w-2xl mx-auto">The brilliant minds behind SCS, working together to shape the future of technology.</p>
        {/* Team grid goes here */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">
            {/* Placeholder items */}
            {Array(8).fill(0).map((_, i) => (
                <div key={i} className="glass p-8 rounded-2xl h-64 border-b-4 border-cyber">
                    <div className="w-20 h-20 bg-tech/20 rounded-full mx-auto mb-4" />
                    <h3 className="text-xl font-bold">Member Name</h3>
                    <p className="text-[#8b949e] text-sm">Lead Developer</p>
                </div>
            ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
