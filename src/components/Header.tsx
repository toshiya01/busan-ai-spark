import React, { useState, useEffect } from 'react';
import { Shield, ChevronRight } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#050508]/80 backdrop-blur-md border-b border-white/5 py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-3 group cursor-pointer">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#00f0ff] to-[#a855f7] p-[1.5px] transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)]">
            <div className="w-full h-full bg-[#0e0e12] rounded-[10px] flex items-center justify-center">
              <Shield className="w-5 h-5 text-[#00f0ff] group-hover:text-white transition-colors duration-300" />
            </div>
          </div>
          <span className="font-['Outfit'] font-extrabold text-2xl tracking-wider bg-gradient-to-r from-white via-white to-[#00f0ff] bg-clip-text text-transparent uppercase">
            FYNSEC
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {['Services', 'Solutions', 'Features', 'Pricing'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-slate-300 hover:text-[#00f0ff] transition-colors duration-300 relative py-1 group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00f0ff] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <button className="flex items-center space-x-2 bg-gradient-to-r from-[#00f0ff] to-[#3b82f6] text-[#050508] px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]">
          <span>Book a Demo</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
};

export default Header;
