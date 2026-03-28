# Portfolio — Nawawit Pilanthanayothin

A modern, responsive portfolio website built with **Next.js 16**, **React 19**, **Tailwind CSS 4**, and **shadcn/ui**. Showcasing 6+ years of experience as a Full-Stack Developer specializing in PHP, JavaScript/TypeScript ecosystems, building web applications for government agencies and enterprises.

---

## Features

- **Dark / Light / System theme** toggle with `next-themes`
- **Scroll-triggered animations** (fade-up, fade-down, slide, zoom) via Intersection Observer
- **Loading screen** with animated intro
- **Back-to-top** floating button
- **Responsive design** — mobile-first layout with Tailwind CSS
- **Devicon integration** for technology skill icons
- **SEO-ready metadata** via Next.js Metadata API
- **Custom typography** — Space Grotesk (sans), JetBrains Mono & Fira Code (mono)
- **SVG favicon** with auto-generated PNG icons

---

## Sections

| Section | Component | Description |
|---------|-----------|-------------|
| Hero | `Hero.tsx` | Name, title, avatar, location, social links |
| About | `AboutEducation.tsx` | Personal summary & background |
| Work Experience | `WorkExperience.tsx` | Professional timeline with tech stacks |
| Projects | `Projects.tsx` | 9 project cards with images & technologies |
| Skills | `Skills.tsx` | 17 technology icons (JS, TS, PHP, Go, Laravel, NestJS, Vue, Nuxt, React, Next, Express, MySQL, PostgreSQL, MongoDB, Redis, Docker, Kafka) |
| Education | `Education.tsx` | Degree, coursework, GPAX, thesis |
| Contact | `ContactSection.tsx` | Email, phone, location, social links |
| Footer | `Footer.tsx` | Site-wide footer |

Utility components: `Navbar`, `LoadingScreen`, `BackToTop`, `AnimateOnScroll`, `ThemeProvider`, `ThemeToggle`

---

## Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | [Next.js 16](https://nextjs.org/) (App Router, RSC) |
| UI Library | [React 19](https://react.dev/) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/) via `@tailwindcss/postcss` |
| Component Library | [shadcn/ui](https://ui.shadcn.com/) (base-nova style, Lucide icons) |
| Theming | [next-themes](https://github.com/pacocoursey/next-themes) |
| Animations | [tw-animate-css](https://www.npmjs.com/package/tw-animate-css) + custom CSS |
| Icons | [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/), [Devicon](https://devicon.dev/) |
| Language | TypeScript 5 (strict mode) |
| Linting | ESLint 9 with `eslint-config-next` (core-web-vitals + TypeScript) |

### shadcn/ui Components Used

`Avatar`, `Badge`, `Button`, `Card`, `Separator`

---

## Project Structure

```
src/
├── app/
│   ├── globals.css        # Tailwind imports, theme variables (oklch), dark mode
│   ├── icon.svg           # SVG favicon
│   ├── layout.tsx         # Root layout — fonts, metadata, ThemeProvider
│   └── page.tsx           # Home page — assembles all sections
├── components/
│   ├── ui/                # shadcn/ui primitives (avatar, badge, button, card, separator)
│   ├── Hero.tsx           # Hero section
│   ├── AboutEducation.tsx # About + personal info
│   ├── WorkExperience.tsx # Work experience timeline
│   ├── Projects.tsx       # Project showcase grid
│   ├── Skills.tsx         # Technology skills display
│   ├── Education.tsx      # Education details
│   ├── ContactSection.tsx # Contact info
│   ├── Footer.tsx         # Site footer
│   ├── Navbar.tsx         # Navigation bar
│   ├── LoadingScreen.tsx  # Animated loading overlay
│   ├── BackToTop.tsx      # Scroll-to-top button
│   ├── AnimateOnScroll.tsx # Intersection Observer animations
│   ├── ThemeProvider.tsx  # next-themes provider wrapper
│   └── ThemeToggle.tsx    # Light/Dark/System toggle
├── data/
│   └── profileData.ts     # All portfolio content (profile, education, skills, experience, projects)
└── lib/
    └── utils.ts            # cn() utility (clsx + tailwind-merge)

public/
├── images/                # Profile photo, university logo, CV PDF
├── project-images/        # Project screenshots & illustrations (PNG/SVG)
└── resume-file/           # Resume files
```

---

## Getting Started

### Prerequisites

- **Node.js** >= 18
- **npm**, **yarn**, or **pnpm**

### Installation

```bash
# Clone the repository
git clone https://github.com/MosNawawitP/my-portfolio.git
cd my-portfolio

# Install dependencies
npm install
```

### Development

```bash
npm run dev
# → Starts on http://localhost:3100
```

### Build & Production

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

---

## Theming

The site uses **oklch color space** for both light and dark themes, defined as CSS custom properties in `src/app/globals.css`. Theme switching is handled by `next-themes` with three modes: **Light**, **Dark**, and **System**.

### Fonts

| Role | Font | CSS Variable |
|------|------|-------------|
| Sans-serif (body) | Space Grotesk | `--font-space-grotesk` |
| Monospace (code) | JetBrains Mono | `--font-jetbrains-mono` |
| Monospace (alt) | Fira Code | `--font-fira-code` |

All fonts are loaded via `next/font/google` for optimal performance.

---

## Customization

All portfolio content is centralized in `src/data/profileData.ts`. Update these exports to customize:

- `profileData` — Name, title, description, avatar, contact links
- `personalInfo` — Email, phone, location, detailed bio
- `education` — Degree, university, GPAX, coursework, thesis
- `skills` — Technology names, Devicon classes, brand colors
- `workExperiences` — Job history with descriptions & tech stacks
- `projects` — Project cards with titles, descriptions, tech tags & images (SVG/PNG/JPG)

---

## License

This project is private and not licensed for redistribution.
