# Fractionex — Cloned Website

**Status:** Live deployment-ready  
**Deployed:** GitHub → https://github.com/edwardjanes/fractionex  
**Cloned from:** Fractionex original website  
**Date cloned:** 2026-07-13

## Project Overview

This is a modern Next.js rebuild of the Fractionex website using the AI website cloner template. The original design and content have been reverse-engineered into a clean, production-ready Next.js codebase.

## Tech Stack

- **Framework:** Next.js 16 (App Router, React 19, TypeScript strict)
- **UI:** shadcn/ui + Tailwind CSS v4
- **Styling:** Tailwind CSS v4 with oklch design tokens
- **Icons:** Lucide React + extracted SVGs
- **Deployment:** Ready for Vercel, Netlify, or any Node host

## Key Files

- `src/app/page.tsx` — Home page
- `src/components/` — React components (Navbar, HeroSection, FeaturesCarousel, etc.)
- `src/app/globals.css` — Global styles
- `public/images/` — Downloaded assets from original site
- `assets/images/` — **PRESERVED:** Original assets (do not overwrite)
- `docs/research/` — Clone documentation (design tokens, component specs)

## Important: Preserved Assets

The `assets/images/` directory contains images from the original Fractionex repo. **Do not delete or overwrite.**

If you update `public/images/`, keep `assets/` intact.

## Commands

- `npm run dev` — Start dev server (localhost:3000)
- `npm run build` — Production build
- `npm run lint` — ESLint check
- `npm run typecheck` — TypeScript check
- `npm run check` — All checks + build

## Code Style

- TypeScript strict mode (no `any`)
- Named exports, PascalCase components
- Tailwind utility classes only (no inline styles)
- Mobile-first responsive design
- 2-space indentation

## Making Changes

1. Edit files in `src/`
2. Run `npm run dev` to preview
3. Commit: `git add . && git commit -m "message"`
4. Push: `git push origin main`
5. Deploy automatically (if configured with Vercel/Netlify)

## Deployment

Push to `main` branch → Deploy to your hosting provider.

@AGENTS.md
