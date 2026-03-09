# Portfolio Website Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a stunning Astro + Tailwind portfolio site for Sena Flo, deployed to GitHub Pages.

**Architecture:** Multi-page Astro static site with shared layout components, View Transitions for smooth navigation, Tailwind CSS for styling, scroll-triggered animations. Pages: Home, About, Gallery (projects list), Project Detail (x3), Resume.

**Tech Stack:** Astro 5, Tailwind CSS 4, View Transitions API, GitHub Actions for deployment.

---

### Task 1: Scaffold Astro Project

**Files:**
- Create: `package.json`, `astro.config.mjs`, `tsconfig.json`, `tailwind.config.mjs`
- Create: `src/layouts/Layout.astro` (base HTML layout)
- Create: `src/pages/index.astro` (placeholder home)
- Create: `.gitignore`

**Step 1: Initialize Astro project with Tailwind**

```bash
npm create astro@latest . -- --template minimal --no-install --no-git
npx astro add tailwind -y
npm install
```

**Step 2: Configure for GitHub Pages**

Set `site` and `base` in `astro.config.mjs`.

**Step 3: Create base Layout component**

Shared HTML shell with nav, footer, View Transitions, Google Fonts (Inter + Playfair Display).

**Step 4: Verify dev server runs**

```bash
npm run dev
```

**Step 5: Commit**

```bash
git add -A && git commit -m "feat: scaffold Astro + Tailwind project"
```

---

### Task 2: Navigation & Footer Components

**Files:**
- Create: `src/components/Nav.astro`
- Create: `src/components/Footer.astro`
- Modify: `src/layouts/Layout.astro`

Sticky nav with "Sena Flo" logo left, page links right. Smooth transitions on hover. Footer with email and LinkedIn.

---

### Task 3: Home Page

**Files:**
- Modify: `src/pages/index.astro`
- Create: `src/components/ProjectCard.astro`

Hero section with FSAE car image, "A Short Overview of My Projects" overlay text. Portfolio intro section. 3-column project card grid linking to detail pages.

---

### Task 4: About Page

**Files:**
- Create: `src/pages/about.astro`

"Hey There" intro with bio text. "All About Me" photo mosaic grid (5 photos: guitar, city, fencing, nature, bio).

---

### Task 5: Project Detail Pages

**Files:**
- Create: `src/pages/projects/rear-wing.astro`
- Create: `src/pages/projects/steering.astro`
- Create: `src/pages/projects/sudoku.astro`
- Create: `src/components/ProjectLayout.astro`

Shared project layout: title, description, hero image, image gallery, prev/next navigation.

---

### Task 6: Resume Page

**Files:**
- Create: `src/pages/resume.astro`

Embedded PDF viewer + download button.

---

### Task 7: Images & Assets

**Files:**
- Move downloaded images from `docs/wix-images/` to `public/images/`
- Copy resume PDF to `public/`

---

### Task 8: Animations & Polish

Scroll-triggered fade-in animations. Hover effects on cards. View Transitions between pages. Final responsive testing.

---

### Task 9: GitHub Actions Deployment

**Files:**
- Create: `.github/workflows/deploy.yml`

Astro build + deploy to GitHub Pages via Actions.

---

### Task 10: Final QA

Screenshot all pages, verify responsive layout, check all links and images.
