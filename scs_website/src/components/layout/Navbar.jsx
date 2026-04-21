import React from 'react';
import Button from '../ui/Button';

const Navbar = () => {
  return (
    // <nav className="navbar fixed top-0 w-full z-[100] px-[10%] py-6 flex justify-between items-center bg-bg-base/80 backdrop-blur-xl border-b border-white/5">
    //   <div className="logo text-white font-black text-3xl tracking-tighter cursor-pointer font-space">
    //     SCS<span className="text-secondary font-mono text-sm tracking-widest ml-1">_CORE</span>
    //   </div>
      
    //   <div className="hidden md:flex gap-12 text-text-secondary font-mono text-[11px] font-bold tracking-[0.2em] uppercase">
    //     <a href="#projects" className="hover:text-primary transition-all duration-300 relative group">
    //         PROJECTS
    //         <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300"></span>
    //     </a>
    //     <a href="#events" className="hover:text-primary transition-all duration-300 relative group">
    //         SCHEDULE
    //         <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300"></span>
    //     </a>
    //     <a href="#team" className="hover:text-primary transition-all duration-300 relative group">
    //         OPERATIVES
    //         <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300"></span>
    //     </a>
    //   </div>
      
    //   <Button variant="outline" className="text-[10px] py-2">SYSTEM_ACCESS</Button>
    // </nav>




    <nav className="fixed top-4 left-4 right-4 z-[100] pointer-events-auto transition-all duration-300">
      <div className="bg-black/60 backdrop-blur-3xl border border-white/5 px-6 py-2.5 rounded-2xl flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.6)] border-l-4 border-l-tertiary">
        {/* Left Side: Status Indicators */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-tertiary shadow-[0_0_12px_rgba(57,255,20,0.8)] animate-pulse"></div>
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-tertiary font-black">ONSAFE_CORE_V1.0</span>
          </div>

          <div className="h-4 w-px bg-white/10 mx-2 hidden lg:block"></div>

          <div className="hidden lg:flex items-center gap-2 font-mono text-[9px] text-white/30 uppercase tracking-[0.2em]">
            <span className="text-white/40">UPLINK:</span>
            <span className="text-white/70">ACTIVE</span>
            <span className="text-white/20 mx-1">//</span>
            <span className="text-white/40">REGION:</span>
            <span className="text-white/70">NO-SEC-01</span>
          </div>
        </div>
        
        {/* Right Side: Navigation & Actions */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-6 border-r border-white/10 pr-6">
            <a href="#intel" className="nav-item flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-white/5 transition-all group">
                <span className="material-symbols-outlined text-[18px] text-blue-400 group-hover:scale-110 transition-transform">public</span> 
                <span className="font-mono text-[10px] uppercase tracking-widest hidden sm:inline text-white/60 group-hover:text-white">PROJECTS</span>
            </a>
            <a href="#ops" className="nav-item flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-white/5 transition-all group">
                <span className="material-symbols-outlined text-[18px] text-primary group-hover:scale-110 transition-transform">terminal</span> 
                <span className="font-mono text-[10px] uppercase tracking-widest hidden sm:inline text-white/60 group-hover:text-white">EVENTS</span>
            </a>
            <a href="#nodes" className="nav-item flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-white/5 transition-all group">
                <span className="material-symbols-outlined text-[18px] text-tertiary group-hover:scale-110 transition-transform">hub</span> 
                <span className="font-mono text-[10px] uppercase tracking-widest hidden sm:inline text-white/60 group-hover:text-white">SCHEDULE</span>
            </a>
            <a href="#vault" className="nav-item flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-white/5 transition-all group">
                <span className="material-symbols-outlined text-[18px] text-fuchsia-400 group-hover:scale-110 transition-transform">security</span> 
                <span className="font-mono text-[10px] uppercase tracking-widest hidden sm:inline text-white/60 group-hover:text-white">OPERATIVES</span>
            </a>
          </div>
          
          <button className="bg-[#b388ff] text-black font-mono font-black px-6 py-1.5 rounded-full tracking-tighter text-[11px] hover:bg-[#c29cff] transition-all active:scale-95 shadow-[0_0_20px_rgba(179,136,255,0.4)] border-none uppercase">
            SYSTEM_LOGIN
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

