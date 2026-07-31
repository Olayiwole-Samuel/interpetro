# Interpetro Energy Resources Limited — Corporate Website

A production-grade marketing site built with Next.js 14 (App Router), TypeScript, Tailwind CSS,
shadcn/ui, and GSAP — built to the visual and structural spec provided.

## Tech stack

- **Next.js 14** (App Router, server components by default)
- **TypeScript**
- **Tailwind CSS** with a custom brand token system (see `tailwind.config.ts`)
- **shadcn/ui**-style primitives (Button, Card, Dialog, Accordion, Tabs, Form, Sheet, Dropdown
  Menu, Navigation Menu, etc.) in `src/components/ui`
- **GSAP** + `@gsap/react` for fade-ups, letter-stagger headlines, animated counters, and a
  scroll-drawn "signature wave" motif, with full `prefers-reduced-motion` support
- **Lucide React** icons
- **react-hook-form + zod** for the contact form
- **@fontsource/inter** for a fully self-hosted, offline-buildable Inter font (see note below)

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

To build for production:

```bash
npm run build
npm run start
```

This project has already been verified to build cleanly with `npm run build`.

## Deploying to Vercel

Push this to a Git repository and import it in Vercel — no special configuration is needed.
Before going live, update `siteConfig.url` in `src/lib/site-data.ts` to your real production
domain (it feeds the sitemap, robots.txt, and Open Graph metadata).

## What to replace before launch

This is a complete, working codebase, but a few things are intentionally placeholders since no
brand assets, photography, or copy were supplied:

1. **Photography.** The hero, about, and service visuals are bespoke SVG illustrations (an
   abstract refinery/pipeline motif in your brand colors) rather than stock photos — this avoids
   shipping placeholder imagery with licensing issues. Swap them for real aerial/site photography
   via `next/image` wherever you see an inline `<svg>` illustration
   (`src/components/home/hero-illustration.tsx`, `about-preview.tsx`, `app/about/page.tsx`).
2. **Logo.** `src/components/layout/logo.tsx` is a wordmark built from the brief's description
   (a blue mark with a green wave). Replace it with your real logo file (ideally an SVG) once
   you have one.
3. **Leadership bios.** `src/lib/leadership-data.ts` contains clearly-labeled placeholder names
   and titles so the Leadership section on the About page has real layout to review. Replace with
   your actual leadership team and headshots.
4. **Contact form backend.** `src/components/contact/contact-form.tsx` validates and "submits"
   the form (with a simulated delay) but isn't wired to a real email/CRM endpoint yet. Point
   `onSubmit` at your API route, Resend/SendGrid, or form service of choice.
5. **Map & address.** The Contact page embeds a Google Maps iframe driven by
   `siteConfig.address` in `src/lib/site-data.ts` — update that address to your real office.
6. **Company stats, timeline, values, service copy.** All editable in
   `src/lib/site-data.ts` — one file drives Home, About, Services, and Sustainability content.

## Why @fontsource/inter instead of next/font/google

`next/font/google` downloads Inter from Google Fonts *at build time* and self-hosts the result —
functionally the same outcome, but it requires network access to `fonts.googleapis.com` during
every build. `@fontsource/inter` ships the actual static font files inside the npm package, so
the build is fully offline and deterministic. Functionally, both approaches are "self-hosted";
this one just doesn't depend on live network access to Google at build time. If you'd prefer
`next/font/google`, it's a drop-in swap in `globals.css`/`layout.tsx`.

## Project structure

```
src/
  app/
    layout.tsx            Root layout, metadata, JSON-LD schema
    page.tsx               Home
    about/page.tsx
    services/page.tsx
    sustainability/page.tsx
    contact/page.tsx
    sitemap.ts / robots.ts  Dynamic SEO routes
    icon.tsx / opengraph-image.tsx   Generated favicon + OG image
  components/
    ui/                    shadcn/ui-style primitives
    layout/                Navbar, Footer, Logo, PageHero
    home/                  Home page sections
    motion/                GSAP wrapper components (FadeUp, StaggerHeadline, Counter, etc.)
    services/, contact/    Page-specific interactive components
  lib/
    site-data.ts            Central content: nav, services, stats, values, timeline
    leadership-data.ts       Placeholder leadership bios
    utils.ts                 cn() class-merging helper
    gsap.ts                  GSAP + ScrollTrigger registration
```

## Accessibility & performance notes

- All animations respect `prefers-reduced-motion`.
- Focus states are visible throughout (see `:focus-visible` in `globals.css`).
- Images should be added via `next/image` (already configured for `images.unsplash.com` as a
  remote pattern in `next.config.js` if you choose to use Unsplash sourced photography — add your
  own CDN/domain there for other providers).
- Run Lighthouse locally (`npm run build && npm run start`, then audit) once real photography is
  in place — bespoke SVG illustrations currently used are extremely lightweight.
