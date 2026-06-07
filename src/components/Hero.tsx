import React, { useEffect, useRef } from 'react';
import { Shield, Sparkles } from 'lucide-react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = 500);
    let height = (canvas.height = 500);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      width = rect.width;
      height = rect.height;
    };
    
    resize();
    window.addEventListener('resize', resize);

    const particles: { x: number; y: number; z: number; ox: number; oy: number; oz: number }[] = [];
    const numParticles = 180;
    const radius = 120;

    for (let i = 0; i < numParticles; i++) {
      const theta = Math.acos(Math.random() * 2 - 1);
      const phi = Math.random() * Math.PI * 2;

      const x = radius * Math.sin(theta) * Math.cos(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(theta);

      particles.push({ x, y, z, ox: x, oy: y, oz: z });
    }

    let angleX = 0.003;
    let angleY = 0.005;

    const rotateX = (x: number, y: number, z: number, angle: number) => {
      const rad = angle;
      const cos = Math.cos(rad);
      const sin = Math.sin(rad);
      return {
        x,
        y: y * cos - z * sin,
        z: y * sin + z * cos,
      };
    };

    const rotateY = (x: number, y: number, z: number, angle: number) => {
      const rad = angle;
      const cos = Math.cos(rad);
      const sin = Math.sin(rad);
      return {
        x: x * cos + z * sin,
        y,
        z: -x * sin + z * cos,
      };
    };

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = (e.clientX - rect.left - width / 2) * 0.0002;
      mouseY = (e.clientY - rect.top - height / 2) * 0.0002;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const renderLoop = () => {
      ctx.clearRect(0, 0, width, height);

      angleX += (mouseY - angleX) * 0.1;
      angleY += (mouseX - angleY) * 0.1;

      if (Math.abs(angleX) < 0.002) angleX = 0.002;
      if (Math.abs(angleY) < 0.003) angleY = 0.003;

      const gradient = ctx.createRadialGradient(width / 2, height / 2, 20, width / 2, height / 2, radius * 1.5);
      gradient.addColorStop(0, 'rgba(0, 240, 255, 0.04)');
      gradient.addColorStop(0.5, 'rgba(168, 85, 247, 0.02)');
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, radius * 1.6, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = 'rgba(0, 240, 255, 0.15)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, radius * 1.3, 0, Math.PI * 2);
      ctx.stroke();

      particles.forEach((p) => {
        const r1 = rotateX(p.x, p.y, p.z, angleX);
        const r2 = rotateY(r1.x, r1.y, r1.z, angleY);
        p.x = r2.x;
        p.y = r2.y;
        p.z = r2.z;

        const distance = 350;
        const scale = distance / (distance - p.z);
        const projX = p.x * scale + width / 2;
        const projY = p.y * scale + height / 2;

        const alpha = (p.z + radius) / (radius * 2) * 0.8 + 0.2;
        const size = scale * 1.8;

        ctx.fillStyle = p.z > 0 ? `rgba(0, 240, 255, ${alpha})` : `rgba(168, 85, 247, ${alpha * 0.7})`;
        ctx.beginPath();
        ctx.arc(projX, projY, size, 0, Math.PI * 2);
        ctx.fill();

        particles.forEach((other) => {
          const dx = p.x - other.x;
          const dy = p.y - other.y;
          const dz = p.z - other.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < 45) {
            const otherScale = distance / (distance - other.z);
            const otherProjX = other.x * otherScale + width / 2;
            const otherProjY = other.y * otherScale + height / 2;

            ctx.strokeStyle = `rgba(0, 240, 255, ${0.1 * (1 - dist / 45) * alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(projX, projY);
            ctx.lineTo(otherProjX, otherProjY);
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    renderLoop();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 cyber-grid overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#00f0ff]/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#a855f7]/10 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-7 text-left space-y-6">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full text-[#00f0ff] text-xs font-semibold uppercase tracking-wider backdrop-blur-sm animate-pulse">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Next-Gen Cloud Security Service</span>
          </div>
          
          <h1 className="font-['Outfit'] font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight">
            Elevating Enterprise <br />
            <span className="bg-gradient-to-r from-[#00f0ff] via-[#3b82f6] to-[#a855f7] bg-clip-text text-transparent text-glow-cyan">
              Security Through
            </span> <br />
            Soft Protection.
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed font-light">
            클라우드 네이티브 SASE 솔루션과 Zero Trust 인프라를 통해 복잡한 전통적 위협을 차단하고 엔터프라이즈 장벽을 부드럽고 완벽하게 보호합니다.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <button className="bg-gradient-to-r from-[#00f0ff] to-[#3b82f6] text-[#050508] px-8 py-3.5 rounded-full font-bold text-base transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(0,240,255,0.45)]">
              보안 무료 진단
            </button>
            <button className="bg-white/5 border border-white/10 text-white hover:bg-white/10 px-8 py-3.5 rounded-full font-bold text-base transition-all duration-300 backdrop-blur-sm">
              작동 데모 보기
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative w-[340px] h-[340px] sm:w-[450px] sm:h-[450px] flex items-center justify-center">
            <canvas 
              ref={canvasRef} 
              className="w-full h-full cursor-pointer relative z-10"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-20 h-20 rounded-full bg-[#050508]/90 border border-[#00f0ff]/20 flex items-center justify-center shadow-[0_0_30px_rgba(0,240,255,0.15)] animate-pulse">
                <Shield className="w-8 h-8 text-[#00f0ff]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
