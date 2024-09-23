# NSS RBU Website

<p align="center">

  ![Astro](https://img.shields.io/badge/Astro-BC52EE?logo=astro&logoColor=fff&style=for-the-badge)
  ![React](https://shields.io/badge/react-black?logo=react&style=for-the-badge)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-grey?style=for-the-badge&logo=tailwind-css&logoColor=38B2AC)
  ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

</p>

> 🧑‍🚀  Not me, but you!

## 🚀 Project Structure

```text
/
├── .astro/
│   ├── settings.json
│   └── types.d.ts
├── .gitignore
├── .vscode/
│   ├── extensions.json
│   └── launch.json
├── astro.config.mjs
├── components.json
├── package.json
├── public/
│   └── fonts/
│       ├── calsans-semibold.woff2
│       └── inter.woff2
├── README.md
├── src/
│   ├── components/
│   │   ├── Card.astro
│   │   ├── confetti.tsx
│   │   ├── layout/
│   │   │   ├── footer.astro
│   │   │   ├── header.astro
│   │   │   ├── sheet-mobile-nav.tsx
│   │   │   └── main-nav.astro
│   │   ├── main-navigation-menu.tsx
│   │   ├── tailwind-indicator.astro
│   │   └── theme-toggle.tsx
│   ├── config/
│   │   ├── nav-menu.ts
│   │   └── site.ts
│   ├── env.d.ts
│   ├── hooks/
│   │   └── use-mounted.ts
│   ├── icons/
│   │   └── index.tsx
│   ├── layouts/
│   │   ├── base-layout.astro
│   │   └── main-layout.astro
│   ├── lib/
│   ├── pages/
│   │   └── index.astro
│   ├── styles/
│   │   └── globals.css
│   └── types/
├── tailwind.config.js
└── tsconfig.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
