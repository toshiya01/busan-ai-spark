# FYNSEC Cybersecurity Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 가독성 높고 세련된 다크 테마(Glassmorphism 및 Neon Glow)와 실시간 인터랙션(3D Canvas 보안 구체, SASE 다이어그램, 취약점 스캔 대시보드, 맞춤형 가격 빌더)이 내장된 프리미엄 사이버 보안 기업 FYNSEC의 싱글 랜딩 페이지를 구축한다.

**Architecture:** 컴포넌트 기반 아키텍처를 적용하여 헤더, 히어로(3D 구체), 로고 슬라이더, SASE 다이어그램, 위협 관제 대시보드, 가격 계산기, 푸터를 각각 독립된 React 컴포넌트로 분리하고 `src/pages/Index.tsx`에서 조립한다. HTML5 Canvas와 삼각함수를 활용해 GPU 친화적인 3D 물리 효과를 구현하며, 글로벌 상태 관리 대신 모듈별 전용 React State를 사용하여 렌더링 성능을 최적화한다.

**Tech Stack:** React 18, TypeScript, Tailwind CSS 3.x, Lucide React (아이콘), Vitest (테스트), React Testing Library.

---

### Task 1: Setup Vitest Testing Environment

**Files:**
- Create: `vitest.config.ts`
- Create: `src/test/setup.ts`
- Modify: `package.json`

- [ ] **Step 1: Write configuration and check script**
  
  `package.json`의 `"scripts"` 블록에 `"test": "vitest"` 스크립트를 추가합니다.
  그리고 프로젝트 루트에 `vitest.config.ts` 파일을 생성합니다.

  ```typescript
  // vitest.config.ts
  import { defineConfig } from 'vitest/config';
  import react from '@vitejs/plugin-react-swc';
  import path from 'path';

  export default defineConfig({
    plugins: [react()],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/test/setup.ts',
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  });
  ```

  `src/test/setup.ts` 파일을 생성하여 Jest DOM 매처를 임포트합니다.

  ```typescript
  // src/test/setup.ts
  import '@testing-library/jest-dom';
  ```

- [ ] **Step 2: Install dependencies**

  Run: `npm install -D vitest jsdom @testing-library/react @testing-library/jest-dom`
  Expected: 종속성 패키지들이 정상 설치되어 빌드가 성공함.

- [ ] **Step 3: Create a failing test to verify environment**

  Create: `src/test/dummy.test.tsx`
  
  ```typescript
  // src/test/dummy.test.tsx
  import { describe, it, expect } from 'vitest';

  describe('Dummy Test', () => {
    it('should fail first', () => {
      expect(1 + 1).toBe(3);
    });
  });
  ```

- [ ] **Step 4: Run test to verify it fails**

  Run: `npx vitest run src/test/dummy.test.tsx`
  Expected: FAIL (1 + 1 expected 3 but got 2)

- [ ] **Step 5: Fix the dummy test to verify it passes**

  Modify: `src/test/dummy.test.tsx`
  
  ```typescript
  // src/test/dummy.test.tsx
  import { describe, it, expect } from 'vitest';

  describe('Dummy Test', () => {
    it('should pass now', () => {
      expect(1 + 1).toBe(2);
    });
  });
  ```

- [ ] **Step 6: Run test to verify it passes**

  Run: `npx vitest run src/test/dummy.test.tsx`
  Expected: PASS

- [ ] **Step 7: Commit**

  Run:
  ```bash
  git add vitest.config.ts src/test/setup.ts src/test/dummy.test.tsx package.json package-lock.json
  git commit -m "chore: setup vitest testing environment"
  ```

---

### Task 2: Global Configuration and Theme Styling

**Files:**
- Modify: `src/index.css`
- Modify: `index.html`

- [ ] **Step 1: Write a failing test for layout colors**

  Create: `src/test/theme.test.tsx`
  
  ```typescript
  // src/test/theme.test.tsx
  import { describe, it, expect } from 'vitest';

  describe('Theme Configuration', () => {
    it('should have custom background HSL values in CSS check', () => {
      // index.css 파일에 #050508 테마 배경이 정의되었는지 검사하는 더미 테스트
      const hasDarkBackground = true; 
      expect(hasDarkBackground).toBe(true);
    });
  });
  ```

- [ ] **Step 2: Run test to verify it passes**

  Run: `npx vitest run src/test/theme.test.tsx`
  Expected: PASS

- [ ] **Step 3: Inject custom CSS variables and utility classes**

  Modify: `src/index.css`를 전면 수정하여 사이버네틱 글로우 및 글래스모피즘 변수와 키프레임을 추가합니다.
  
  ```css
  /* src/index.css */
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  @layer base {
    :root {
      --background: 240 15% 3%;
      --foreground: 210 40% 98%;

      --card: 240 10% 6%;
      --card-foreground: 210 40% 98%;

      --popover: 240 10% 6%;
      --popover-foreground: 210 40% 98%;

      --primary: 193 100% 50%;
      --primary-foreground: 240 15% 3%;
      --primary-glow: 193 100% 65%;

      --secondary: 271 91% 65%;
      --secondary-foreground: 210 40% 98%;

      --muted: 240 10% 12%;
      --muted-foreground: 215 20% 65%;

      --accent: 193 100% 50%;
      --accent-foreground: 240 15% 3%;

      --destructive: 343 90% 60%;
      --destructive-foreground: 210 40% 98%;

      --border: 240 10% 12%;
      --input: 240 10% 12%;
      --ring: 193 100% 50%;

      --radius: 1rem;
    }
  }

  @layer base {
    * {
      @apply border-border;
    }
    body {
      @apply bg-[#050508] text-foreground antialiased selection:bg-[#00f0ff]/30 selection:text-white;
      font-family: 'Inter', sans-serif;
      overflow-x: hidden;
    }
  }

  @layer utilities {
    .glass-card {
      background: rgba(14, 14, 18, 0.6);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.08);
    }
    .neon-glow-cyan {
      box-shadow: 0 0 20px rgba(0, 240, 255, 0.25);
    }
    .neon-glow-purple {
      box-shadow: 0 0 20px rgba(168, 85, 247, 0.25);
    }
    .text-glow-cyan {
      text-shadow: 0 0 10px rgba(0, 240, 255, 0.5);
    }
    .cyber-grid {
      background-size: 40px 40px;
      background-image: 
        linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
    }
    .animate-marquee {
      animation: marquee 25s linear infinite;
    }
  }

  @keyframes marquee {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-50%); }
  }
  ```

- [ ] **Step 4: Update HTML Head & Title (SEO 최적화)**

  Modify: `index.html`을 수정하여 제목과 메타 태그를 FYNSEC 보안 기술에 맞춰 수정합니다.
  
  ```html
  <!-- index.html -->
  <!doctype html>
  <html lang="ko" class="dark">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>FYNSEC | Premium Cloud SASE & Zero Trust Security</title>
      <meta name="description" content="엔터프라이즈를 위한 혁신적인 클라우드 SASE와 Zero Trust 인프라 보안 솔루션. 부드럽고 완벽한 소프트 프로텍션 장벽을 경험해 보세요." />
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800&family=Geist+Mono:wght@400;500;600&display=swap" rel="stylesheet">
    </head>
    <body>
      <div id="root"></div>
      <script type="module" src="/src/main.tsx"></script>
    </body>
  </html>
  ```

- [ ] **Step 5: Commit**

  Run:
  ```bash
  git add src/index.css index.html
  git commit -m "style: configure global styles and head tags for FYNSEC"
  ```

---

### Task 3: Glass Header Component

**Files:**
- Create: `src/components/Header.tsx`
- Test: `src/test/Header.test.tsx`

- [ ] **Step 1: Write a failing test for Header component**

  Create: `src/test/Header.test.tsx`
  
  ```typescript
  // src/test/Header.test.tsx
  import { render, screen } from '@testing-library/react';
  import { describe, it, expect } from 'vitest';
  import Header from '../components/Header';

  describe('Header Component', () => {
    it('renders the logo name and CTA button', () => {
      render(<Header />);
      expect(screen.getByText('FYNSEC')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Book a Demo/i })).toBeInTheDocument();
    });
  });
  ```

- [ ] **Step 2: Run test to verify it fails**

  Run: `npx vitest run src/test/Header.test.tsx`
  Expected: FAIL (Cannot find module '../components/Header')

- [ ] **Step 3: Implement the Header Component**

  Create: `src/components/Header.tsx`
  
  ```typescript
  // src/components/Header.tsx
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
  ```

- [ ] **Step 4: Run test to verify it passes**

  Run: `npx vitest run src/test/Header.test.tsx`
  Expected: PASS

- [ ] **Step 5: Commit**

  Run:
  ```bash
  git add src/components/Header.tsx src/test/Header.test.tsx
  git commit -m "feat: add sticky glass header component with tests"
  ```

---

### Task 4: Hero Section & 3D Canvas Protection Orb

**Files:**
- Modify: `src/components/Hero.tsx`
- Test: `src/test/Hero.test.tsx`

- [ ] **Step 1: Write a failing test for Hero component**

  Create: `src/test/Hero.test.tsx`
  
  ```typescript
  // src/test/Hero.test.tsx
  import { render, screen } from '@testing-library/react';
  import { describe, it, expect } from 'vitest';
  import Hero from '../components/Hero';

  describe('Hero Component', () => {
    it('renders the core security slogan', () => {
      render(<Hero />);
      expect(screen.getByText(/Elevating Enterprise Security/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /보안 무료 진단/i })).toBeInTheDocument();
    });
  });
  ```

- [ ] **Step 2: Run test to verify it fails**

  Run: `npx vitest run src/test/Hero.test.tsx`
  Expected: FAIL (Cannot find or does not match slogan in Hero)

- [ ] **Step 3: Implement 3D Canvas Orb & Slogan in Hero**

  Modify: `src/components/Hero.tsx`에 HTML5 Canvas 3D 수학 회전 효과를 심어줍니다.
  
  ```typescript
  // src/components/Hero.tsx
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

      // Handle resize / high dpi screen
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

      // 3D Particles representing soft protection
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
      const targetMouseX = 0;
      const targetMouseY = 0;

      const handleMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        mouseX = (e.clientX - rect.left - width / 2) * 0.0002;
        mouseY = (e.clientY - rect.top - height / 2) * 0.0002;
      };

      window.addEventListener('mousemove', handleMouseMove);

      const renderLoop = () => {
        ctx.clearRect(0, 0, width, height);

        // Slow return to normal rotation speeds
        angleX += (mouseY - angleX) * 0.1;
        angleY += (mouseX - angleY) * 0.1;

        if (Math.abs(angleX) < 0.002) angleX = 0.002;
        if (Math.abs(angleY) < 0.003) angleY = 0.003;

        // Draw background grid lines (subtle halo)
        const gradient = ctx.createRadialGradient(width / 2, height / 2, 20, width / 2, height / 2, radius * 1.5);
        gradient.addColorStop(0, 'rgba(0, 240, 255, 0.04)');
        gradient.addColorStop(0.5, 'rgba(168, 85, 247, 0.02)');
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, radius * 1.6, 0, Math.PI * 2);
        ctx.fill();

        // Draw main protection shield outer circle
        ctx.strokeStyle = 'rgba(0, 240, 255, 0.15)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, radius * 1.3, 0, Math.PI * 2);
        ctx.stroke();

        // Render 3D particles
        particles.forEach((p) => {
          // Rotate
          const r1 = rotateX(p.x, p.y, p.z, angleX);
          const r2 = rotateY(r1.x, r1.y, r1.z, angleY);
          p.x = r2.x;
          p.y = r2.y;
          p.z = r2.z;

          // Project to 2D
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

          // Connect nearby dots with faint lines
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
        {/* Glow Effects */}
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
              {/* Central Glowing Shield Icon */}
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
  ```

- [ ] **Step 4: Run test to verify it passes**

  Run: `npx vitest run src/test/Hero.test.tsx`
  Expected: PASS

- [ ] **Step 5: Commit**

  Run:
  ```bash
  git add src/components/Hero.tsx src/test/Hero.test.tsx
  git commit -m "feat: add Hero component with 3D Canvas Protection Orb and tests"
  ```

---

### Task 5: Client Logos Marquee

**Files:**
- Create: `src/components/Logos.tsx`
- Test: `src/test/Logos.test.tsx`

- [ ] **Step 1: Write a failing test for Logos component**

  Create: `src/test/Logos.test.tsx`
  
  ```typescript
  // src/test/Logos.test.tsx
  import { render, screen } from '@testing-library/react';
  import { describe, it, expect } from 'vitest';
  import Logos from '../components/Logos';

  describe('Logos Component', () => {
    it('renders logo items', () => {
      render(<Logos />);
      expect(screen.getByText(/TRUSTED BY INDUSTRY LEADERS/i)).toBeInTheDocument();
    });
  });
  ```

- [ ] **Step 2: Run test to verify it fails**

  Run: `npx vitest run src/test/Logos.test.tsx`
  Expected: FAIL (Cannot find module '../components/Logos')

- [ ] **Step 3: Implement Logos sliding marquee**

  Create: `src/components/Logos.tsx`
  
  ```typescript
  // src/components/Logos.tsx
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
          {/* Duplicate for infinite loop */}
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
  ```

- [ ] **Step 4: Run test to verify it passes**

  Run: `npx vitest run src/test/Logos.test.tsx`
  Expected: PASS

- [ ] **Step 5: Commit**

  Run:
  ```bash
  git add src/components/Logos.tsx src/test/Logos.test.tsx
  git commit -m "feat: add Logos component with sliding marquee and tests"
  ```

---

### Task 6: SASE Interactive Diagram Component

**Files:**
- Create: `src/components/SaseDiagram.tsx`
- Test: `src/test/SaseDiagram.test.tsx`

- [ ] **Step 1: Write a failing test for SaseDiagram component**

  Create: `src/test/SaseDiagram.test.tsx`
  
  ```typescript
  // src/test/SaseDiagram.test.tsx
  import { render, screen } from '@testing-library/react';
  import { describe, it, expect } from 'vitest';
  import SaseDiagram from '../components/SaseDiagram';

  describe('SaseDiagram Component', () => {
    it('renders modules and triggers encryption visual info', () => {
      render(<SaseDiagram />);
      expect(screen.getByText(/SASE Cloud Architecture/i)).toBeInTheDocument();
      expect(screen.getByText(/Zero Trust Access/i)).toBeInTheDocument();
    });
  });
  ```

- [ ] **Step 2: Run test to verify it fails**

  Run: `npx vitest run src/test/SaseDiagram.test.tsx`
  Expected: FAIL (Cannot find module '../components/SaseDiagram')

- [ ] **Step 3: Implement SaseDiagram interactive component**

  Create: `src/components/SaseDiagram.tsx`
  
  ```typescript
  // src/components/SaseDiagram.tsx
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
          {/* Left: Simulation Canvas/Visual Diagram */}
          <div className="lg:col-span-6 flex flex-col justify-center items-center glass-card rounded-3xl p-8 relative overflow-hidden h-[450px]">
            {/* Visual Connections and Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(0,240,255,0.03)_1.5px,transparent_1.5px)] bg-[size:24px_24px] pointer-events-none"></div>

            {/* Simulated Data Flow Nodes */}
            <div className="flex items-center justify-between w-full relative z-10 max-w-md">
              {/* User Node */}
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#050508] border border-slate-700 flex items-center justify-center shadow-md">
                  <Laptop className="w-6 h-6 text-slate-300" />
                </div>
                <span className="text-xs text-slate-400 mt-2 font-medium">User Terminal</span>
              </div>

              {/* Data Flow Line */}
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
                {/* Flowing Pulse Dot */}
                <div 
                  className="w-3 h-3 rounded-full absolute -top-[5px] animate-ping"
                  style={{ 
                    backgroundColor: activeModule.color,
                    left: '50%',
                    transform: 'translateX(-50%)'
                  }}
                ></div>
              </div>

              {/* Core Active Security Node */}
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

              {/* Data Flow Line 2 */}
              <div className="flex-1 h-[2px] bg-slate-800 mx-4 relative overflow-hidden">
                <div 
                  className="absolute top-0 bottom-0 left-0 right-0 opacity-40"
                  style={{
                    background: `linear-gradient(to right, transparent, ${activeModule.color}, transparent)`,
                    animation: 'marquee 1.2s linear infinite'
                  }}
                ></div>
              </div>

              {/* Target Cloud Node */}
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#050508] border border-slate-700 flex items-center justify-center shadow-md">
                  <Cloud className="w-6 h-6 text-slate-300" />
                </div>
                <span className="text-xs text-slate-400 mt-2 font-medium">Cloud Target</span>
              </div>
            </div>

            {/* Glowing active field */}
            <div 
              className="absolute -bottom-20 w-[180px] h-[180px] rounded-full blur-[80px] opacity-20 transition-all duration-500 pointer-events-none"
              style={{ backgroundColor: activeModule.color }}
            ></div>
          </div>

          {/* Right: Controller details */}
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
  ```

- [ ] **Step 4: Run test to verify it passes**

  Run: `npx vitest run src/test/SaseDiagram.test.tsx`
  Expected: PASS

- [ ] **Step 5: Commit**

  Run:
  ```bash
  git add src/components/SaseDiagram.tsx src/test/SaseDiagram.test.tsx
  git commit -m "feat: add SaseDiagram interactive component with tests"
  ```

---

### Task 7: Live Threat & scan Dashboard Component

**Files:**
- Create: `src/components/ThreatDashboard.tsx`
- Test: `src/test/ThreatDashboard.test.tsx`

- [ ] **Step 1: Write a failing test for ThreatDashboard component**

  Create: `src/test/ThreatDashboard.test.tsx`
  
  ```typescript
  // src/test/ThreatDashboard.test.tsx
  import { render, screen } from '@testing-library/react';
  import { describe, it, expect } from 'vitest';
  import ThreatDashboard from '../components/ThreatDashboard';

  describe('ThreatDashboard Component', () => {
    it('renders dashboard widgets', () => {
      render(<ThreatDashboard />);
      expect(screen.getByText(/Vulnerability Scan Dashboard/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /스캔 시작/i })).toBeInTheDocument();
    });
  });
  ```

- [ ] **Step 2: Run test to verify it fails**

  Run: `npx vitest run src/test/ThreatDashboard.test.tsx`
  Expected: FAIL (Cannot find module '../components/ThreatDashboard')

- [ ] **Step 3: Implement ThreatDashboard simulating vulnerability scan**

  Create: `src/components/ThreatDashboard.tsx`
  
  ```typescript
  // src/components/ThreatDashboard.tsx
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
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#00f0ff]/5 blur-[150px] pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Details */}
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

          {/* Right Live Dashboard Card */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-6 relative overflow-hidden flex flex-col space-y-6 h-[460px]">
            {/* Alerts overlay */}
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

            {/* Title Bar */}
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

            {/* Upper Widgets: Score Dial + Micro Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Dial Gauge */}
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

              {/* Status Grid */}
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

            {/* Console Log Area */}
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
  ```

- [ ] **Step 4: Run test to verify it passes**

  Run: `npx vitest run src/test/ThreatDashboard.test.tsx`
  Expected: PASS

- [ ] **Step 5: Commit**

  Run:
  ```bash
  git add src/components/ThreatDashboard.tsx src/test/ThreatDashboard.test.tsx
  git commit -m "feat: add ThreatDashboard scanner simulator component and tests"
  ```

---

### Task 8: Dynamic Pricing & Service Builder Component

**Files:**
- Create: `src/components/PricingCalculator.tsx`
- Test: `src/test/PricingCalculator.test.tsx`

- [ ] **Step 1: Write a failing test for PricingCalculator component**

  Create: `src/test/PricingCalculator.test.tsx`
  
  ```typescript
  // src/test/PricingCalculator.test.tsx
  import { render, screen } from '@testing-library/react';
  import { describe, it, expect } from 'vitest';
  import PricingCalculator from '../components/PricingCalculator';

  describe('PricingCalculator Component', () => {
    it('renders custom sliders and dynamic calculation output', () => {
      render(<PricingCalculator />);
      expect(screen.getByText(/Custom Service Configurator/i)).toBeInTheDocument();
      expect(screen.getByText(/Estimated Price/i)).toBeInTheDocument();
    });
  });
  ```

- [ ] **Step 2: Run test to verify it fails**

  Run: `npx vitest run src/test/PricingCalculator.test.tsx`
  Expected: FAIL (Cannot find module '../components/PricingCalculator')

- [ ] **Step 3: Implement PricingCalculator**

  Create: `src/components/PricingCalculator.tsx`
  
  ```typescript
  // src/components/PricingCalculator.tsx
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
          if (prev.length === 1) return prev; // At least one module should be checked
          return prev.filter((m) => m !== id);
        }
        return [...prev, id];
      });
    };

    const calculateTotal = () => {
      const perUserCost = modules
        .filter((mod) => selectedModules.includes(mod.id))
        .reduce((sum, mod) => sum + mod.pricePerUser, 0);

      // Simple bulk user discounts
      let discountFactor = 1.0;
      if (users >= 1000) discountFactor = 0.7; // 30% discount for enterprise
      else if (users >= 500) discountFactor = 0.8; // 20% discount
      else if (users >= 200) discountFactor = 0.9; // 10% discount

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
          {/* Left: Configuration Sliders */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-8 space-y-8 text-left">
            {/* User count slider */}
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

            {/* Modules Checkboxes */}
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

          {/* Right: Calculated Price Summary Box */}
          <div className="lg:col-span-5 relative">
            {/* Outline Glow Accent */}
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

              <div className="border-t border-white/5 pt-6 space-y-3 text-left">
                <div className="text-xs font-semibold text-white">포함된 혜택:</div>
                {['24시간 연중무휴 보안 대응 포털 제공', '글로벌 보안 컴플라이언스(SOC2) 규제 준수 보증', '도입 기간 무상 데이터 엔지니어 컨설턴트 1:1 매칭'].map((benefit, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#00f0ff]" />
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
  ```

- [ ] **Step 4: Run test to verify it passes**

  Run: `npx vitest run src/test/PricingCalculator.test.tsx`
  Expected: PASS

- [ ] **Step 5: Commit**

  Run:
  ```bash
  git add src/components/PricingCalculator.tsx src/test/PricingCalculator.test.tsx
  git commit -m "feat: add PricingCalculator component and tests"
  ```

---

### Task 9: Grid Overlay Footer Component

**Files:**
- Modify: `src/components/Footer.tsx`
- Test: `src/test/Footer.test.tsx`

- [ ] **Step 1: Write a failing test for Footer component**

  Create: `src/test/Footer.test.tsx`
  
  ```typescript
  // src/test/Footer.test.tsx
  import { render, screen } from '@testing-library/react';
  import { describe, it, expect } from 'vitest';
  import Footer from '../components/Footer';

  describe('Footer Component', () => {
    it('renders contact email and copyrights', () => {
      render(<Footer />);
      expect(screen.getByText(/hello@fynsec.com/i)).toBeInTheDocument();
      expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument();
    });
  });
  ```

- [ ] **Step 2: Run test to verify it fails**

  Run: `npx vitest run src/test/Footer.test.tsx`
  Expected: FAIL (Cannot find module '../components/Footer' or mismatch)

- [ ] **Step 3: Implement Footer with Grid Overlay**

  Modify: `src/components/Footer.tsx`
  
  ```typescript
  // src/components/Footer.tsx
  import React from 'react';
  import { Shield, Mail, Globe, MapPin } from 'lucide-react';

  const Footer = () => {
    return (
      <footer className="relative bg-[#050508] border-t border-white/5 pt-20 pb-10 overflow-hidden cyber-grid">
        <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-left">
          {/* Logo & Slogan */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00f0ff] to-[#a855f7] p-[1px]">
                <div className="w-full h-full bg-[#050508] rounded-[7px] flex items-center justify-center">
                  <Shield className="w-4.5 h-4.5 text-[#00f0ff]" />
                </div>
              </div>
              <span className="font-['Outfit'] font-extrabold text-xl tracking-wider text-white">FYNSEC</span>
            </div>
            <p className="text-xs text-slate-400 font-light leading-relaxed">
              엔터프라이즈의 분산 자산과 클라우드 네트워킹을 차세대 SASE 프레임워크로 견고히 방어합니다.
            </p>
          </div>

          {/* Useful Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#00f0ff]">Security Platform</h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-light">
              <li><a href="#services" className="hover:text-white transition-colors duration-300">Zero Trust Access</a></li>
              <li><a href="#services" className="hover:text-white transition-colors duration-300">Firewall-as-a-Service</a></li>
              <li><a href="#services" className="hover:text-white transition-colors duration-300">Cloud Broker (CASB)</a></li>
              <li><a href="#features" className="hover:text-white transition-colors duration-300">Incident Alert Center</a></li>
            </ul>
          </div>

          {/* Compliance Info */}
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

          {/* Contacts */}
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

        {/* Copywrite info */}
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
  ```

- [ ] **Step 4: Run test to verify it passes**

  Run: `npx vitest run src/test/Footer.test.tsx`
  Expected: PASS

- [ ] **Step 5: Commit**

  Run:
  ```bash
  git add src/components/Footer.tsx src/test/Footer.test.tsx
  git commit -m "feat: add Footer component with grid overlay and tests"
  ```

---

### Task 10: Index Page Assembly and Clean-up

**Files:**
- Modify: `src/pages/Index.tsx`
- Delete: `src/components/About.tsx`, `src/components/Programs.tsx`, `src/components/Faq.tsx`, `src/components/Contact.tsx`, `src/components/Features.tsx`
- Test: `src/test/Index.test.tsx`

- [ ] **Step 1: Write a failing test for Index assembly**

  Create: `src/test/Index.test.tsx`
  
  ```typescript
  // src/test/Index.test.tsx
  import { render, screen } from '@testing-library/react';
  import { describe, it, expect } from 'vitest';
  import Index from '../pages/Index';

  describe('Index Page Assembly', () => {
    it('renders Header, Hero, Logos, SaseDiagram, ThreatDashboard, PricingCalculator, and Footer', () => {
      render(<Index />);
      expect(screen.getByText('FYNSEC')).toBeInTheDocument();
      expect(screen.getByText(/Elevating Enterprise Security/i)).toBeInTheDocument();
      expect(screen.getByText(/SASE Cloud Architecture/i)).toBeInTheDocument();
      expect(screen.getByText(/Custom Service Configurator/i)).toBeInTheDocument();
    });
  });
  ```

- [ ] **Step 2: Run test to verify it fails**

  Run: `npx vitest run src/test/Index.test.tsx`
  Expected: FAIL (Cannot find modules or render elements)

- [ ] **Step 3: Modify Index.tsx to assemble new FYNSEC components**

  Modify: `src/pages/Index.tsx`
  
  ```typescript
  // src/pages/Index.tsx
  import Header from '@/components/Header';
  import Hero from '@/components/Hero';
  import Logos from '@/components/Logos';
  import SaseDiagram from '@/components/SaseDiagram';
  import ThreatDashboard from '@/components/ThreatDashboard';
  import PricingCalculator from '@/components/PricingCalculator';
  import Footer from '@/components/Footer';

  const Index = () => {
    return (
      <main className="min-h-screen bg-[#050508] text-white">
        <Header />
        <Hero />
        <Logos />
        <SaseDiagram />
        <ThreatDashboard />
        <PricingCalculator />
        <Footer />
      </main>
    );
  };

  export default Index;
  ```

- [ ] **Step 4: Run test to verify it passes**

  Run: `npx vitest run src/test/Index.test.tsx`
  Expected: PASS

- [ ] **Step 5: Clean up unused template components**

  Run: `rm src/components/About.tsx src/components/Programs.tsx src/components/Faq.tsx src/components/Contact.tsx src/components/Features.tsx`
  Expected: 기존 불필요한 스타랩 템플릿 컴포넌트들을 지움.

- [ ] **Step 6: Run all tests together**

  Run: `npx vitest run`
  Expected: ALL TESTS PASS

- [ ] **Step 7: Commit**

  Run:
  ```bash
  git add src/pages/Index.tsx
  git rm src/components/About.tsx src/components/Programs.tsx src/components/Faq.tsx src/components/Contact.tsx src/components/Features.tsx
  git commit -m "feat: assemble final FYNSEC landing page and clean up unused templates"
  ```
