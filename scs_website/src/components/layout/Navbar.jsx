import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar glass fixed top-0 w-full z-[100] px-[5%] py-4 flex justify-between items-center bg-[rgba(13,17,23,0.8)] border-b border-[rgba(255,255,255,0.05)]">
      <div className="logo gradient-text font-black text-2xl tracking-tighter cursor-pointer">SCS_SITE</div>
      
      <div className="hidden md:flex gap-8 text-[#8b949e]">
        <a href="#about" className="hover:text-[#00ff9c] transition-colors font-semibold">About</a>
        <a href="#projects" className="hover:text-[#00ff9c] transition-colors font-semibold">Projects</a>
        <a href="#events" className="hover:text-[#00ff9c] transition-colors font-semibold">Events</a>
        <a href="#contact" className="hover:text-[#00ff9c] transition-colors font-semibold">Contact</a>
      </div>
      
      <button className="btn-primary">Join Society</button>
      
      <style>{`
        .navbar {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
