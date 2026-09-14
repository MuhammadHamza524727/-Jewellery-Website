# Project Constitution — Premium Artificial Jewellery Website

## Goal
Build a premium, cinematic artificial jewellery shop frontend using **Next.js App Router + JavaScript + Tailwind CSS**.

Frontend only. No backend, database, authentication, payments or APIs.

## Design
Create a luxury/editorial experience, not a generic e-commerce template.

Style:
- Dark black/charcoal backgrounds
- Subtle champagne/gold accents
- Elegant typography
- Large premium imagery
- Generous whitespace
- Cinematic scroll storytelling
- Minimal, polished UI
- Fully responsive

Core story:

**CRAFT → CARE → POLISH → STYLE → TRUST → SHOP**

## Available Videos
Use these local 8-second videos:

`/public/videos/crafting.mp4`
`/public/videos/wearing.mp4`
`/public/videos/artisan.mp4`
`/public/videos/polishing.mp4`

Placement:
1. Hero → crafting
2. Craft section → crafting
3. Artisan/story → artisan
4. Polishing/quality → polishing
5. Wearing/style → wearing
6. Collection → product images

Do not autoplay multiple videos unnecessarily.

## Homepage
Build these sections:

1. Transparent/sticky Navbar
2. Full-screen cinematic Hero
3. Editorial introduction
4. Crafting story
5. Artisan story
6. Polishing + quality
7. Wearing/style
8. Jewellery collection
9. Brand values
10. Customer trust
11. Testimonials
12. Final CTA
13. Footer

Hero copy:

**Elegance, Crafted For You.**

Supporting text:
`Discover refined artificial jewellery designed to make every moment feel extraordinary.`

CTA:
`Explore Collection`

## Collection
Create 8 realistic demo products using local images.

Categories:
Necklaces, Earrings, Bracelets, Rings, Sets.

Product cards must have:
- image
- name
- category
- price
- wishlist
- view/add button
- subtle hover animation

Keep product data separate and easy to replace later.

## Animation
Use **Framer Motion** for normal animations.

Use GSAP/ScrollTrigger only if genuinely needed.

Use:
- fade/reveal
- subtle scale
- sticky storytelling
- gentle parallax
- video reveal
- navbar transition

Never hijack or make normal scrolling uncomfortable.

Respect `prefers-reduced-motion`.

## Architecture
Use reusable components, for example:

`Navbar`
`Hero`
`VideoSection`
`CraftStory`
`ArtisanSection`
`PolishingSection`
`WearingSection`
`Collection`
`ProductCard`
`TrustSection`
`Testimonials`
`FinalCTA`
`Footer`

Use Server Components by default and `"use client"` only when required.

## Performance
- Local video assets
- Poster images
- `muted`
- `autoPlay`
- `loop`
- `playsInline`
- lazy loading where appropriate
- optimized images
- avoid unnecessary dependencies

## Mobile
Support 360px+ screens.

Simplify complex desktop animations on mobile while preserving the cinematic feel.

## Rules
- JavaScript, NOT TypeScript
- No unnecessary packages
- No backend
- No fake APIs
- No lorem ipsum
- No fake certifications/claims
- No external random image URLs
- Do not put the entire website in one component
- Do not redesign into a generic template
- Keep jewellery as the visual focus

## Quality Gate
Before finishing:
- check all routes/components
- check video/image paths
- check console errors
- check mobile layout
- check horizontal overflow
- check navigation
- check animations
- check performance

The final result must feel like:

**A luxury jewellery campaign that happens to be an e-commerce website.**