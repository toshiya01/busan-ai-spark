# Next.js Migration and Starlab Landing Page Design Spec

**Goal:** Migrate the `busan-ai-spark` project from Vite + React to Next.js, apply the new Starlab education event landing page design, completely remove the old FYNSEC cybersecurity landing page, and ensure smooth deployment to FastComet via GitHub Actions (FTP).

---

## 1. Project Directory Structure Changes

We will clean up the existing Vite configuration and components, and copy the Next.js project structure from `/Users/jo/projects/busan-ai-spark/tmp_zip_contents/starlab-public-event-landing`.

### Files to Add/Update (from zip):
- `app/page.tsx`: The main landing page code.
- `app/globals.css`: Pure CSS styles.
- `app/layout.tsx`: Root layout with SEO metadata.
- `app/robots.ts`: SEO Robots configuration.
- `app/sitemap.ts`: SEO Sitemap configuration.
- `next-env.d.ts`: Next.js TypeScript environment declarations.
- `next.config.mjs`: Next.js config (with `output: 'export'`).
- `package.json`: Updated dependencies and build scripts.
- `tsconfig.json`: Next.js TypeScript configuration.

### Files to Delete:
- `src/` (including all subdirectories like `src/components`, `src/pages`, `src/test`, etc.)
- `index.html`
- `vite.config.ts`
- `vitest.config.ts`
- `tsconfig.app.json`
- `tsconfig.node.json`
- `postcss.config.js`
- `tailwind.config.ts`
- `components.json`
- `vercel.json`

---

## 2. Domain & SEO Updates
We will update all domain references in the landing page to `ai.starlab.co.kr`:
- **`app/robots.ts`**: Update sitemap URL to `https://ai.starlab.co.kr/sitemap.xml`.
- **`app/sitemap.ts`**: Update canonical URL to `https://ai.starlab.co.kr/`.
- **`app/page.tsx`**: Update Schema.org URL to `https://ai.starlab.co.kr`.

---

## 3. Build & Deployment (FTP to FastComet)
- **`next.config.mjs`**: Set `output: 'export'` to generate a static HTML/CSS export inside the `./out/` directory on build.
- **`.github/workflows/deploy.yml`**:
  - Update `local-dir` to `./out/` (instead of `./dist/`).
  - Update `server-dir` to `/ai.starlab.co.kr/` (already updated in previous step).

---

## 4. Testing
- The pre-existing unit tests under `src/test` are highly specific to the old FYNSEC component implementation. Since the old components are completely deleted, these tests will be removed.
- A basic health check test or smoke test can be configured if needed later, but the primary validation is successful `npm run build` and checking the static output.
