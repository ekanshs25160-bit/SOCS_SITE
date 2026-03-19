import React from 'react';

const Stats = ({ stats = [] }) => {
  return (
    <section className="stats glass flex flex-wrap justify-center gap-20 py-16 bg-[#00ff9c05] font-bold">
      {stats.map((stat, i) => (
        <div key={i} className="stat-item text-center">
          <span className="text-5xl text-[#00ff9c] block mb-2">
            {stat.value}
          </span>
          <span className="text-[#8b949e] text-sm uppercase tracking-widest">
            {stat.label}
          </span>
        </div>
      ))}
    </section>
  );
};

export default Stats;
