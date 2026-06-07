import React, { useState } from 'react';
import { Shield, Eye, Lock, HardDrive, Cpu, Laptop, Cloud } from 'lucide-react';

interface ModuleInfo {
  id: string;
  name: string;
  desc: string;
  details: string[];
  color: string;
}

const SaseDiagram = () => {
  const modules: ModuleInfo[] = [
    {
      id: 'ztna',
      name: 'Zero Trust Access (ZTNA)',
      desc: '모든 사용자 및 단말 기기를 인증 전까지는 신뢰하지 않으며, 접근 세션마다 실시간으로 안전 상태를 검사합니다.',
      details: ['Identity-aware access control', 'Continuous device posture scan', 'Application micro-segmentation'],
      color: '#00f0ff',
    },
    {
      id: 'fwaas',
      name: 'Firewall-as-a-Service (FWaaS)',
      desc: '분산 환경에 맞게 제공되는 고성능 가상 클라우드 방화벽으로, 포트 차단 및 차세대 침입 차단(IPS)을 유기적으로 제어합니다.',
      details: ['Next-Gen Intrusion Prevention', 'Port/IP dynamic blacklisting', 'Layer 7 application awareness'],
      color: '#a855f7',
    },
    {
      id: 'casb',
      name: 'Cloud Broker (CASB)',
      desc: '다양한 SaaS 클라우드 애플리케이션으로 이동하는 모든 트래픽을 정밀 감사하고 중요한 데이터의 무단 유출을 즉시 차단합니다.',
      details: ['Data Loss Prevention (DLP)', 'Shadow IT audit logs', 'Deep packet inspection'],
      color: '#10b981',
    },
  ];

  const [activeModule, setActiveModule] = useState<ModuleInfo>(modules[0]);
  const [animatePulse, setAnimatePulse] = useState(false);

  const handleSelectModule = (mod: ModuleInfo) => {
    setActiveModule(mod);
    setAnimatePulse(true);
    setTimeout(() => setAnimatePulse(false), 800);
  };

  return (
    <section id="services" className="py-24 max-w-7xl mx-auto px-6 relative">
      <div className="text-center space-y-4 mb-16">
        <h2 className="font-['Outfit'] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white">
          SASE Cloud Architecture
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto font-light">
          보안 구성 요소를 클릭하여 사용자와 목적지 간의 실시간 암호화 및 트래픽 보호 흐름 시뮬레이션을 작동해 보세요.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 flex flex-col justify-center items-center glass-card rounded-3xl p-8 relative overflow-hidden h-[450px]">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(0,240,255,0.03)_1.5px,transparent_1.5px)] bg-[size:24px_24px] pointer-events-none"></div>

          <div className="flex items-center justify-between w-full relative z-10 max-w-md">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#050508] border border-slate-700 flex items-center justify-center shadow-md">
                <Laptop className="w-6 h-6 text-slate-300" />
              </div>
              <span className="text-xs text-slate-400 mt-2 font-medium">User Terminal</span>
            </div>

            <div className="flex-1 h-[2px] bg-slate-800 mx-4 relative overflow-hidden">
              <div 
                className={`absolute top-0 bottom-0 left-0 right-0 transition-all duration-300 ${
                  animatePulse ? 'opacity-100' : 'opacity-40'
                }`}
                style={{
                  background: `linear-gradient(to right, transparent, ${activeModule.color}, transparent)`,
                  animation: 'marquee 1.5s linear infinite'
                }}
              ></div>
              <div 
                className="w-3 h-3 rounded-full absolute -top-[5px] animate-ping"
                style={{ 
                  backgroundColor: activeModule.color,
                  left: '50%',
                  transform: 'translateX(-50%)'
                }}
              ></div>
            </div>

            <div className="flex flex-col items-center">
              <div 
                className="w-20 h-20 rounded-2xl bg-[#050508] border flex items-center justify-center shadow-lg transition-all duration-500"
                style={{ 
                  borderColor: activeModule.color,
                  boxShadow: `0 0 20px ${activeModule.color}33`
                }}
              >
                <Shield className="w-9 h-9 animate-pulse" style={{ color: activeModule.color }} />
              </div>
              <span className="text-xs font-semibold mt-3" style={{ color: activeModule.color }}>
                {activeModule.name.split(' ')[0]}
              </span>
            </div>

            <div className="flex-1 h-[2px] bg-slate-800 mx-4 relative overflow-hidden">
              <div 
                className="absolute top-0 bottom-0 left-0 right-0 opacity-40"
                style={{
                  background: `linear-gradient(to right, transparent, ${activeModule.color}, transparent)`,
                  animation: 'marquee 1.2s linear infinite'
                }}
              ></div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#050508] border border-slate-700 flex items-center justify-center shadow-md">
                <Cloud className="w-6 h-6 text-slate-300" />
              </div>
              <span className="text-xs text-slate-400 mt-2 font-medium">Cloud Target</span>
            </div>
          </div>

          <div 
            className="absolute -bottom-20 w-[180px] h-[180px] rounded-full blur-[80px] opacity-20 transition-all duration-500 pointer-events-none"
            style={{ backgroundColor: activeModule.color }}
          ></div>
        </div>

        <div className="lg:col-span-6 space-y-6">
          <div className="grid grid-cols-3 gap-3">
            {modules.map((mod) => (
              <button
                key={mod.id}
                onClick={() => handleSelectModule(mod)}
                className={`px-4 py-3 rounded-xl font-semibold text-xs text-left border transition-all duration-300 ${
                  activeModule.id === mod.id
                    ? 'bg-white/5 text-white'
                    : 'bg-[#0e0e12]/30 border-white/5 text-slate-400 hover:border-white/10 hover:text-white'
                }`}
                style={activeModule.id === mod.id ? { borderColor: mod.color } : {}}
              >
                {mod.name.split(' ')[0]}
              </button>
            ))}
          </div>

          <div className="glass-card rounded-3xl p-8 space-y-6 transition-all duration-300">
            <div className="flex items-center space-x-3">
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${activeModule.color}20` }}
              >
                <Lock className="w-4 h-4" style={{ color: activeModule.color }} />
              </div>
              <h3 className="font-['Outfit'] font-bold text-xl text-white">
                {activeModule.name}
              </h3>
            </div>

            <p className="text-slate-300 leading-relaxed text-sm font-light">
              {activeModule.desc}
            </p>

            <div className="space-y-3 pt-2">
              {activeModule.details.map((detail, idx) => (
                <div key={idx} className="flex items-center space-x-2.5">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeModule.color }}></div>
                  <span className="text-xs font-mono text-slate-400">{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaseDiagram;
