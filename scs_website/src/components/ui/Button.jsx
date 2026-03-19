import React from 'react';

const Button = ({ children, variant = "primary", className = "", ...props }) => {
  const baseStyle = "px-6 py-3 rounded-lg font-bold transition-all transition-duration-300";
  const variants = {
    primary: "bg-gradient-to-r from-[#00ff9c] to-[#00d4ff] text-[#0b111a] hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,156,0.3)]",
    outline: "border border-[rgba(255,255,255,0.1)] text-[#e6edf3] hover:bg-white hover:text-black",
    ghost: "text-[#8b949e] hover:text-[#00ff9c]"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
