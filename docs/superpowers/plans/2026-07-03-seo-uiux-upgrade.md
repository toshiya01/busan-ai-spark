# SEO and UI/UX Upgrade Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade the Starlab education event landing page with premium local SEO tags, modern glassmorphism UI/UX design, custom fonts, smooth micro-animations, and a fully accessible mobile navigation menu.

**Architecture:** Integrate Web Fonts in Next.js metadata layout. Convert page to a client component for interactive drawer navigation. Update globals.css with transition effects, glassmorphism styles, and flexible grid breakpoints.

**Tech Stack:** Next.js (App Router), React 18, next/font/google, Tailwind-less Custom CSS.

---

### Task 1: Fonts, Icons, and Twitter SEO metadata Setup

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Load fonts and add SEO metadata in layout.tsx**
  Update `/Users/jo/projects/busan-ai-spark/app/layout.tsx` to import Outfit and Inter from `next/font/google`, define touch icons, and configure Twitter card metadata.
  ```typescript
  import type {Metadata} from 'next';
  import {Outfit, Inter} from 'next/font/google';
  import './globals.css';

  const outfit = Outfit({
    subsets: ['latin'],
    variable: '--font-outfit',
    display: 'swap',
  });

  const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
  });

  const siteUrl = 'https://ai.starlab.co.kr';

  export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: '부산 울산 경남 교육 행사 프로그램 운영 관리 대행｜스타랩',
    description: '공공기관·지자체·교육기관 대상 교육 행사, 프로그램 기획, 참가자 모집 관리, 현장 운영, 결과보고까지 부산 울산 경남에서 대행합니다.',
    keywords: ['부산 교육 행사 대행', '울산 프로그램 운영 대행', '경남 공공기관 행사 운영', '교육 프로그램 운영 관리 대행', '공공기관 행사 대행'],
    alternates: {canonical: '/'},
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
      apple: '/favicon.ico',
    },
    openGraph: {
      title: '부산 울산 경남 교육 행사 프로그램 운영 관리 대행｜스타랩',
      description: '기획부터 참가자 관리, 현장 운영, 결과보고까지 공공기관 교육 행사 운영을 한 번에 맡깁니다.',
      url: siteUrl,
      siteName: '스타랩',
      locale: 'ko_KR',
      type: 'website',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: '스타랩 교육 행사 대행'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: '부산 울산 경남 교육 행사 프로그램 운영 관리 대행｜스타랩',
      description: '기획부터 참가자 관리, 현장 운영, 결과보고까지 공공기관 교육 행사 운영을 한 번에 맡깁니다.',
      images: ['/og-image.jpg'],
    }
  };

  export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
      <html lang="ko" className={`${outfit.variable} ${inter.variable}`}>
        <body>{children}</body>
      </html>
    );
  }
  ```

- [ ] **Step 2: Commit metadata changes**
  Run:
  ```bash
  git add app/layout.tsx
  git commit -m "chore: configure fonts, favicons, and Twitter SEO metadata"
  ```

---

### Task 2: Page Interactive Hamburger Menu and Schema Enhancement

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Update page.tsx to client component with responsive header & enhanced JSON-LD**
  Modify `/Users/jo/projects/busan-ai-spark/app/page.tsx` to include `'use client'`, import `useState`, set up menu states, render the hamburger button / mobile navigation overlay, and enhance LocalBusiness Schema with contact info.
  ```typescript
  'use client';

  import {useState} from 'react';

  const services = [
    ['01', '프로그램 기획', '기관 목적과 예산에 맞춰 교육 주제, 일정, 운영안을 정리합니다.'],
    ['02', '참가자 모집 관리', '신청 폼, 명단, 안내 문자, 출결 확인까지 운영합니다.'],
    ['03', '현장 운영', '접수대, 강사 응대, 장비, 안전, 동선, 스태프를 관리합니다.'],
    ['04', '결과보고', '사진, 만족도, 정산 자료, 운영 결과보고서까지 정리합니다.']
  ];

  const regions = ['부산', '울산', '창원', '김해', '양산', '진주', '거제', '경남 전역'];
  const targets = ['공공기관', '지자체', '교육청', '대학·센터', '재단·협회', '청년·창업기관'];
  const faqs = [
    ['부산 울산 경남 외 지역도 가능한가요?', '가능합니다. 다만 현장 운영 인력과 이동 동선을 기준으로 일정과 견적을 먼저 확인합니다.'],
    ['공공기관 결과보고서까지 맡길 수 있나요?', '가능합니다. 사진 정리, 만족도 취합, 참석자 통계, 운영 개선점까지 보고서 형태로 정리합니다.'],
    ['교육 프로그램 기획만 의뢰할 수 있나요?', '가능합니다. 주제 설계, 커리큘럼, 강사 섭외, 운영 매뉴얼 중 필요한 범위만 맡길 수 있습니다.']
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        name: '스타랩',
        areaServed: ['부산', '울산', '경남'],
        description: '공공기관 교육 행사 프로그램 운영 관리 대행',
        url: 'https://ai.starlab.co.kr',
        telephone: '051-000-0000',
        address: {
          '@type': 'PostalAddress',
          addressLocality: '부산광역시',
          addressCountry: 'KR'
        }
      },
      {
        '@type': 'Service',
        name: '부산 울산 경남 교육 행사 프로그램 운영 관리 대행',
        provider: {'@type': 'LocalBusiness', name: '스타랩'},
        areaServed: ['부산', '울산', '경남'],
        serviceType: '공공기관 행사 운영 대행'
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map(([q, a]) => ({'@type': 'Question', name: q, acceptedAnswer: {'@type': 'Answer', text: a}}))
      }
    ]
  };

  export default function Page() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}} />
        
        <header className="nav">
          <a className="brand" href="#top" aria-label="스타랩 홈">StarLab</a>
          
          <button 
            className="menuToggle" 
            onClick={() => setMenuOpen(!menuOpen)} 
            aria-expanded={menuOpen}
            aria-label="메뉴 열기/닫기"
          >
            <span className={`bar ${menuOpen ? 'active' : ''}`}></span>
            <span className={`bar ${menuOpen ? 'active' : ''}`}></span>
            <span className={`bar ${menuOpen ? 'active' : ''}`}></span>
          </button>

          <nav className={`navLinks ${menuOpen ? 'open' : ''}`} aria-label="주요 메뉴">
            <a href="#service" onClick={() => setMenuOpen(false)}>서비스</a>
            <a href="#process" onClick={() => setMenuOpen(false)}>프로세스</a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
            <a className="navCta" href="#contact" onClick={() => setMenuOpen(false)}>상담 문의</a>
          </nav>
        </header>

        <section id="top" className="hero">
          <div className="heroText">
            <p className="eyebrow">Busan · Ulsan · Gyeongnam</p>
            <h1>부산 울산 경남 교육 행사 프로그램 운영 관리 대행</h1>
            <p className="lead">공공기관·지자체·교육기관의 교육 행사와 프로그램을 기획부터 참가자 관리, 현장 운영, 결과보고까지 한 번에 맡깁니다.</p>
            <div className="heroActions">
              <a className="button primary" href="#contact">운영 상담하기</a>
              <a className="button ghost" href="#service">서비스 보기</a>
            </div>
          </div>
          <aside className="heroCard" aria-label="운영 범위 요약">
            <strong>One Stop Operation</strong>
            <ul>
              <li>교육 프로그램 기획</li>
              <li>참가자 모집·출결 관리</li>
              <li>강사·공간·현장 스태프 운영</li>
              <li>만족도 조사·결과보고</li>
            </ul>
          </aside>
        </section>

        <section className="strip" aria-label="대상 기관">
          {targets.map(item => <span key={item}>{item}</span>)}
        </section>

        <section id="service" className="section">
          <div className="sectionHead">
            <p className="eyebrow">Service</p>
            <h2>행사 목적만 알려주시면 운영안부터 정리합니다</h2>
            <p>공공기관 담당자가 가장 신경 쓰는 일정, 참여자, 현장 변수, 보고 자료를 중심으로 설계합니다.</p>
          </div>
          <div className="grid cards">
            {services.map(([num, title, desc]) => (
              <article className="card" key={title}>
                <span>{num}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section split">
          <div>
            <p className="eyebrow">Area</p>
            <h2>부산·울산·경남 현장 운영에 맞춘 지역형 대행</h2>
            <p>지역 기관 행사에 필요한 현장 대응 속도와 실무 커뮤니케이션을 기준으로 움직입니다.</p>
          </div>
          <div className="chips">{regions.map(region => <span key={region}>{region}</span>)}</div>
        </section>

        <section id="process" className="section dark">
          <p className="eyebrow">Process</p>
          <h2>진행 절차</h2>
          <ol className="steps">
            <li><b>상담</b><span>목적·예산·일정 확인</span></li>
            <li><b>운영안</b><span>프로그램·인력·동선 설계</span></li>
            <li><b>실행</b><span>모집·안내·현장 운영</span></li>
            <li><b>보고</b><span>결과보고·정산 자료 정리</span></li>
          </ol>
        </section>

        <section id="faq" className="section">
          <div className="sectionHead">
            <p className="eyebrow">FAQ</p>
            <h2>자주 묻는 질문</h2>
          </div>
          <div className="faq">
            {faqs.map(([q, a]) => (
              <details key={q}>
                <summary>
                  {q}
                  <svg className="chevron" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>공공기관 교육 행사 운영 상담</h2>
            <p>교육 행사 및 프로그램 운영과 관련하여 궁금하신 점을 남겨주시면 신속하고 상세하게 답변해 드리겠습니다.</p>
          </div>
          <form className="form">
            <div className="formGroup">
              <label htmlFor="org">기관명</label>
              <input id="org" name="org" placeholder="예: 부산 ○○센터" />
            </div>
            <div className="formGroup">
              <label htmlFor="name">담당자</label>
              <input id="name" name="name" placeholder="성함" />
            </div>
            <div className="formGroup">
              <label htmlFor="phone">연락처</label>
              <input id="phone" name="phone" placeholder="010-0000-0000" />
            </div>
            <div className="formGroup">
              <label htmlFor="message">문의 내용</label>
              <textarea id="message" name="message" placeholder="행사 일정, 예상 인원, 필요한 운영 범위를 적어주세요." />
            </div>
            <button id="submit-btn" type="button">문의 내용 보내기</button>
          </form>
        </section>
      </main>
    );
  }
  ```

- [ ] **Step 2: Commit interactive and schema improvements**
  Run:
  ```bash
  git add app/page.tsx
  git commit -m "feat: implement mobile responsive toggle menu and enhance LocalBusiness schema"
  ```

---

### Task 3: CSS Stylesheet Refactoring (Glassmorphism & Transitions)

**Files:**
- Modify: `app/globals.css`

- [ ] **Step 1: Refactor globals.css styling**
  Rewrite `/Users/jo/projects/busan-ai-spark/app/globals.css` with the new design system, transitions, custom fonts, glassmorphism header, 4-2-1 responsive columns, and FAQ custom icons.
  ```css
  :root {
    --ink: #111928;
    --muted: #4b5563;
    --line: #e5e7eb;
    --bg: #f9fafb;
    --card: #ffffff;
    --blue: #1253d8;
    --blue2: #0b379b;
    --green: #0e9f6e;
    --radius: 20px;
    --font-heading: var(--font-outfit), sans-serif;
    --font-body: var(--font-inter), 'Pretendard', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    background: var(--bg);
    color: var(--ink);
    font-family: var(--font-body);
    word-break: keep-all;
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  /* Header & Navigation */
  .nav {
    position: sticky;
    top: 0;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 6vw;
    background: rgba(249, 250, 251, 0.8);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(229, 231, 235, 0.5);
    transition: all 0.3s ease;
  }

  .brand {
    font-family: var(--font-heading);
    font-weight: 800;
    font-size: 24px;
    letter-spacing: -0.04em;
    color: var(--blue);
  }

  .navLinks {
    display: flex;
    gap: 24px;
    align-items: center;
    color: var(--muted);
    font-size: 15px;
    font-weight: 500;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .navLinks a {
    transition: color 0.2s ease;
  }

  .navLinks a:hover {
    color: var(--blue);
  }

  .navCta {
    padding: 10px 20px;
    border-radius: 999px;
    background: var(--blue);
    color: #fff !important;
    font-weight: 600;
    box-shadow: 0 4px 14px rgba(18, 83, 216, 0.2);
    transition: all 0.2s ease !important;
  }

  .navCta:hover {
    background: var(--blue2);
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(18, 83, 216, 0.3);
  }

  /* Mobile Toggle */
  .menuToggle {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 24px;
    height: 18px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 110;
  }

  .menuToggle .bar {
    width: 100%;
    height: 2.5px;
    background-color: var(--ink);
    transition: all 0.3s ease;
  }

  /* Hero Section */
  .hero {
    min-height: 680px;
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 48px;
    align-items: center;
    padding: 100px 6vw;
    background: radial-gradient(circle at 10% 20%, rgba(216, 236, 255, 0.4) 0%, transparent 40%),
                linear-gradient(135deg, #ffffff 0%, #f0f6ff 60%, #f4fff8 100%);
  }

  .eyebrow {
    font-family: var(--font-heading);
    margin: 0 0 14px;
    color: var(--blue);
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  .hero h1 {
    font-family: var(--font-heading);
    max-width: 850px;
    margin: 0;
    font-size: clamp(38px, 6vw, 68px);
    line-height: 1.1;
    letter-spacing: -0.04em;
    font-weight: 800;
  }

  .lead {
    max-width: 720px;
    margin: 24px 0 0;
    color: var(--muted);
    font-size: clamp(17px, 1.8vw, 21px);
    line-height: 1.65;
  }

  .heroActions {
    display: flex;
    gap: 12px;
    margin-top: 36px;
    flex-wrap: wrap;
  }

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 52px;
    padding: 0 26px;
    border-radius: 999px;
    font-weight: 700;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
  }

  .primary {
    background: var(--blue);
    color: #fff;
    box-shadow: 0 10px 25px rgba(18, 83, 216, 0.2);
  }

  .primary:hover {
    background: var(--blue2);
    transform: translateY(-2px);
    box-shadow: 0 14px 30px rgba(18, 83, 216, 0.35);
  }

  .ghost {
    background: #fff;
    border: 1px solid var(--line);
    color: var(--ink);
  }

  .ghost:hover {
    background: var(--bg);
    transform: translateY(-2px);
    border-color: #d1d5db;
  }

  .heroCard {
    background: rgba(255, 255, 255, 0.85);
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: 28px;
    padding: 34px;
    box-shadow: 0 20px 50px rgba(18, 32, 51, 0.08);
    backdrop-filter: blur(10px);
  }

  .heroCard strong {
    font-family: var(--font-heading);
    font-size: 22px;
    letter-spacing: -0.02em;
    font-weight: 700;
  }

  .heroCard ul {
    margin: 22px 0 0;
    padding: 0;
    list-style: none;
  }

  .heroCard li {
    padding: 14px 0;
    border-top: 1px solid var(--line);
    color: var(--muted);
    font-size: 15px;
    display: flex;
    align-items: center;
  }

  .heroCard li:before {
    content: '✓';
    display: inline-grid;
    place-items: center;
    width: 22px;
    height: 22px;
    margin-right: 12px;
    border-radius: 50%;
    background: #def7ec;
    color: var(--green);
    font-weight: 900;
    font-size: 11px;
    flex-shrink: 0;
  }

  /* Strip section */
  .strip {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    justify-content: center;
    padding: 24px 6vw;
    background: #fff;
    border-block: 1px solid var(--line);
  }

  .strip span, .chips span {
    padding: 8px 16px;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: #fff;
    color: var(--muted);
    font-weight: 600;
    font-size: 14px;
    transition: all 0.2s ease;
  }

  .strip span:hover, .chips span:hover {
    border-color: var(--blue);
    color: var(--blue);
    background: #f0f6ff;
  }

  /* Core section styling */
  .section {
    padding: 96px 6vw;
  }

  .sectionHead {
    max-width: 780px;
    margin-bottom: 48px;
  }

  .section h2 {
    font-family: var(--font-heading);
    margin: 0;
    font-size: clamp(28px, 4vw, 44px);
    line-height: 1.2;
    letter-spacing: -0.04em;
    font-weight: 800;
  }

  .section p {
    color: var(--muted);
    font-size: 16px;
    line-height: 1.7;
    margin-top: 14px;
  }

  /* Grid Layouts */
  .grid {
    display: grid;
    gap: 24px;
  }

  .cards {
    grid-template-columns: repeat(4, 1fr);
  }

  .card {
    background: var(--card);
    border: 1px solid var(--line);
    border-radius: var(--radius);
    padding: 30px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.01);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .card:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(18, 32, 51, 0.08);
    border-color: rgba(18, 83, 216, 0.25);
  }

  .card span {
    font-family: var(--font-heading);
    color: var(--blue);
    font-weight: 800;
    font-size: 20px;
  }

  .card h3 {
    margin: 32px 0 12px;
    font-size: 20px;
    letter-spacing: -0.02em;
    font-weight: 700;
  }

  .card p {
    font-size: 14px;
    margin: 0;
    line-height: 1.6;
  }

  /* Split Layout */
  .split {
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    gap: 48px;
    align-items: center;
    background: #fff;
  }

  .chips {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  /* Dark theme section */
  .dark {
    background: #0f172a;
    color: #fff;
    border: none;
  }

  .dark .eyebrow {
    color: #60a5fa;
  }

  .dark h2 {
    color: #fff;
  }

  .steps {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding: 0;
    margin: 48px 0 0;
    list-style: none;
  }

  .steps li {
    padding: 28px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.03);
    transition: all 0.3s ease;
  }

  .steps li:hover {
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(255, 255, 255, 0.2);
  }

  .steps b {
    font-family: var(--font-heading);
    display: block;
    font-size: 22px;
    margin-bottom: 12px;
  }

  .steps span {
    color: #9ca3af;
    font-size: 14px;
    line-height: 1.5;
  }

  /* FAQ Accordions */
  .faq {
    display: grid;
    gap: 16px;
    max-width: 920px;
  }

  .faq details {
    background: #fff;
    border: 1px solid var(--line);
    border-radius: 16px;
    padding: 0;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .faq details[open] {
    border-color: rgba(18, 83, 216, 0.3);
    box-shadow: 0 10px 25px rgba(18, 32, 51, 0.04);
  }

  .faq summary {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    font-weight: 700;
    font-size: 17px;
    padding: 22px 24px;
    list-style: none;
    user-select: none;
  }

  .faq summary::-webkit-details-marker {
    display: none;
  }

  .faq summary .chevron {
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    color: var(--muted);
  }

  .faq details[open] summary .chevron {
    transform: rotate(180deg);
    color: var(--blue);
  }

  .faq details p {
    padding: 0 24px 22px;
    margin: 0;
    color: var(--muted);
    font-size: 15px;
    line-height: 1.65;
    border-top: 1px dashed var(--line);
    padding-top: 18px;
  }

  /* Contact Form */
  .contact {
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    gap: 48px;
    background: linear-gradient(135deg, #f0f7ff, #ffffff);
  }

  .form {
    display: grid;
    gap: 20px;
    background: #fff;
    border: 1px solid var(--line);
    border-radius: 24px;
    padding: 34px;
    box-shadow: 0 20px 40px rgba(18, 32, 51, 0.05);
  }

  .formGroup {
    display: grid;
    gap: 8px;
  }

  .formGroup label {
    font-weight: 700;
    font-size: 14px;
    color: var(--ink);
  }

  .form input, .form textarea {
    width: 100%;
    border: 1px solid var(--line);
    border-radius: 12px;
    padding: 14px 16px;
    font: inherit;
    color: var(--ink);
    background-color: #fff;
    transition: all 0.2s ease;
  }

  .form input:focus, .form textarea:focus {
    outline: none;
    border-color: var(--blue);
    box-shadow: 0 0 0 4px rgba(18, 83, 216, 0.12);
  }

  .form textarea {
    min-height: 120px;
    resize: vertical;
  }

  .form button {
    height: 52px;
    border: 0;
    border-radius: 999px;
    background: var(--blue);
    color: #fff;
    font: inherit;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 8px 20px rgba(18, 83, 216, 0.15);
    transition: all 0.2s ease;
  }

  .form button:hover {
    background: var(--blue2);
    transform: translateY(-1px);
    box-shadow: 0 12px 25px rgba(18, 83, 216, 0.25);
  }

  /* Responsive Breakpoints */
  @media(max-width: 1024px) {
    .cards {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .steps {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media(max-width: 900px) {
    .nav {
      position: sticky;
      top: 0;
      padding: 16px 5vw;
    }

    .menuToggle {
      display: flex;
    }

    /* Mobile menu overlay */
    .navLinks {
      position: fixed;
      top: 60px;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(249, 250, 251, 0.98);
      backdrop-filter: blur(16px);
      flex-direction: column;
      justify-content: center;
      gap: 32px;
      padding: 40px;
      opacity: 0;
      pointer-events: none;
      transform: translateY(-20px);
      border-top: 1px solid var(--line);
    }

    .navLinks.open {
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0);
    }

    .navLinks a {
      font-size: 20px;
      font-weight: 700;
    }

    .navCta {
      width: 100%;
      text-align: center;
      max-width: 320px;
    }

    /* Hamburger Animation */
    .menuToggle .bar.active:nth-child(1) {
      transform: translateY(7.5px) rotate(45deg);
    }
    
    .menuToggle .bar.active:nth-child(2) {
      opacity: 0;
    }
    
    .menuToggle .bar.active:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }

    .hero, .split, .contact {
      grid-template-columns: 1fr;
    }

    .hero {
      min-height: auto;
      padding: 64px 5vw 48px;
    }

    .heroText {
      order: 1;
    }

    .heroCard {
      order: 2;
    }

    .section {
      padding: 64px 5vw;
    }

    .hero h1 {
      font-size: 36px;
    }
  }

  @media(max-width: 560px) {
    .cards, .steps {
      grid-template-columns: 1fr;
    }
    
    .heroActions {
      display: grid;
      width: 100%;
    }
    
    .button {
      width: 100%;
    }
    
    .heroCard {
      padding: 24px;
    }
    
    .strip {
      justify-content: flex-start;
      gap: 8px;
    }

    .strip span {
      font-size: 13px;
      padding: 6px 12px;
    }
    
    .section h2 {
      font-size: 28px;
    }

    .form {
      padding: 24px;
    }
  }
  ```

- [ ] **Step 2: Commit stylesheet changes**
  Run:
  ```bash
  git add app/globals.css
  git commit -m "style: refactor stylesheet for typography, custom grids, and interactive states"
  ```

---

### Task 4: Verification & Build

- [ ] **Step 1: Verify the build**
  Run: `npm run build`
  Expected: Successful compilation, TypeScript verification, and static HTML export.

- [ ] **Step 2: Check locally**
  Navigate to `http://localhost:3000` to verify:
  - Font families are correctly rendered (Outfit / Inter).
  - The responsive header is functional: hamburger button opens slide menu.
  - Hovering over cards lifts them smoothly.
  - Clicking FAQ summaries smoothly rotates the chevrons.
