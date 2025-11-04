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
