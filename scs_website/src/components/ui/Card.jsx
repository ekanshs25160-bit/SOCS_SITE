import React from 'react';

const Card = ({ children, title, description, image, tech = [], className = "" }) => {
  return (
    <div className={`project-card glass p-8 rounded-2xl hover:border-[#00ff9c] transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group flex flex-col justify-end h-[450px] relative overflow-hidden ${className}`}>
        {image && (
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none transition-transform duration-500 group-hover:scale-110">
                <img src={image} alt={title || "card image"} className="w-full h-full object-cover" />
            </div>
        )}
        
        <div className="relative z-10 flex flex-col h-full justify-between">
            <div className="flex flex-wrap gap-2">
                {tech.map((t, idx) => (
                    <span key={idx} className="bg-[rgba(0,255,156,0.1)] text-[#00ff9c] px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest">{t}</span>
                ))}
            </div>
            
            <div>
                <h3 className="text-3xl font-black mb-2 group-hover:text-[#00ff9c] transition-colors">{title}</h3>
                <p className="text-[#8b949e] font-medium leading-relaxed">{description}</p>
            </div>
        </div>

        {children}
    </div>
  );
};

export default Card;
