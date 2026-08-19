# kartikxisk.me

Personal site for Kartik Kumar — frontend engineer, Delhi.

## Design

Blueprint / technical-drawing direction: ink-slate paper with a drafting grid,
a single drafting-amber accent, mono metadata labels, numbered sheets and
dimension-line stats. No gradients, no glowing cards, no centered pill badges.

Motion is scroll-driven — wipe reveals, a drawn revision scale, horizontal
tickers tied to vertical scroll, and project sheets that pin and stack. Every
motion primitive checks `prefers-reduced-motion` and falls back to a static
render.

## Stack

- Next.js 16 (App Router) · React 19 · TypeScript
- Tailwind CSS v4 with CSS custom-property tokens in `app/globals.css`
- Motion (`motion/react`) for scroll animation
- Archivo (display) + IBM Plex Mono (data/labels) via `next/font`

## Layout

```
app/                 routes, metadata, OG image, robots, sitemap, 404
components/ui/       blueprint.tsx (surfaces), reveal.tsx (scroll motion)
components/sections/ one file per sheet: hero, about, skills, experience,
                     projects, education, contact
lib/data/            all copy and content — edit here, not in components
```

Content lives entirely in `lib/data/`. `site.ts` holds identity, availability
and title-block metadata; `work.ts` holds the systems shipped at work;
`projects.ts` holds client and personal builds.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

## Notes

- Set `siteConfig.resumeUrl` (e.g. `/resume.pdf`) to switch the résumé CTA on;
  it stays hidden while empty so there is no dead link.
- Toggle `siteConfig.availability.open` to remove every "open to work" stamp.
- Project screenshots live in `public/images/project/`, captured at 1600px wide.
