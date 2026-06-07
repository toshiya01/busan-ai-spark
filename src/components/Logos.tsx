import React from 'react';

const Logos = () => {
  const companyNames = ['Stripe', 'Google Cloud', 'Vercel', 'Datadog', 'Fortinet', 'Cato Networks'];

  return (
    <section className="py-12 bg-[#050508]/60 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#64748b]">
          TRUSTED BY INDUSTRY LEADERS
        </p>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center space-x-16">
          {companyNames.concat(companyNames).map((company, idx) => (
            <span 
              key={idx} 
              className="text-2xl font-bold font-['Outfit'] text-slate-600 hover:text-[#00f0ff] transition-colors duration-300 cursor-pointer tracking-wider uppercase select-none"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logos;
