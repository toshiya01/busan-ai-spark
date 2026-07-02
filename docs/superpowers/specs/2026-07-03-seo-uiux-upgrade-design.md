# SEO & UI/UX Upgrade Design Spec

**Goal:** Upgrade the Starlab education event landing page with premium local SEO tags, modern glassmorphism UI/UX design, custom fonts, smooth micro-animations, and a fully accessible mobile navigation menu.

---

## 1. Local SEO & Metadata Upgrades (`app/layout.tsx`)
- **Favicons & Touch Icons:**
  - Add explicit icon metadata in Next.js metadata configurations (shortcut favicon, Apple touch icons).
- **Twitter Cards:**
  - Configure `twitter` card properties (`summary_large_image`, title, description, images).
- **Structured Data Enhancements (`app/page.tsx`):**
  - Add telephone and address coordinates to the `LocalBusiness` JSON-LD schema (using real or standard placeholders).

---

## 2. Typography & Fonts (`app/layout.tsx`, `app/globals.css`)
- **Web Fonts:**
  - Load Google Web Fonts via Next.js `next/font/google`:
    - **Outfit**: Headings and brand font.
    - **Inter**: Body text font.
- **Global Typography System:**
  - Update `body` styles to apply proper font family fallbacks (Outfit, Inter, Pretendard, System-UI).
  - Fine-tune tracking/kerning (`letter-spacing: -0.02em`) and leading/line-height (`line-height: 1.65`) for Korean text.

---

## 3. Glassmorphism & Micro-Animations (`app/globals.css`, `app/page.tsx`)
- **Header Navigation:**
  - Apply `backdrop-filter: blur(16px)` and translucent borders for modern glassmorphism.
- **Interactive Hover States:**
  - Service cards should rise slightly on hover (`transform: translateY(-6px)`) with a soft drop shadow (`box-shadow: 0 20px 40px rgba(0, 0, 0, 0.06)`).
  - Add smooth scaling transition to CTA buttons.
- **FAQ Accordion Enhancements:**
  - Remove default `summary` markers.
  - Insert custom SVG chevron icons on the right side of `summary` tags.
  - Rotate chevrons smoothly using CSS: `details[open] svg { transform: rotate(180deg); }`.

---

## 4. Mobile Responsive Navigation & Grid
- **Responsive Header (Slide-out Menu):**
  - Convert `app/page.tsx` into a client component (`'use client'`).
  - Implement a React state `const [menuOpen, setMenuOpen] = useState(false)` for toggling the mobile menu.
  - Show a hamburger icon on screen widths `<= 900px`. Clicking it opens a clean slide-down menu overlay.
- **Responsive Grids:**
  - Redefine card and step layouts to transition gracefully: `4 columns` -> `2 columns` (on tablets) -> `1 column` (on mobiles).
