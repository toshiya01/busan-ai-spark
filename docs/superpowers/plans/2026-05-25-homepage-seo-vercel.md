# Homepage SEO & Vercel Deployment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade the Busan AI Spark one-page homepage for credible local SEO, stronger conversion copy, and Vercel-ready deployment.

**Architecture:** Keep the existing Vite + React + Tailwind single-page structure. Improve static SEO in `index.html`/`public` so crawlers and social previews do not depend on client rendering, then improve visible content sections in React components.

**Tech Stack:** Vite, React 18, TypeScript, Tailwind CSS, shadcn/ui, Vercel static deployment.

---

## Current findings

- `index.html` points canonical/OG/Twitter/schema URLs to Lovable instead of the deploy domain.
- `public/sitemap.xml` still uses `https://www.yourdomain.com/` and `robots.txt` has no sitemap line.
- Existing GitHub workflow references `/starlab.ai.kr/`, so use `https://starlab.ai.kr` as the working canonical domain until the user supplies a different owned domain.
- Homepage copy is generic and includes unverifiable metrics (`1,000+`, `95%`, `50+`) plus placeholder/fake contact details.
- CTA URL in the current working tree is `https://naver.com`; the previous committed version used a Walla survey URL. Use the Walla survey as the consultation conversion target because it is closer to an actual lead form.
- Baseline `npm run lint` fails in pre-existing shadcn/ui files and `tailwind.config.ts`; fix the small TypeScript lint errors so deployment checks can pass.

## File structure

- Modify `index.html`: Korean title/description, canonical, OG/Twitter image, robots meta, EducationalOrganization/Course/FAQ schema.
- Modify `public/robots.txt`: simple allow-all policy plus sitemap URL.
- Modify `public/sitemap.xml`: canonical homepage URL and current lastmod.
- Create `public/og-image.jpg`: stable social preview asset copied from the existing hero background.
- Create `vercel.json`: Vite output, SPA fallback rewrites, security/cache headers.
- Modify `src/components/Hero.tsx`: conversion-focused H1/subcopy and CTA behavior.
- Modify `src/components/About.tsx`: credible audience/outcome cards instead of unverifiable stats.
- Modify `src/components/Programs.tsx`: sharpen program names/descriptions/topics for Busan AI/ChatGPT searches.
- Modify `src/components/Features.tsx`: upgrade differentiators to practical training outcomes.
- Modify `src/components/Contact.tsx`: remove fake phone/address/email, route consultation CTA to the Walla form.
- Modify `src/components/Footer.tsx`: align brand, program list, domain/contact wording, year.
- Create `src/components/Faq.tsx`: add FAQ content for local SEO and buyer objections.
- Modify `src/pages/Index.tsx`: include FAQ before Contact.
- Modify `src/components/ui/command.tsx`, `src/components/ui/textarea.tsx`, `tailwind.config.ts`: fix lint errors only.
- Modify `README.md`: add Vercel deployment/domain checklist.

## Tasks

### Task 1: Technical SEO and Vercel config

- [x] Update `index.html` with `https://starlab.ai.kr/` canonical, Open Graph/Twitter image `/og-image.jpg`, Korean title/description, and structured data.
- [x] Update `public/robots.txt` to include `Sitemap: https://starlab.ai.kr/sitemap.xml`.
- [x] Update `public/sitemap.xml` lastmod to `2026-05-25` and canonical URL.
- [x] Create `public/og-image.jpg` from `src/assets/hero-bg.jpg`.
- [x] Add `vercel.json` with `buildCommand: npm run build`, `outputDirectory: dist`, SPA fallback rewrite, security headers, and asset caching.

### Task 2: Homepage content upgrade

- [x] Revise `Hero.tsx` headline/subcopy/CTA for “부산·울산·경남 ChatGPT·생성형 AI 실무 교육”.
- [x] Revise `About.tsx` to show audience-focused outcomes instead of unverified performance metrics.
- [x] Revise `Programs.tsx` course names/descriptions/topics for ChatGPT automation, data analysis, AI content, and business/enterprise adoption.
- [x] Revise `Features.tsx` differentiators around immediate workflows, small-group coaching, custom curriculum, and follow-up resources.
- [x] Revise `Contact.tsx`/`Footer.tsx` to avoid fake address/phone/email and use the Walla consultation link.
- [x] Add `Faq.tsx` and include it in `Index.tsx`.

### Task 3: Verification and deploy

- [x] Fix existing lint errors without broad refactors.
- [x] Run `npm run lint`.
- [x] Run `npm run build`.
- [x] Inspect built `dist/index.html`, `dist/robots.txt`, `dist/sitemap.xml` for expected SEO URLs/content.
- [x] Run `vercel deploy . -y` for Vercel deployment.
- [x] Vercel credentials were available; production deployment completed and custom domains were added. DNS still requires registrar update to `76.76.21.21`.
