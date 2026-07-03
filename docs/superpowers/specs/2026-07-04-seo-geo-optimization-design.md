# Google & Naver SEO and Geo-Targeting Optimization Design Spec

## 1. Context & Objectives
- **Target Site**: [https://ai.starlab.co.kr](https://ai.starlab.co.kr)
- **Goal**: Optimize search engine indexing and rankings for Google and Naver, focusing on local business visibility in the Busan, Ulsan, and Gyeongsangnam-do (PK) regions.
- **Constraint**: **Do not change the visual design or CSS styling.** Only modify underlying metadata, HTML structures, and JSON-LD schema configurations.

---

## 2. Layout Metadata Upgrades (`app/layout.tsx`)
We will configure the `Metadata` object in `app/layout.tsx` using Next.js core API features:

### A. Verification Tags
- **Google Search Console**: `google-site-verification=xP2fftReHXCcI_l8uptXIg6a27MBJCPvvvgZ8-eVqJU`
- **Naver Search Advisor**: `naver-site-verification=8d134f95402574e76b77d4038f041c7cbbf0d756`

### B. Geo-Targeting Metadata
- `geo.region`: `KR-26` (Busan, South Korea)
- `geo.placename`: `Busan`
- `geo.position`: `35.1561;129.0594`
- `ICBM`: `35.1561, 129.0594`

### C. Standard SEO Settings
- `robots`: `{ index: true, follow: true }`
- `alternates.canonical`: `https://ai.starlab.co.kr`

---

## 3. Schema.org JSON-LD Upgrades (`app/page.tsx`)
Enhance the current `@graph` object in the JSON-LD script for rich results optimization.

### A. `LocalBusiness` Schema
- **Name**: `스타랩`
- **Telephone**: `0507-1301-9327` (Naver Smart Call compatibility)
- **URL**: `https://ai.starlab.co.kr`
- **Address (`PostalAddress`)**:
  - `streetAddress`: `서전로 3`
  - `addressLocality`: `부산진구`
  - `addressRegion`: `부산광역시`
  - `postalCode`: `47293`
  - `addressCountry`: `KR`
- **Coordinates (`GeoCoordinates`)**:
  - `latitude`: `35.1561`
  - `longitude`: `129.0594`
- **Rich Snippet Attributes**:
  - `image`: `["https://ai.starlab.co.kr/og-image.jpg"]`
  - `logo`: `https://ai.starlab.co.kr/og-image.jpg`
  - `priceRange`: `₩₩`
  - `openingHoursSpecification`: `Mo-Fr 09:00-18:00`

### B. `Service` Schema
- **Provider**: `LocalBusiness` (스타랩)
- **Service Type**: `공공기관 행사 운영 대행`
- **Area Served (`AdministrativeArea`)**:
  - 부산광역시 (Busan)
  - 울산광역시 (Ulsan)
  - 경상남도 (Gyeongnam)

---

## 4. Semantic HTML Adjustments (`app/page.tsx`)
- Add a hidden or subtly styled `<address>` tag near the contact form to declare the business address and telephone number in plain text for crawler accessibility, matching the metadata exactly.
- Verify that standard semantic tags are preserved (e.g. `main`, `header`, `section`, `h1`, `h2`, `h3`).

---

## 5. Verification Plan
1. **Next.js Static Build**: Run `npm run build` to confirm the modifications do not raise TypeScript compiler errors or static rendering failures.
2. **Metadata Checks**: Inspect generated source code locally to confirm meta tags and structured JSON-LD are injected correctly.
