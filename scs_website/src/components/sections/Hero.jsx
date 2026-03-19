import React from 'react';
import Button from '../ui/Button';

const Hero = () => {
    return (
      <section className="hero h-screen flex flex-col justify-center items-center text-center px-5 relative overflow-hidden bg-[#0b111a]">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00ff9c0a] rounded-full blur-[120px] active:scale-110 transition-transform duration-1000" />
        </div>
  
        <h1 className="gradient-text text-8xl md:text-[10rem] font-extrabold tracking-tighter leading-none mb-4 glitch cursor-default">
          Innovate
          <br />
          Collaborate
        </h1>
        <p className="text-[#8b949e] text-xl md:text-2xl max-w-2xl font-medium mb-10 opacity-0 fade-in-up delay-2">
          We are the Society of Computer Science, driving the future through
          cutting-edge technology and impactful software engineering.
        </p>
        <div className="flex gap-4 opacity-0 fade-in-up delay-3">
          <Button variant="primary">Explore Work</Button>
          <Button variant="outline">About Society</Button>
        </div>
      </section>
    );
};

export default Hero;
