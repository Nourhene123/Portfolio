# Portfolio

A modern, responsive portfolio website built with **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Features stunning animations, 3D interactive elements, and accessibility support.

## Overview

This portfolio showcases professional work, skills, and experience with:

- **Smooth animations** powered by Framer Motion
- **3D interactive cards** with tilt effects
- **Particle backgrounds** with deterministic rendering
- **Reduced motion support** for accessibility
- **Lazy loading** for optimal performance
- **Custom reusable hooks** for clean, maintainable code

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** React Icons + Lucide React
- **Analytics:** Vercel Analytics & Speed Insights

## Project Structure

```
src/
├── components/
│   ├── about/            # About section with 3D image tilt
│   ├── contact/          # Contact form and social links
│   ├── education/        # Education and certifications
│   ├── experience/       # Work experience timeline
│   ├── home/             # Hero section with typing animation
│   ├── projects/         # Project showcase with 3D cards
│   ├── skills/           # Skills display with filtering
│   ├── VolunteerExperience/  # Volunteering experience
│   └── shared/           # Shared components (ParticleBackground)
├── hooks/                # Custom React hooks
│   ├── use3DTilt.ts      # 3D tilt effect hook
│   ├── useCounter.ts     # Animated counter hook
│   ├── useParticles.ts   # Particle generation hook
│   ├── useReducedMotion.ts   # Accessibility hook
│   └── useTyping.ts      # Typing animation hook
├── data/                 # Separated data files
│   ├── projects.data.ts  # Project data and types
│   └── skills.data.ts    # Skills and categories data
├── tools/                # Utility components
│   ├── buttons/
│   ├── ScrollToTopButton.tsx
│   └── Skeleton.tsx
└── assets/               # Images, PDFs, and static files
```

## Features

### Performance Optimizations

- **Deterministic animations** - No `Math.random()` in render for consistent SSR
- **Lazy loading** - Components loaded via `React.lazy()` and `Suspense`
- **Custom hooks** - Reusable logic extracted from components
- **Memoization** - Strategic use of `useMemo` and `memo`

### Accessibility

- **Reduced motion** - Respects `prefers-reduced-motion` preference
- **Keyboard navigation** - Full keyboard support for interactive elements
- **Semantic HTML** - Proper heading hierarchy and landmarks

### Animations

- **3D Tilt cards** - Mouse-tracking parallax effects
- **Typing animation** - Typewriter effect for hero text
- **Particle backgrounds** - Floating decorative elements
- **Scroll-triggered reveals** - Content fades in as you scroll
- **Hover interactions** - Smooth micro-interactions throughout

## Custom Hooks

| Hook | Purpose |
|------|---------|
| `use3DTilt` | Adds 3D tilt effect to elements based on mouse position |
| `useCounter` | Animated number counting with intersection observer |
| `useParticles` | Generates deterministic particle configurations |
| `useTyping` | Creates typewriter text animation |
| `useReducedMotion` | Detects user's motion preference for accessibility |

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Nourhene123/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The dev server will start at `http://localhost:5173`

### Build

```bash
npm run build
```

Output will be in the `dist/` directory.

### Lint

```bash
npm run lint
```

## Data Structure

Project and skills data are separated into dedicated files for easy maintenance:

- `@/data/projects.data.ts` - Project entries with categories, technologies, and metadata
- `@/data/skills.data.ts` - Skills organized by category with icons and proficiency levels

## Deployment

This portfolio is optimized for deployment on **Vercel** with built-in analytics:

```bash
npm run build
vercel --prod
```

## License

MIT License - feel free to use this as a template for your own portfolio.

## Credits

- Design & Development: [Nourhene Ferchichi](https://github.com/Nourhene123)
- Icons: [React Icons](https://react-icons.github.io/react-icons/)
- Animations: [Framer Motion](https://www.framer.com/motion/)
