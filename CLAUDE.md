# Project: EATHERLAND INC. Prototypes (Nuxt 3)

## Project Context
Developing 3 web design variations for a music publishing company.

## Tech Stack
- Framework: Nuxt 3 (SSR/Static)
- Styling: Tailwind CSS (@nuxtjs/tailwindcss)

## Routing Structure
Organized by design variation folders in `pages/`:
- `/1`: Minimalist Cinematic
- `/2`: Bold Studio
- `/3`: Experimental Artistic

Each folder MUST contain: `index.vue`, `roster.vue`, and `blog.vue`.

## Development Rules
- Use Nuxt's **Auto-imports**; do not manually import ref, computed, etc.
- **Tailwind**: Maintain consistency via `tailwind.config.ts`.
- **Assets**: Place high-res music/images in `public/assets/`.
- **Quality Control**: Ensure every page has basic Meta Tags for SEO (use `useSeoMeta`).    