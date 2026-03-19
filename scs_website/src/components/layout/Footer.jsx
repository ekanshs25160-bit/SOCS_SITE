import React from 'react';

const Footer = () => {
    return (
      <footer className="footer glass border-t border-[rgba(255,255,255,0.05)] mt-[100px] py-[60px] px-[10%] text-center">
        <div className="logo gradient-text font-black text-2xl tracking-tighter cursor-pointer mb-5">SCS_SITE</div>
        
        <div className="flex gap-10 justify-center mb-8 text-[#8b949e] font-semibold text-sm">
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          <a href="#" className="hover:text-white transition-colors">Documentation</a>
        </div>
        
        <div className="text-[#30363d] text-[10px] uppercase font-bold tracking-[0.2em]">
          &copy; 2026 SOCIETY OF COMPUTER SCIENCE. ALL RIGHTS RESERVED.
        </div>
      </footer>
    );
  };
  
  export default Footer;
