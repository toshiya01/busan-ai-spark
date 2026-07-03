# Update Google Verification Key Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update the Google site verification key in both `app/layout.tsx` and the verification script `scripts/verify-seo.mjs` to `xP2fftReHXCcI_l8uptXIg6a27MBJCPvvvgZ8-eVqJU`.

**Architecture:** Modify properties in code directly, test using `verify-seo.mjs` and build verification.

**Tech Stack:** Next.js, TypeScript

---

### Task 1: Update Google Site Verification Key

**Files:**
- Modify: `app/layout.tsx`
- Modify: `scripts/verify-seo.mjs`

- [ ] **Step 1: Update scripts/verify-seo.mjs**
  Update the expected Google verification code to `xP2fftReHXCcI_l8uptXIg6a27MBJCPvvvgZ8-eVqJU`.
  
- [ ] **Step 2: Run verification script to check it fails**
  Run: `node scripts/verify-seo.mjs`
  Expected Output: FAIL with `Error: Google site verification missing or incorrect in app/layout.tsx!` (since layout.tsx is not yet updated).

- [ ] **Step 3: Update app/layout.tsx**
  Change the google verification value inside `metadata.verification` to `xP2fftReHXCcI_l8uptXIg6a27MBJCPvvvgZ8-eVqJU`.

- [ ] **Step 4: Run verification script to verify it passes**
  Run: `node scripts/verify-seo.mjs`
  Expected Output: `✅ All SEO & Geo configurations verified successfully!`

- [ ] **Step 5: Run production build**
  Run: `npm run build`
  Expected Output: Successful build.

- [ ] **Step 6: Commit changes**
  ```bash
  git add app/layout.tsx scripts/verify-seo.mjs
  git commit -m "feat: update Google site verification key"
  ```
