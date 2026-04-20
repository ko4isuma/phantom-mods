# Phantom Mods 👻

Premium Minecraft mods and scripts for Hypixel — a fully-featured static landing page built with HTML5, CSS3, and Vanilla JavaScript.

## 🌐 Live Demo

Deploy to **GitHub Pages**: go to _Settings → Pages → Source: main branch / root_ and the site will be live at `https://<username>.github.io/Phantom-Mods/`.

## 📁 Project Structure

```
/
├── index.html       – Home page with hero, features, and previews
├── games.html       – Games/mods library with filtering
├── reviews.html     – Player reviews with rating breakdown
├── guide.html       – Installation guide, compatibility, FAQ
├── support.html     – Support ticket form (live, saves to localStorage)
├── admin.html       – Admin panel (login: admin / phantom2024)
├── css/
│   ├── style.css        – Main styles, design system, components
│   ├── admin.css        – Admin panel styles
│   └── animations.css   – Scroll animations, transitions
└── js/
    ├── main.js          – Navigation, scroll animations, particles
    ├── games.js         – Mod listing and filtering logic
    ├── support.js       – Ticket form and localStorage display
    ├── admin.js         – Admin panel: auth, CRUD, settings
    └── storage.js       – localStorage abstraction layer
```

## 🎨 Design System

| Token | Value |
|---|---|
| Accent | `#6B1C2E` (Burgundy) |
| Background | `#0f0f23` / `#1a1a2e` / `#16213e` |
| Text | `#ffffff` / `#b0b0b0` / `#8a8a8a` |
| Cards | `rgba(255,255,255,0.04)` + backdrop-blur |

## ✨ Features

- **Responsive** – Mobile-first, works on all screen sizes
- **Glassmorphism** cards with hover effects and gradient borders
- **Particle hero** background with CSS animations
- **Scroll animations** via Intersection Observer API
- **Live support tickets** – stored in `localStorage`, visible immediately
- **Admin panel** with:
  - Dashboard metrics
  - Ticket status management (New / In Progress / Resolved)
  - Mod CRUD (add, edit, delete)
  - Review CRUD
  - Hero settings (title, subtitle, stats)
  - Section visibility toggles
- **No frameworks** – pure HTML + CSS + Vanilla JS

## 🚀 Getting Started

Simply open `index.html` in a browser, or deploy the root folder to any static host (GitHub Pages, Netlify, Vercel).

### Admin Access
Navigate to `admin.html` and use:
- **Username:** `admin`
- **Password:** `phantom2024`

> ⚠️ This project is for educational and demonstration purposes only.