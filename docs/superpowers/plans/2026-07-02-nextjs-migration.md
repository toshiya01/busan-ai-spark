# Next.js Migration and Starlab Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate the `busan-ai-spark` project from Vite + React to Next.js, apply the new Starlab education event landing page design, completely remove the old FYNSEC cybersecurity landing page, and ensure smooth deployment to FastComet via GitHub Actions (FTP).

**Architecture:** Replace the Vite setup with a Next.js directory structure under `app/`. Configure Next.js for static HTML export to generate build outputs in `./out/`. Adjust the GitHub Action FTP deployment config to target the `./out/` directory.

**Tech Stack:** Next.js, React 18, TypeScript, FTP Deploy Action.

---

### Task 1: Environment & Dependency Setup

**Files:**
- Modify: `package.json`
- Modify: `tsconfig.json`
- Create: `next.config.mjs`

- [ ] **Step 1: Update package.json**
  Replace the contents of `package.json` with the Next.js dependencies, scripts, and overrides.
  ```json
  {
    "name": "busan-ai-spark",
    "version": "0.0.0",
    "private": true,
    "scripts": {
      "dev": "next dev",
      "build": "next build",
      "start": "next start"
    },
    "dependencies": {
      "next": "latest",
      "react": "^18.3.1",
      "react-dom": "^18.3.1"
    },
    "devDependencies": {
      "typescript": "^5.8.3",
      "@types/node": "^22.16.5",
      "@types/react": "^18.3.23",
      "@types/react-dom": "^18.3.7"
    },
    "overrides": {
      "postcss": "^8.5.10"
    }
  }
  ```

- [ ] **Step 2: Update tsconfig.json**
  Replace the contents of `tsconfig.json` with the Next.js-compatible TypeScript configurations:
  ```json
  {
    "compilerOptions": {
      "target": "ES2017",
      "lib": [
        "dom",
        "dom.iterable",
        "esnext"
      ],
      "allowJs": true,
      "skipLibCheck": true,
      "strict": true,
      "noEmit": true,
      "esModuleInterop": true,
      "module": "esnext",
      "moduleResolution": "bundler",
      "resolveJsonModule": true,
      "isolatedModules": true,
      "jsx": "react-jsx",
      "incremental": true,
      "plugins": [
        {
          "name": "next"
        }
      ]
    },
    "include": [
      "next-env.d.ts",
      "**/*.ts",
      "**/*.tsx",
      ".next/types/**/*.ts",
      ".next/dev/types/**/*.ts"
    ],
    "exclude": [
      "node_modules"
    ]
  }
  ```

- [ ] **Step 3: Create next.config.mjs**
  Create `next.config.mjs` at the root, configuring `output: 'export'` for static HTML output.
  ```javascript
  import {dirname} from 'node:path';
  import {fileURLToPath} from 'node:url';

  const root = dirname(fileURLToPath(import.meta.url));
  const nextConfig = {
    output: 'export',
    turbopack: {root}
  };

  export default nextConfig;
  ```

- [ ] **Step 4: Install updated dependencies**
  Run: `npm install`
  Expected: Clean install completion without peer dependency errors.

- [ ] **Step 5: Commit dependency setup**
  Run:
  ```bash
  git add package.json tsconfig.json next.config.mjs package-lock.json
  git commit -m "chore: setup Next.js dependencies and config files"
  ```

---

### Task 2: Copy next-env.d.ts and SEO config files

**Files:**
- Create: `next-env.d.ts`
- Create: `app/robots.ts`
- Create: `app/sitemap.ts`

- [ ] **Step 1: Create next-env.d.ts**
  Copy the contents of `next-env.d.ts` from `tmp_zip_contents/starlab-public-event-landing/next-env.d.ts`.
  ```typescript
  /// <reference types="next" />
  /// <reference types="next/image-types/global" />

  // NOTE: This file should not be edited
  // see https://nextjs.org/docs/basic-features/typescript for more information.
  ```

- [ ] **Step 2: Create app/robots.ts with ai.starlab.co.kr**
  Create `app/robots.ts` with the new domain:
  ```typescript
  import type {MetadataRoute} from 'next';

  export default function robots(): MetadataRoute.Robots {
    return {
      rules: [{userAgent: '*', allow: '/'}],
      sitemap: 'https://ai.starlab.co.kr/sitemap.xml'
    };
  }
  ```

- [ ] **Step 3: Create app/sitemap.ts with ai.starlab.co.kr**
  Create `app/sitemap.ts` with the new domain:
  ```typescript
  import type {MetadataRoute} from 'next';

  export default function sitemap(): MetadataRoute.Sitemap {
    return [{url: 'https://ai.starlab.co.kr/', lastModified: new Date(), changeFrequency: 'weekly', priority: 1}];
  }
  ```

- [ ] **Step 4: Commit environment and SEO files**
  Run:
  ```bash
  git add next-env.d.ts app/robots.ts app/sitemap.ts
  git commit -m "feat: add next-env and SEO files (robots/sitemap)"
  ```

---

### Task 3: Setup globals.css, layout.tsx, and page.tsx with Domain Updates

**Files:**
- Create: `app/globals.css`
- Create: `app/layout.tsx`
- Create: `app/page.tsx`

- [ ] **Step 1: Copy app/globals.css**
  Copy the CSS code from `tmp_zip_contents/starlab-public-event-landing/app/globals.css` into `app/globals.css`.

- [ ] **Step 2: Create app/layout.tsx with ai.starlab.co.kr**
  Create `app/layout.tsx` with the new domain:
  ```typescript
  import type {Metadata} from 'next';
  import './globals.css';

  const siteUrl = 'https://ai.starlab.co.kr';

  export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: '부산 울산 경남 교육 행사 프로그램 운영 관리 대행｜스타랩',
    description: '공공기관·지자체·교육기관 대상 교육 행사, 프로그램 기획, 참가자 모집 관리, 현장 운영, 결과보고까지 부산 울산 경남에서 대행합니다.',
    keywords: ['부산 교육 행사 대행', '울산 프로그램 운영 대행', '경남 공공기관 행사 운영', '교육 프로그램 운영 관리 대행', '공공기관 행사 대행'],
    alternates: {canonical: '/'},
    openGraph: {
      title: '부산 울산 경남 교육 행사 프로그램 운영 관리 대행｜스타랩',
      description: '기획부터 참가자 관리, 현장 운영, 결과보고까지 공공기관 교육 행사 운영을 한 번에 맡깁니다.',
      url: siteUrl,
      siteName: '스타랩',
      locale: 'ko_KR',
      type: 'website'
    }
  };

  export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
      <html lang="ko">
        <body>{children}</body>
      </html>
    );
  }
  ```

- [ ] **Step 3: Create app/page.tsx with ai.starlab.co.kr**
  Create `app/page.tsx` using the code from the zip file, but update the JSON-LD URL to `https://ai.starlab.co.kr`:
  ```typescript
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
        url: 'https://ai.starlab.co.kr'
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
    return (
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}} />
        <header className="nav">
          <a className="brand" href="#top" aria-label="스타랩 홈">StarLab</a>
          <nav aria-label="주요 메뉴">
            <a href="#service">서비스</a>
            <a href="#process">프로세스</a>
            <a href="#faq">FAQ</a>
            <a className="navCta" href="#contact">상담 문의</a>
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
            {faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
          </div>
        </section>

        <section id="contact" className="section contact">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>공공기관 교육 행사 운영 상담</h2>
            <p>백엔드 연결 전까지는 정적 폼입니다. Antigravity에서 API만 연결하면 됩니다.</p>
          </div>
          <form className="form">
            <label>기관명<input name="org" placeholder="예: 부산 ○○센터" /></label>
            <label>담당자<input name="name" placeholder="성함" /></label>
            <label>연락처<input name="phone" placeholder="010-0000-0000" /></label>
            <label>문의 내용<textarea name="message" placeholder="행사 일정, 예상 인원, 필요한 운영 범위를 적어주세요." /></label>
            <button type="button">문의 내용 보내기</button>
          </form>
        </section>
      </main>
    );
  }
  ```

- [ ] **Step 4: Commit app styles and components**
  Run:
  ```bash
  git add app/globals.css app/layout.tsx app/page.tsx
  git commit -m "feat: add app components and global styles with domain updates"
  ```

---

### Task 4: Clean up unused Vite configuration and source files

**Files:**
- Delete: `src/`
- Delete: `index.html`
- Delete: `vite.config.ts`
- Delete: `vitest.config.ts`
- Delete: `tsconfig.app.json`
- Delete: `tsconfig.node.json`
- Delete: `postcss.config.js`
- Delete: `tailwind.config.ts`
- Delete: `components.json`
- Delete: `vercel.json`

- [ ] **Step 1: Delete old files and directories**
  Run:
  ```bash
  rm -rf src/ index.html vite.config.ts vitest.config.ts tsconfig.app.json tsconfig.node.json postcss.config.js tailwind.config.ts components.json vercel.json
  ```

- [ ] **Step 2: Commit cleanup**
  Run:
  ```bash
  git rm -r --cached src/ || true
  git add -A
  git commit -m "chore: clean up unused Vite and tailwind configurations"
  ```

---

### Task 5: Update Deployment Configurations

**Files:**
- Modify: `.github/workflows/deploy.yml`

- [ ] **Step 1: Update deploy.yml local-dir target**
  Modify `.github/workflows/deploy.yml` to target the Next.js static output directory `./out/`.
  ```yaml
  34:           local-dir: ./out/
  ```

- [ ] **Step 2: Commit deployment changes**
  Run:
  ```bash
  git add .github/workflows/deploy.yml
  git commit -m "chore: update deployment workflow for Next.js out directory"
  ```

---

### Task 3: Verification & Build

- [ ] **Step 1: Build the Next.js site**
  Run: `npm run build`
  Expected: Successful static export build with static pages in the `./out/` directory.

- [ ] **Step 2: Verify sitemap and robots static files exist**
  Run: `ls -la out/sitemap.xml out/robots.txt`
  Expected: Both files exist in the `out/` directory and contain correct metadata URLs pointing to `ai.starlab.co.kr`.
