import React from 'react';

const Footer = () => {
    return (
      <footer className="footer bg-bg-base border-t border-white/5 py-24 px-[10%]">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="max-w-xs">
                <div className="logo text-white font-black text-3xl tracking-tighter cursor-pointer mb-6 font-space">
                    SCS<span className="text-primary font-mono text-sm tracking-widest ml-1">_DB</span>
                </div>
                <p className="text-text-secondary font-inter text-xs leading-relaxed uppercase tracking-tight">
                    The System Control Shell is a decentralized autonomous organization focused on the architectural integrity of the global digital infrastructure.
                </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-16">
                <div>
                    <h5 className="text-white font-mono text-[10px] font-bold tracking-[0.3em] mb-6 uppercase opacity-50">// DIRECTORY</h5>
                    <div className="flex flex-col gap-3 font-mono text-[11px] font-bold text-text-secondary uppercase">
                        <a href="#" className="hover:text-primary transition-colors tracking-widest">Protocols</a>
                        <a href="#" className="hover:text-primary transition-colors tracking-widest">Vault</a>
                        <a href="#" className="hover:text-primary transition-colors tracking-widest">Network</a>
                    </div>
                </div>
                <div>
                    <h5 className="text-white font-mono text-[10px] font-bold tracking-[0.3em] mb-6 uppercase opacity-50">// SOCIALS</h5>
                    <div className="flex flex-col gap-3 font-mono text-[11px] font-bold text-text-secondary uppercase">
                        <a href="#" className="hover:text-secondary transition-colors tracking-widest">Terminal</a>
                        <a href="#" className="hover:text-secondary transition-colors tracking-widest">Hub</a>
                        <a href="#" className="hover:text-secondary transition-colors tracking-widest">RSS_Feed</a>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-text-secondary font-mono text-[9px] uppercase font-bold tracking-[0.4em]">
              &copy; 2024 SCS_DB // ALL_RIGHTS_RESERVED
            </div>
            <div className="text-tertiary font-mono text-[9px] uppercase font-bold tracking-[0.4em] flex items-center gap-2">
                <span className="w-2 h-2 bg-tertiary rounded-full animate-pulse"></span>
                AUTHORIZED_ACCESS_ONLY
            </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;

