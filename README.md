# Revio — Spot. Share. Compete.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=nextdotjs)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=111)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-Waitlist-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)

**Revio Website** is the pre-launch landing page for **Revio**, an upcoming social car spotting platform for automotive enthusiasts. The product concept is simple: spot rare cars, share sightings, climb leaderboards, and join an early-access community built around real car culture.

This repository focuses on the marketing experience: a premium, animated, mobile-first landing page with a Supabase-backed waitlist flow for collecting early access signups.

## Product Concept

Revio is designed for car enthusiasts who love finding something special in the wild. The platform will let users:

- Spot and share rare car sightings.
- Build a profile around their automotive taste and discoveries.
- Compete on global leaderboards through uploads and community activity.
- Reserve early access before launch.
- Unlock founder-style rewards such as username reservation, founder badges, and early spotter numbers.

This site does not present Revio as a launched product. It is an MVP landing page for validating interest and collecting early access signups.

## Landing Page Highlights

- **Hero section** with the “Spot. Share. Compete.” message, animated gradient atmosphere, and waitlist CTA.
- **Animated phone mockup** showing an in-app feed preview with a custom mobile navigation preview.
- **Car culture feature grid** covering spotting, rankings, garage identity, and enthusiast connection.
- **Leaderboard preview** with podium-style top rankings and animated list rows.
- **Brand statement section** to give the page a more memorable product voice.
- **Early access rewards** including username reservation, founder badge, profile frame, and head-start bonus.
- **Waitlist form** with email, username, platform, and country fields.
- **Legal pages** for privacy, terms, and cookies with matching dark visual styling.
- **Responsive footer** with product links, legal links, and social icons.

## Tech Stack

| Area | Technology |
| --- | --- |
| Framework | Next.js 16 App Router |
| UI | React 19, TypeScript |
| Styling | Tailwind CSS 4, custom CSS variables, glassmorphism utilities |
| Animation | Framer Motion |
| Backend flow | Next.js API Route |
| Database | Supabase Postgres |
| Analytics | Vercel Analytics, Vercel Speed Insights |
| Deployment target | Vercel |

## Project Structure

```txt
.
├── app/
│   ├── api/waitlist/route.ts      # Server-side waitlist API route
│   ├── cookies/page.tsx           # Cookie policy page
│   ├── privacy/page.tsx           # Privacy policy page
│   ├── terms/page.tsx             # Terms page
│   ├── globals.css                # Global theme, gradients, glass utilities
│   ├── layout.tsx                 # Root layout, metadata, analytics
│   └── page.tsx                   # Landing page composition
├── components/
│   ├── navbar.tsx                 # Fixed responsive navigation
│   ├── hero.tsx                   # Main hero and CTA section
│   ├── phone-mockup.tsx           # Animated app preview device
│   ├── social-interactions.tsx    # Product feature cards
│   ├── leaderboard.tsx            # Leaderboard preview
│   ├── brand-statement.tsx        # Product voice section
│   ├── early-access.tsx           # Founder rewards section
│   ├── waitlist.tsx               # Early access signup form
│   ├── footer.tsx                 # Footer navigation and social links
│   └── ui/                        # Reusable UI primitives
├── lib/
│   ├── supabaseAdmin.ts           # Server-only Supabase admin client
│   └── utils.ts                   # Shared utility helpers
├── public/                        # App preview images, icons, and brand assets
└── supabase/
    └── waitlist_signups.sql       # Waitlist table and indexes
```

## Design Details

The visual system is built around a dark automotive-tech aesthetic: black and deep navy surfaces, blue/purple/red gradient accents, glass panels, soft glow effects, and cinematic section transitions.

Notable UI details:

- Mobile-first layout with responsive typography and spacing.
- Smooth Framer Motion entrance animations and hover states.
- Animated ambient background elements in the hero and feature sections.
- Custom phone frame with a moving feed preview.
- Reusable `.glass`, `.gradient-text`, `.gradient-border`, and `.glow` utilities.
- Scroll-friendly one-page structure with anchored navigation.
- Form states for loading, success, disabled, and server errors.

## Supabase Waitlist Flow

The waitlist form does not write directly to Supabase from the browser. Instead, it posts to a secure server-side API route:

```txt
POST /api/waitlist
```

The route validates and normalizes:

- `email`
- `username`
- `platform` (`ios` or `android`)
- `country`

The Supabase table is defined in [`supabase/waitlist_signups.sql`](supabase/waitlist_signups.sql) and stores:

- `id`
- `email`
- `username`
- `platform`
- `country`
- `created_at`

The database includes case-insensitive unique indexes for email and username. Duplicate submissions return user-friendly API errors, while the Supabase service role key stays server-side only.

## Environment Variables

Create a local `.env.local` file based on this example:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_ROLE_KEY=your_server_only_service_role_key
```

Important: `SUPABASE_SERVICE_ROLE_KEY` must never be exposed to the browser. It is only used by the server-side Supabase admin client in `lib/supabaseAdmin.ts`.

## Local Development

This project includes both `package-lock.json` and `pnpm-lock.yaml`. The commands below use npm because the current dependency installation was updated through npm.

```bash
npm install
npm run dev
```

Open the local development server:

```txt
http://localhost:3000
```

Build for production:

```bash
npm run build
```

Start the production build:

```bash
npm run start
```

## Deployment

The project is ready for a Vercel-style deployment:

1. Add the required Supabase environment variables in the deployment dashboard.
2. Run the SQL in `supabase/waitlist_signups.sql` inside Supabase.
3. Deploy the Next.js app.

Vercel Analytics and Speed Insights are already wired in `app/layout.tsx` and load only in production.

## Screenshots

Add screenshots after deployment or local capture:

```md
![Hero section](public/screenshots/hero.png)
![Mobile layout](public/screenshots/mobile.png)
![Waitlist form](public/screenshots/waitlist.png)
```

Suggested captures:

- `public/screenshots/hero.png`
- `public/screenshots/mobile.png`
- `public/screenshots/waitlist.png`
- `public/screenshots/leaderboard.png`

## What This Project Demonstrates

This project is built to show more than a static landing page. It demonstrates:

- Production-style landing page execution with a strong visual direction.
- Modern React and Next.js App Router component architecture.
- Responsive frontend development across desktop and mobile layouts.
- Product-minded UI copy, flow, and section sequencing.
- Animation and interaction design using Framer Motion.
- A polished dark UI system with gradients, glassmorphism, and custom utilities.
- Secure backend integration through a server-side API route.
- Supabase Postgres usage for real waitlist persistence.
- Careful handling of form validation, loading states, success states, and duplicate errors.
- A recruiter-friendly balance of frontend craft, backend wiring, and product thinking.

## Status

Revio Website is an active pre-launch landing page project for an unreleased MVP app. The current implementation focuses on presentation, early access collection, and brand validation before a full product launch.
