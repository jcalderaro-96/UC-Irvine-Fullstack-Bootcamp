# Module 12 - React Portfolio

**Program:** UC Irvine Full-Stack Web Development (Nov 2024 - June 2025)
**Stack:** React 19 / Vite / JSX / ESLint

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

---

## Table of Contents

- [Objective](#objective)
- [What It Does](#what-it-does)
- [How To Run](#how-to-run)
- [Project Structure](#project-structure)
- [What It Demonstrates](#what-it-demonstrates)
- [Notes](#notes)
- [License](#license)

---

## Objective

Build a single-page portfolio application in React that presents an About section, a project portfolio grid, a contact form, and a resume — all navigable without a full page reload.

---

## What It Does

A single-page app with four sections: About Me, Portfolio, Contact, and Resume. Navigation is handled entirely through React state — `App.jsx` holds the current page in `useState` and renders the matching component via a switch. No React Router involved.

The Portfolio section renders a grid of project cards from a data array, each using a reusable `Project` component. The Contact section is a fully controlled form with field-level validation on blur and full validation on submit — errors display inline and clear as the user types. The Resume section lists front-end, back-end, and additional skills alongside education history.

The app includes a `_redirects` file for Netlify deployment, meaning it was set up to serve as a live hosted portfolio.

---

## How To Run

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`. To build for production: `npm run build`.

---

## Project Structure

```
module12-react-portfolio/
├── index.html
├── src/
│   ├── main.jsx                  # React root mount
│   ├── App.jsx                   # Root component - state-based page routing
│   ├── App.css / index.css       # Global styles
│   ├── assets/                   # Images used in portfolio cards
│   └── components/
│       ├── Header.jsx            # Site title + Navigation
│       ├── Navigation.jsx        # Nav buttons with active state highlight
│       ├── About.jsx             # About Me section
│       ├── Portfolio.jsx         # Project grid - data array mapped to Project cards
│       ├── Project.jsx           # Reusable project card component
│       ├── Contact.jsx           # Controlled form with blur + submit validation
│       ├── Resume.jsx            # Skills lists + education + resume download link
│       └── Footer.jsx            # Social links
├── _redirects                    # Netlify SPA redirect config
└── vite.config.js
```

---

## What It Demonstrates

- React component architecture - one reusable `Project` card drives the entire portfolio grid from a data array
- State-based SPA navigation using `useState` and a switch — no React Router dependency
- Controlled form components with `useState` for form data and errors
- Field-level validation on `onBlur` and full form validation on submit, with inline error display
- Props drilling from `App` through `Header` into `Navigation` for active page state
- Vite as a build tool for React with ESLint configured

---

## Notes

Portfolio card content and social links in the footer are placeholder data from the original scaffold — the module focused on component architecture and wiring rather than final content. The contact form validation and the overall component structure are the meaningful deliverables here.

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
