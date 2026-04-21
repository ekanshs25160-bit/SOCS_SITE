import React from "react";

const TeamSection = () => {
  const operatives = [
    { name: "PHANTOM_STRIDE", role: "WEB EXPLOITATION LEAD", id: "001" },
    { name: "XENON_LACE", role: "AI SECURITY RESEARCHER", id: "042" },
    { name: "NULL_POINTER", role: "BINARY EXPLOITATION", id: "128" },
    { name: "CIPHER_VOID", role: "CRYPTOGRAPHY EXPERT", id: "256" }
  ];

  return (
    <section className="team-section py-24 px-[10%] bg-bg-base overflow-hidden">
      <div className="mb-16">
        <h2 className="text-tertiary font-mono text-sm tracking-[0.3em] font-bold mb-4 uppercase">
            03 // THE_OPERATIVES
        </h2>
        <h3 className="text-5xl md:text-6xl font-black font-space uppercase text-white">
          ELITE<span className="text-secondary">_FORCE</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {operatives.map((op, i) => (
          <div key={i} className="group relative bg-surface-mid p-10 border border-white/5 hover:border-secondary/40 transition-all duration-500 cursor-none">
            {/* ID Tag */}
            <div className="absolute top-4 right-4 text-[10px] font-mono text-secondary/40 font-bold">
                ID_{op.id}
            </div>

            {/* Glyph Placeholder */}
            <div className="w-16 h-16 bg-white/5 mb-8 flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
                <span className="text-2xl font-mono text-white/20 group-hover:text-secondary group-hover:animate-pulse">{"{/}"}</span>
            </div>

            <h4 className="text-xl font-bold font-space text-white group-hover:text-secondary transition-colors mb-2 uppercase">
                {op.name}
            </h4>
            <div className="h-[1px] w-8 bg-primary/30 group-hover:w-full transition-all duration-700 mb-4" />
            <p className="text-text-secondary font-mono text-[10px] tracking-tight group-hover:text-white transition-colors">
                {op.role}
            </p>

            {/* Hover Glitch Effect */}
            <div className="absolute inset-0 border border-primary opacity-0 group-hover:opacity-10 group-hover:animate-pulse pointer-events-none" />
          </div>
        ))}
      </div>
      
      {/* Decorative Text */}
      <div className="mt-20 text-center opacity-10 pointer-events-none">
        <span className="font-mono text-xs tracking-[1em] text-white">AUTHORIZED_ACCESS_ONLY // SCS_DATABASE</span>
      </div>
    </section>
  );
};

export default TeamSection;
