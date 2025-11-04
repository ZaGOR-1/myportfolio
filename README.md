# Denys Zagorovskyi — Portfolio

A modern, data-driven portfolio for a third-year Computer Science student at Lviv Polytechnic National University. Built with React, Vite, TailwindCSS, Framer Motion, and react-i18next to deliver a trilingual (UA/EN/PL) experience with smooth animations and a persistent light/dark theme.

## ✨ Key Features

- **Three languages** (English, Polish, Ukrainian) powered by `react-i18next`
- **Light/Dark theme** toggle persisted in `localStorage`
- **Framer Motion** transitions between pages and interactive hover states
- **React Router** navigation across Home, Projects, About, and Contact views
- **Responsive design** with TailwindCSS, glassmorphism accents, and refined typography
- **Accessible contact form** with Netlify Forms support and social shortcuts
- **SEO-ready** metadata plus Open Graph preview

## 🛠️ Tech Stack

- React 18 (functional components & hooks)
- Vite 5
- TailwindCSS 3
- Framer Motion 10
- react-router-dom 6
- react-i18next & i18next

## 🚀 Getting Started

```bash
# install dependencies
npm install

# start development server
npm run dev

# build for production
npm run build

# preview production build
npm run preview
```

> **Netlify Forms**: The contact form ships with Netlify form attributes (`data-netlify="true"`). When deploying to Netlify, no additional configuration is needed for submissions to work.

## 🌐 Deploying to GitHub Pages

### Automatic Deployment (Recommended)

This project includes a GitHub Actions workflow that automatically builds and deploys to GitHub Pages on every push to the `main` branch.

**Setup Steps:**
1. Go to your repository settings on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Build and deployment**, set:
   - **Source**: GitHub Actions
4. Push your changes to the `main` branch
5. The workflow will automatically build and deploy your site

### Manual Deployment

Alternatively, you can deploy manually using:

```bash
npm run deploy
```

This command builds the project and publishes the `dist` directory to the `gh-pages` branch via the `gh-pages` CLI. 

**Note:** Client-side routing uses a hash-based router so deep links continue to work once the site is hosted on GitHub Pages.

## 🧱 Project Structure

```
└── src
    ├── assets/             # Optimised SVG illustrations
    ├── components/         # Layout, Header, Footer, UI building blocks
    ├── context/            # Theme provider with localStorage persistence
    ├── data/               # Project metadata shared across locales
    ├── hooks/              # Custom document title + SEO helper
    ├── i18n/               # Language resources (en, pl, uk)
    ├── pages/              # Route-level views (Home, Projects, About, Contact)
    └── App.jsx             # Router + framer-motion transitions
```

## ♿ Accessibility

- Keyboard-friendly navigation and focus outlines
- Descriptive `aria-label`s, semantic landmarks, and `prefers-reduced-motion` support
- High contrast palettes in both light and dark themes

## 📄 License

This project is provided as part of a coursework portfolio and is free to adapt for educational use.
