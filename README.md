# Portfolio — S. Mohammed Aakif

Personal portfolio website built with **Next.js 15**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

## Tech Stack

<p align="left">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=threedotjs&logoColor=white" alt="Three.js" />
  <img src="https://img.shields.io/badge/R3F-000000?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Three Fiber" />
  <img src="https://img.shields.io/badge/React_Icons-E91E63?style=for-the-badge&logo=react&logoColor=white" alt="React Icons" />
  <img src="https://img.shields.io/badge/next--themes-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="next-themes" />
</p>

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── app/          # App router pages and layout
├── components/   # React components
│   ├── sections/ # Page sections (Hero, About, Projects, etc.)
│   ├── ui/       # Reusable UI components
│   └── three/    # Three.js 3D components
├── hooks/        # Custom React hooks
└── lib/          # Data, utilities, shared config
```

## Customization

Edit `src/lib/data.ts` to update:

- Personal info, resume link, social links
- Projects, skills, education, experience
- Navigation links and stats

Replace assets in `public/`:

- `profile.jpg` — Profile photo
- `projects/*` — Project screenshots
- `resume.pdf` — Resume download

## License

MIT
