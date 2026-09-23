# Nourhene Ferchichi — Software & AI Engineer

Personal portfolio and engineering showcase.

**Live:** [portfolio-nourheneferchichi.vercel.app](https://portfolio-nourheneferchichi.vercel.app/)

![CI](https://github.com/Nourhene123/Portfolio/actions/workflows/ci.yml/badge.svg)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)

---

## About

This is the site I use to present my work, experience and projects. I treat it as a
production codebase: it has strict typing, CI on every push, a clear split between content and
presentation, and accessibility and performance as requirements rather than extras.

## Tech Stack

| Layer          | Choice                                          |
| -------------- | ----------------------------------------------- |
| UI             | React 19, TypeScript (strict)                   |
| Build          | Vite 7                                          |
| Styling        | Tailwind CSS 4                                  |
| Motion         | Framer Motion                                   |
| Contact        | EmailJS (serverless form delivery)              |
| Hosting & RUM  | Vercel, Vercel Analytics, Speed Insights        |
| Quality        | ESLint, `tsc -b` type-check, GitHub Actions CI  |

## Engineering Decisions

**Content separated from UI.** Projects and skills are typed data modules
(`src/data/*.data.ts`). Adding a project is a data change, not a component change.

**Behaviour extracted into hooks.** Interaction logic lives in small, single-purpose hooks
instead of inside components, so views stay declarative and the logic can be reused:

| Hook               | Responsibility                                                   |
| ------------------ | ---------------------------------------------------------------- |
| `use3DTilt`        | Pointer-driven 3D tilt transform                                 |
| `useCounter`       | Animated counters, triggered by `IntersectionObserver`           |
| `useParticles`     | Deterministic particle layout (stable across re-renders)         |
| `useTyping`        | Typewriter effect for the hero section                           |
| `useReducedMotion` | Reads `prefers-reduced-motion` and gates every animation         |

**Performance budget.** Sections below the fold are code-split with `React.lazy` + `Suspense`,
wrapped in an error boundary so one failing section can't take down the page. Expensive values are memoized, and particle positions are computed
deterministically instead of with `Math.random()` at render time, which avoids layout jitter
on re-render. Real-user metrics are tracked with Vercel Speed Insights.

**Accessibility.** The site uses semantic landmarks and heading hierarchy, full keyboard
navigation, and respects the OS-level reduced-motion setting.

**Continuous integration.** Every push and pull request runs lint, type-check and a production
build ([`ci.yml`](.github/workflows/ci.yml)), so `main` is always deployable.

## Architecture

```
src/
├── components/      # One folder per page section (home, about, experience, projects, …)
│   └── shared/      # Cross-section UI (e.g. ParticleBackground)
├── hooks/           # Reusable interaction and animation logic
├── data/            # Typed content: projects, skills
├── tools/           # Generic UI utilities (buttons, skeletons, scroll-to-top)
└── assets/          # Images and documents
```

## Running Locally

Requires Node.js 18+.

```bash
npm install
npm run dev        # http://localhost:5173
```

The contact form needs EmailJS credentials in a local `.env` file (it is not committed):

```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

| Script            | Purpose                           |
| ----------------- | --------------------------------- |
| `npm run build`   | Type-check and production build   |
| `npm run preview` | Serve the production build        |
| `npm run lint`    | Run ESLint                        |

## Contact

- Website: [portfolio-nourheneferchichi.vercel.app](https://portfolio-nourheneferchichi.vercel.app/)
- GitHub: [@Nourhene123](https://github.com/Nourhene123)

## License

© 2026 Nourhene Ferchichi. All rights reserved.
The source is public for review only. See [LICENSE](LICENSE).
