import React from 'react';
import { Shield, Mail, Globe, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-[#050508] border-t border-white/5 pt-20 pb-10 overflow-hidden cyber-grid">
      <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-left">
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00f0ff] to-[#a855f7] p-[1px]">
              <div className="w-full h-full bg-[#050508] rounded-[7px] flex items-center justify-center">
                <Shield className="w-4 h-4 text-[#00f0ff]" />
              </div>
            </div>
            <span className="font-['Outfit'] font-extrabold text-xl tracking-wider text-white">FYNSEC</span>
          </div>
          <p className="text-xs text-slate-400 font-light leading-relaxed">
            엔터프라이즈의 분산 자산과 클라우드 네트워킹을 차세대 SASE 프레임워크로 견고히 방어합니다.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#00f0ff]">Security Platform</h4>
          <ul className="space-y-2.5 text-xs text-slate-400 font-light">
            <li><a href="#services" className="hover:text-white transition-colors duration-300">Zero Trust Access</a></li>
            <li><a href="#services" className="hover:text-white transition-colors duration-300">Firewall-as-a-Service</a></li>
            <li><a href="#services" className="hover:text-white transition-colors duration-300">Cloud Broker (CASB)</a></li>
            <li><a href="#features" className="hover:text-white transition-colors duration-300">Incident Alert Center</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white">Compliance & Trust</h4>
          <ul className="space-y-2.5 text-xs text-slate-400 font-light">
            <li className="flex items-center space-x-2">
              <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] font-mono text-white">SOC2</span>
              <span>SOC Type II Certified</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] font-mono text-white">ISO27001</span>
              <span>Information Security Standard</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white">Contact & Support</h4>
          <ul className="space-y-2.5 text-xs text-slate-400 font-light">
            <li className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-[#00f0ff]" />
              <a href="mailto:hello@fynsec.com" className="hover:text-white transition-colors duration-300">hello@fynsec.com</a>
            </li>
            <li className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-slate-400" />
              <span>www.fynsec.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-slate-400" />
              <span>Dubai Silicon Oasis, UAE</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-left">
        <p className="text-[10px] text-slate-500 font-light font-mono">
          &copy; {new Date().getFullYear()} FYNSEC. All rights reserved.
        </p>
        <div className="flex items-center space-x-6 mt-4 md:mt-0 text-[10px] text-slate-500 font-mono">
          <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
