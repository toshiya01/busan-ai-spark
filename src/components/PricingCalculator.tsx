import React, { useState } from 'react';
import { Shield, Sparkles, Check, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

interface OptionModule {
  id: string;
  name: string;
  desc: string;
  pricePerUser: number;
}

const PricingCalculator = () => {
  const [users, setUsers] = useState(100);
  const [selectedModules, setSelectedModules] = useState<string[]>(['ztna', 'fwaas']);

  const modules: OptionModule[] = [
    { id: 'ztna', name: 'Zero Trust Access (ZTNA)', desc: '사용자 및 기기 상시 인증', pricePerUser: 4 },
    { id: 'fwaas', name: 'Firewall-as-a-Service', desc: '클라우드 가상 방화벽 및 IPS', pricePerUser: 6 },
    { id: 'casb', name: 'Cloud SaaS Broker', desc: '데이터 유출 방지(DLP) 시스템', pricePerUser: 5 },
    { id: 'monitor', name: '24/7 Security Operations', desc: '실시간 관제 및 인시던트 대응', pricePerUser: 8 },
  ];

  const handleToggleModule = (id: string) => {
    setSelectedModules((prev) => {
      if (prev.includes(id)) {
        if (prev.length === 1) return prev;
        return prev.filter((m) => m !== id);
      }
      return [...prev, id];
    });
  };

  const calculateTotal = () => {
    const perUserCost = modules
      .filter((mod) => selectedModules.includes(mod.id))
      .reduce((sum, mod) => sum + mod.pricePerUser, 0);

    let discountFactor = 1.0;
    if (users >= 1000) discountFactor = 0.7;
    else if (users >= 500) discountFactor = 0.8;
    else if (users >= 200) discountFactor = 0.9;

    const finalPrice = perUserCost * users * discountFactor;
    return Math.round(finalPrice).toLocaleString();
  };

  const handleDownloadConfig = () => {
    toast.success('맞춤 보안 구성서 및 견적 문서가 이메일로 전송되었습니다!');
  };

  return (
    <section id="pricing" className="py-24 max-w-7xl mx-auto px-6 relative">
      <div className="text-center space-y-4 mb-16">
        <h2 className="font-['Outfit'] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white">
          Custom Service Configurator
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto font-light">
          사용자 스케일 및 필요 보안 컴포넌트를 조절하여 비즈니스에 알맞은 맞춤형 견적을 실시간으로 확인해 보세요.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 glass-card rounded-3xl p-8 space-y-8 text-left">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-sm font-semibold text-white">사용자 규모 (User Count)</label>
              <span className="text-[#00f0ff] font-['Outfit'] font-extrabold text-lg">
                {users.toLocaleString()} 명
              </span>
            </div>
            <input 
              type="range" 
              min="10" 
              max="2000" 
              step="10"
              value={users}
              onChange={(e) => setUsers(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#00f0ff] transition-all duration-300"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>10 명</span>
              <span>500 명</span>
              <span>1,000 명</span>
              <span>2,000+ 명</span>
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-sm font-semibold text-white">필요 보안 모듈 선택</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {modules.map((mod) => {
                const isChecked = selectedModules.includes(mod.id);
                return (
                  <div 
                    key={mod.id}
                    onClick={() => handleToggleModule(mod.id)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all duration-300 flex items-start space-x-3 select-none ${
                      isChecked 
                        ? 'bg-white/5 text-white' 
                        : 'bg-[#0e0e12]/30 border-white/5 text-slate-400 hover:border-white/10 hover:text-white'
                    }`}
                    style={isChecked ? { borderColor: '#00f0ff' } : {}}
                  >
                    <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 ${
                      isChecked ? 'bg-[#00f0ff] border-[#00f0ff]' : 'border-slate-600'
                    }`}>
                      {isChecked && <Check className="w-3.5 h-3.5 text-[#050508]" />}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">{mod.name}</div>
                      <div className="text-[10px] text-slate-400 mt-1 font-light leading-snug">{mod.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff] to-[#a855f7] rounded-3xl p-[1.5px] shadow-[0_0_40px_rgba(0,240,255,0.1)] pointer-events-none"></div>

          <div className="relative bg-[#0e0e12] rounded-3xl p-8 space-y-6 text-center">
            <div className="inline-flex items-center space-x-2 bg-[#00f0ff]/10 border border-[#00f0ff]/20 px-3 py-1 rounded-full text-[#00f0ff] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Estimated Price</span>
            </div>

            <div className="space-y-1">
              <div className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">예상 월 비용</div>
              <div className="text-4xl sm:text-5xl font-black text-white font-['Outfit'] py-2 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                $ {calculateTotal()}
                <span className="text-xs text-slate-400 font-medium tracking-normal"> / month</span>
              </div>
            </div>

            <div className="text-slate-500 border-t border-white/5 pt-6 space-y-3 text-left">
              <div className="text-xs font-semibold text-white">포함된 혜택:</div>
              {['24시간 연중무휴 보안 대응 포털 제공', '글로벌 보안 컴플라이언스(SOC2) 규제 준수 보증', '도입 기간 무상 데이터 엔지니어 컨설턴트 1:1 매칭'].map((benefit, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#00f0ff] shrink-0" />
                  <span className="font-light">{benefit}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={handleDownloadConfig}
              className="w-full bg-gradient-to-r from-[#00f0ff] to-[#3b82f6] text-[#050508] py-3.5 rounded-full font-bold text-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,240,255,0.35)]"
            >
              맞춤 견적 다운로드
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCalculator;
