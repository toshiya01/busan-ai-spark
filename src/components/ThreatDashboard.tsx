import React, { useState, useEffect, useRef } from 'react';
import { ShieldAlert, Terminal, Activity, Play, RefreshCw, CheckCircle2 } from 'lucide-react';

interface LogEntry {
  id: number;
  time: string;
  msg: string;
  type: 'info' | 'warn' | 'success';
}

const ThreatDashboard = () => {
  const [score, setScore] = useState(82);
  const [scanning, setScanning] = useState(false);
  const [logs, setLogs] = useState<LogEntry[]>([
    { id: 1, time: '12:04:10', msg: 'System monitoring initialized successfully.', type: 'info' },
    { id: 2, time: '12:04:11', msg: 'Active sessions verified (ZTNA). Total: 142.', type: 'success' },
    { id: 3, time: '12:04:15', msg: 'Port scan check completed on 443, 80, 22.', type: 'info' },
  ]);
  const [alerts, setAlerts] = useState<string[]>([]);
  
  const logsEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (logsEndRef.current) {
      logsEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs]);

  const runScan = () => {
    if (scanning) return;
    setScanning(true);
    setScore(82);
    
    const newLogs: LogEntry[] = [
      { id: Date.now(), time: new Date().toLocaleTimeString(), msg: 'Vulnerability scanner started. Loading CVE database...', type: 'info' },
    ];
    setLogs(newLogs);

    const steps = [
      { delay: 1000, score: 87, msg: 'Checking cloud server containers for dynamic configuration flaws...', type: 'info' },
      { delay: 2000, score: 91, msg: 'Warning: Outdated TLS certificate protocol detected on API endpoint.', type: 'warn' },
      { delay: 3500, score: 94, msg: 'Active blocking rule injected dynamically to firewall (FWaaS).', type: 'success' },
      { delay: 5000, score: 98, msg: 'Vulnerability scan complete. 1 minor issue resolved, system is protected.', type: 'success' },
    ];

    steps.forEach((step) => {
      setTimeout(() => {
        setScore(step.score);
        setLogs((prev) => [
          ...prev,
          { id: Date.now() + Math.random(), time: new Date().toLocaleTimeString(), msg: step.msg, type: step.type as any }
        ]);
        if (step.type === 'warn') {
          setAlerts((prev) => [...prev, 'Outdated protocol blocked automatically.']);
          setTimeout(() => {
            setAlerts((prev) => prev.slice(1));
          }, 3000);
        }
      }, step.delay);
    });

    setTimeout(() => {
      setScanning(false);
    }, 5500);
  };

  return (
    <section id="features" className="py-24 max-w-7xl mx-auto px-6 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#00f0ff]/5 blur-[150px] pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-6 text-left">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full text-[#00f0ff] text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
            <Activity className="w-3.5 h-3.5" />
            <span>Real-time scanner simulation</span>
          </div>

          <h2 className="font-['Outfit'] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            Vulnerability Scan <br />
            Dashboard.
          </h2>

          <p className="text-slate-300 font-light leading-relaxed">
            취약점 점수와 실시간 방지 로그의 실시간 흐름을 보여주는 스캐너 데모를 구동해 보세요. 가볍고 강력한 비침습적 스캔 프로세스가 시스템 안정성을 즉시 확보합니다.
          </p>

          <button 
            onClick={runScan}
            disabled={scanning}
            className={`flex items-center space-x-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
              scanning 
                ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-white/5' 
                : 'bg-gradient-to-r from-[#00f0ff] to-[#3b82f6] text-[#050508] hover:scale-105 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]'
            }`}
          >
            {scanning ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>스캔 진행 중...</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" />
                <span>스캔 시작</span>
              </>
            )}
          </button>
        </div>

        <div className="lg:col-span-7 glass-card rounded-3xl p-6 relative overflow-hidden flex flex-col space-y-6 h-[460px]">
          <div className="absolute top-6 right-6 z-20 space-y-2 pointer-events-none max-w-xs">
            {alerts.map((alert, idx) => (
              <div 
                key={idx} 
                className="bg-red-950/90 border border-red-500/50 rounded-xl p-3 flex items-center space-x-3 text-red-200 shadow-lg backdrop-blur-md animate-bounce"
              >
                <ShieldAlert className="w-5 h-5 text-red-400 shrink-0" />
                <span className="text-xs font-semibold">{alert}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-xs text-slate-500 font-mono pl-2">fynsec-security-console</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-400">
              <Terminal className="w-4 h-4" />
              <span className="text-xs font-mono">live_feed</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="flex items-center space-x-6 justify-center md:justify-start">
              <div className="relative w-28 h-28 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="56" cy="56" r="48" stroke="rgba(255,255,255,0.03)" strokeWidth="8" fill="transparent" />
                  <circle 
                    cx="56" 
                    cy="56" 
                    r="48" 
                    stroke="#00f0ff" 
                    strokeWidth="8" 
                    fill="transparent"
                    strokeDasharray={2 * Math.PI * 48}
                    strokeDashoffset={2 * Math.PI * 48 * (1 - score / 100)}
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-black font-['Outfit']">{score}</span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest">Score</span>
                </div>
              </div>
              <div>
                <div className="text-sm font-semibold text-white">보안 안전성 수준</div>
                <div className="text-xs text-slate-400 mt-1 font-light">
                  {score >= 95 ? 'Excellent. System secured.' : 'Scan recommended. Risks detected.'}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 border border-white/5 rounded-2xl p-4 bg-white/2">
              <div>
                <div className="text-[10px] text-[#64748b] uppercase tracking-wider">ZTNA Status</div>
                <div className="text-sm font-bold text-[#10b981] flex items-center space-x-1 mt-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Active</span>
                </div>
              </div>
              <div>
                <div className="text-[10px] text-[#64748b] uppercase tracking-wider">Firewall Layer</div>
                <div className="text-sm font-bold text-[#a855f7] flex items-center space-x-1 mt-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>L7 Enabled</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-black/60 border border-white/5 rounded-2xl p-4 font-mono text-xs overflow-y-auto space-y-2.5 h-[180px] scrollbar-thin scrollbar-thumb-white/5">
            {logs.map((log) => (
              <div key={log.id} className="flex items-start space-x-2 leading-relaxed">
                <span className="text-[#64748b] shrink-0">[{log.time}]</span>
                <span className={`shrink-0 ${
                  log.type === 'warn' 
                    ? 'text-red-400' 
                    : log.type === 'success' 
                      ? 'text-emerald-400' 
                      : 'text-[#00f0ff]'
                }`}>
                  {log.type === 'warn' ? '[WARN]' : log.type === 'success' ? '[SECURE]' : '[INFO]'}
                </span>
                <span className="text-slate-300 break-all">{log.msg}</span>
              </div>
            ))}
            <div ref={logsEndRef}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreatDashboard;
