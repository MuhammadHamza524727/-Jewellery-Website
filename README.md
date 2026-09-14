# AURELLE — Premium Artificial Jewellery Website

A cinematic, editorial-style storefront for artificial jewellery, built with **Next.js (App Router) + JavaScript + Tailwind CSS + Framer Motion**.

> Elegance, Crafted For You.

## Highlights

- **Scroll-scrubbed cinematic hero** — the crafting video advances frame-by-frame as you scroll (fully preloaded in memory for zero-stall seeking)
- **Story-driven sections** — Craft → Atelier → Polish & Quality → Style, using full-bleed background videos that play only in view and pause off-screen
- **Clean ivory Collection & Testimonials** — editorial contrast bands inside the dark-gold identity
- **Filterable collection** — 8 demo products across Necklaces, Earrings, Bracelets, Rings & Sets, with wishlist and add-to-bag micro-interactions
- **Accessible & respectful motion** — `prefers-reduced-motion` falls back to stills, lazy-loading for below-fold media, fully responsive from 360px+

## Tech Stack

| Layer      | Choice                                    |
| ---------- | ----------------------------------------- |
| Framework  | Next.js 15 (App Router, static prerender) |
| Language   | JavaScript (no TypeScript)                |
| Styling    | Tailwind CSS 3                            |
| Animation  | Framer Motion                             |
| Media      | Local MP4 videos + images (no external URLs) |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production:

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/              # Layout, page, global styles
├── components/       # Navbar, Hero, story sections, Collection, Footer…
│   └── ui/           # Reveal, LazyVideo, ScrollVideo, Icons…
└── lib/
    └── products.js   # Demo catalogue (swap with real data anytime)
public/
├── videos/           # crafting / artisan / polishing / wearing
└── images/           # product photography
```

## 📺 Watch the Build

**This project was built step-by-step on the Hamza Builds YouTube channel — if it helped you, don't forget to LIKE 👍 and SUBSCRIBE 🔔 for more builds like this!**

## Customizing

- **Products:** edit `src/lib/products.js` — data is deliberately kept separate for easy replacement.
- **Theme colors:** see `tailwind.config.js` (ink, gold, ivory/paper palette).
- **Copy:** all section text lives inline in its component under `src/components/`.
