# SEO & Geo-Targeting Optimization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Integrate Google/Naver verification keys, Geo-targeting tags, and robust LocalBusiness/Service JSON-LD structured data into the Next.js landing page without altering any design elements.

**Architecture:** Use Next.js built-in `Metadata` API in `layout.tsx` for head tag optimizations. Update JSON-LD structure in `page.tsx` for local search richness. Validate through a dedicated custom node verification script (`scripts/verify-seo.mjs`) and the Next.js static build compile loop.

**Tech Stack:** Next.js (App Router), React, TypeScript

---

### Task 1: Setup Local SEO Verification Script

**Files:**
- Create: `scripts/verify-seo.mjs`

- [ ] **Step 1: Write the verification script**
  Create `scripts/verify-seo.mjs` with checks for Google/Naver verification keys, geographic coordinates, and structured business data details.
  ```javascript
  import fs from 'fs';

  console.log('Starting SEO & Geo configuration validation...');

  // 1. Verify app/layout.tsx changes
  const layoutContent = fs.readFileSync('app/layout.tsx', 'utf8');
  if (!layoutContent.includes('google-site-verification=k8moRGKM1lKVSAjLxECcDYjVaFK_TKEMV2HfLe9iNyk')) {
    throw new Error('Google site verification missing or incorrect in app/layout.tsx!');
  }
  if (!layoutContent.includes('8d134f95402574e76b77d4038f041c7cbbf0d756')) {
    throw new Error('Naver site verification missing or incorrect in app/layout.tsx!');
  }
  if (!layoutContent.includes('KR-26') || !layoutContent.includes('Busan') || !layoutContent.includes('35.1561;129.0594')) {
    throw new Error('Geographic metadata in app/layout.tsx missing or incorrect!');
  }

  // 2. Verify app/page.tsx changes
  const pageContent = fs.readFileSync('app/page.tsx', 'utf8');
  if (!pageContent.includes('0507-1301-9327')) {
    throw new Error('Telephone number 0507-1301-9327 missing or incorrect in app/page.tsx!');
  }
  if (!pageContent.includes('서전로 3') || !pageContent.includes('부산진구') || !pageContent.includes('47293')) {
    throw new Error('Address details (서전로 3, 부산진구, 47293) missing or incorrect in app/page.tsx!');
  }
  if (!pageContent.includes('GeoCoordinates') || !pageContent.includes('35.1561') || !pageContent.includes('129.0594')) {
    throw new Error('JSON-LD geo coordinates missing or incorrect in app/page.tsx!');
  }

  console.log('✅ All SEO & Geo configurations verified successfully!');
  ```

- [ ] **Step 2: Run the script to verify it fails**
  Run: `node scripts/verify-seo.mjs`
  Expected Output: FAIL with `Error: Google site verification missing or incorrect in app/layout.tsx!`

- [ ] **Step 3: Commit the verification script**
  ```bash
  git add scripts/verify-seo.mjs
  git commit -m "test: add custom seo/geo metadata verification script"
  ```

---

### Task 2: Modify `app/layout.tsx` for Meta Tags & Verification

**Files:**
- Modify: `app/layout.tsx:17-53`

- [ ] **Step 1: Apply Google/Naver verification & Geo-targeting tags**
  Update the metadata object inside `app/layout.tsx`. Keep the styling, font configurations, and component logic exactly unchanged.
  
  ```typescript
  // Target file: app/layout.tsx
  // Target lines to replace: lines 17 to 52
  const siteUrl = 'https://ai.starlab.co.kr';

  export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: '부산 울산 경남 교육 행사 프로그램 운영 관리 대행｜스타랩',
    description: '공공기관·지자체·교육기관 대상 교육 행사, 프로그램 기획, 참가자 모집 관리, 현장 운영, 결과보고까지 부산 울산 경남에서 대행합니다.',
    keywords: ['부산 교육 행사 대행', '울산 프로그램 운영 대행', '경남 공공기관 행사 운영', '교육 프로그램 운영 관리 대행', '공공기관 행사 대행'],
    alternates: { canonical: '/' },
    verification: {
      google: 'k8moRGKM1lKVSAjLxECcDYjVaFK_TKEMV2HfLe9iNyk',
      other: {
        'naver-site-verification': '8d134f95402574e76b77d4038f041c7cbbf0d756',
      },
    },
    other: {
      'geo.region': 'KR-26',
      'geo.placename': 'Busan',
      'geo.position': '35.1561;129.0594',
      'ICBM': '35.1561, 129.0594',
    },
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
  ```

- [ ] **Step 2: Run verification script to check progress**
  Run: `node scripts/verify-seo.mjs`
  Expected Output: FAIL with `Error: Telephone number 0507-1301-9327 missing or incorrect in app/page.tsx!` (since layout changes are now complete, layout validation passes).

- [ ] **Step 3: Commit layout changes**
  ```bash
  git add app/layout.tsx
  git commit -m "feat: add google/naver verification and geo metadata tags"
  ```

---

### Task 3: Modify `app/page.tsx` for JSON-LD & Semantic Address

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Enhance Structured JSON-LD Data**
  Update the `jsonLd` object inside `app/page.tsx` with detailed coordinates, address components, telephone, price range, opening hours, and AdministrativeArea mappings for target regions.
  
  ```typescript
  // Target lines around 22-50:
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        name: '스타랩',
        description: '공공기관 교육 행사 프로그램 운영 관리 대행',
        url: 'https://ai.starlab.co.kr',
        telephone: '0507-1301-9327',
        image: ['https://ai.starlab.co.kr/og-image.jpg'],
        logo: 'https://ai.starlab.co.kr/og-image.jpg',
        priceRange: '₩₩',
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday'
          ],
          opens: '09:00',
          closes: '18:00'
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: '서전로 3',
          addressLocality: '부산진구',
          addressRegion: '부산광역시',
          postalCode: '47293',
          addressCountry: 'KR'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 35.1561,
          longitude: 129.0594
        },
        areaServed: [
          { '@type': 'AdministrativeArea', 'name': '부산광역시' },
          { '@type': 'AdministrativeArea', 'name': '울산광역시' },
          { '@type': 'AdministrativeArea', 'name': '경상남도' }
        ]
      },
      {
        '@type': 'Service',
        name: '부산 울산 경남 교육 행사 프로그램 운영 관리 대행',
        provider: { '@type': 'LocalBusiness', name: '스타랩' },
        areaServed: [
          { '@type': 'AdministrativeArea', 'name': '부산광역시' },
          { '@type': 'AdministrativeArea', 'name': '울산광역시' },
          { '@type': 'AdministrativeArea', 'name': '경상남도' }
        ],
        serviceType: '공공기관 행사 운영 대행'
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } }))
      }
    ]
  };
  ```

- [ ] **Step 2: Add semantic `<address>` element to page content**
  Add a semantic `<address>` block at the bottom of the contact form/section. Keep the design unchanged by styling the container text size and placement cleanly (using inline styles to match the existing text size and spacing so it integrates organically next to the existing elements, without changing the layout).
  
  ```typescript
  // Replace around lines 249-252:
            <p className="formHint">받는 사람: {inquiryEmail}</p>
            <address style={{ display: 'block', fontStyle: 'normal', fontSize: '0.85rem', color: '#888', marginTop: '1rem', lineHeight: '1.6' }}>
              <div><strong>스타랩 (StarLab)</strong></div>
              <div>주소: 부산광역시 부산진구 서전로 3 (우편번호 47293)</div>
              <div>문의: 0507-1301-9327 | 이메일: {inquiryEmail}</div>
            </address>
            <button id="submit-btn" type="submit">문의 내용 보내기</button>
  ```

- [ ] **Step 3: Run verification script to check compatibility**
  Run: `node scripts/verify-seo.mjs`
  Expected Output: `✅ All SEO & Geo configurations verified successfully!`

- [ ] **Step 4: Run Next.js static build to verify typescript compilation**
  Run: `npm run build`
  Expected Output: Successful production build without compilation errors.

- [ ] **Step 5: Commit changes**
  ```bash
  git add app/page.tsx
  git commit -m "feat: enhance JSON-LD schemas and add semantic address block"
  ```
