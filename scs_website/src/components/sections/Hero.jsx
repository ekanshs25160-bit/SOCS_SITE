import React from "react";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0b111a]" data-stitch-vh="min-h-[884px]===min-h-screen">
      {/* HUD Scanline Effect Overlay */}
      <div className="absolute inset-0 scanline opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <div className="space-y-10 pt-16">
          <div className="inline-block px-3 py-1 bg-tertiary/10 border border-tertiary/30">
            <span className="font-mono text-[10px] text-tertiary uppercase tracking-[0.3em]">System Status: Operational</span>
          </div>
          
          <h1 className="flex flex-col font-black font-space uppercase">
            <span className="text-white text-6xl md:text-8xl tracking-tight leading-[0.85]">DEFENDING</span>
            <span className="text-white text-6xl md:text-8xl tracking-tight leading-[0.85]">THE</span>
            <span className="text-7xl md:text-[8rem] xl:text-[10rem] tracking-tighter leading-[0.8] bg-gradient-to-r from-[#d1b3ff] to-[#00f5ff] text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(209,179,255,0.3)]">DIGITAL</span>
            <span className="text-7xl md:text-[8rem] xl:text-[10rem] tracking-tighter leading-[0.8] mb-8 bg-gradient-to-r from-[#00f5ff] to-[#39ff14] text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(0,245,255,0.2)]">FRONTIER</span>
          </h1>

          <p className="text-white/60 text-lg md:text-xl max-w-xl font-inter leading-relaxed font-medium">
            <span className="text-white">SCS_CORE</span> is an elite architectural node for securing decentralized protocols and high-value data arrays across the multi-chain ecosystem.
          </p>

          <div className="flex flex-wrap gap-6 pt-4">
            <button className="bg-[#d1b3ff] text-black font-mono font-black px-10 py-4 rounded-xl tracking-widest text-xs hover:bg-[#e1ccff] transition-all active:scale-95 shadow-[0_0_30px_rgba(209,179,255,0.4)] uppercase">
              INITIATE_PROTOCOL
            </button>
            <button className="bg-transparent border border-[#00f5ff]/40 text-[#00f5ff] font-mono font-bold px-10 py-4 rounded-xl tracking-widest text-xs hover:bg-[#00f5ff]/10 hover:border-[#00f5ff] transition-all active:scale-95 uppercase">
              VIEW_NODES
            </button>
          </div>
        </div>

        {/* Right Side: Tactical HUD Visualization */}
        <div className="relative flex items-center justify-center h-[500px] lg:h-[600px] mt-12 lg:mt-0">
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="absolute w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] border border-white/5 rounded-full"></div>
             <div className="absolute w-[250px] h-[250px] lg:w-[380px] lg:h-[380px] border border-[#d1b3ff]/10 rounded-full"></div>
             <div className="absolute w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] border border-[#00f5ff]/20 rounded-full"></div>
             <div className="absolute w-[150px] h-[150px] lg:w-[220px] lg:h-[220px] border border-[#39ff14]/10 rounded-full"></div>
             
             {/* Glowing World Icon */}
             <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="p-8 lg:p-12 rounded-full bg-black/40 backdrop-blur-md border border-[#00f5ff]/30 shadow-[0_0_50px_rgba(0,245,255,0.2)] animate-pulse">
                   <span className="material-symbols-outlined text-[80px] lg:text-[120px] text-[#00f5ff] drop-shadow-[0_0_20px_rgba(0,245,255,0.8)]">public</span>
                </div>
             </div>

             {/* HUD Labels/Coordinates */}
             <div className="absolute top-10 right-10 flex flex-col items-end opacity-40 font-mono text-[9px] lg:text-[11px] tracking-[0.2em] text-[#00f5ff]">
                <span>LAT: 37.7749</span>
                <span>LONG: -122.4194</span>
             </div>
             <div className="absolute bottom-20 left-0 opacity-40 font-mono text-[9px] lg:text-[11px] tracking-[0.2em] text-[#d1b3ff]">
                <span>0x882...FF1A</span><br />
                <span>PKT_LOSS: 0.00%</span>
             </div>
          </div>
        </div>
      </div>

      {/* System Status Panel (Bottom Right) */}
      <div className="fixed bottom-10 right-10 z-20 hidden lg:block">
         <div className="bg-black/60 backdrop-blur-2xl border border-white/5 p-6 rounded-2xl space-y-3 min-w-[240px] shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
            <div className="flex items-center gap-3 mb-1">
               <div className="w-2.5 h-2.5 rounded-full bg-[#39ff14] shadow-[0_0_12px_rgba(57,255,20,0.8)]"></div>
               <span className="font-mono text-[11px] text-[#39ff14] font-black tracking-widest uppercase">SYSTEM STATUS: SECURE</span>
            </div>
            <div className="h-px w-full bg-white/5"></div>
            <div className="space-y-1.5 font-mono text-[10px] text-white/50 tracking-wider">
               <div className="flex justify-between uppercase">
                  <span>LATENCY:</span> <span className="text-[#00f5ff] font-bold">12MS</span>
               </div>
               <div className="flex justify-between uppercase">
                  <span>PROTOCOL:</span> <span className="text-primary font-bold">TCP_V4_SEC</span>
               </div>
               <div className="flex justify-between uppercase">
                  <span>NODE_ADDR:</span> <span className="text-[#d1b3ff] font-bold">US-WEST-01</span>
               </div>
            </div>
         </div>
      </div>

      {/* Background data bleed decoration */}
      <div className="absolute bottom-10 left-10 font-mono text-[10px] text-white/5 select-none pointer-events-none leading-tight hidden xl:block">
        0x5343535f434f52455f5632<br />
        STARK_NET_PROTOCOL_V3<br />
        LOC: GLOBAL_MESH_01_CALI
      </div>
    </section>
  );
};

export default Hero;

