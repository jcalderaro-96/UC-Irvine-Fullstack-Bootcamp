# Module 20 - Tech Quiz with GitHub CI/CD

**Program:** UC Irvine Full-Stack Web Development (Nov 2024 - June 2025)
**Stack:** React / TypeScript / Vite / Express / MongoDB / Mongoose / Cypress / GitHub Actions

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

---

## Table of Contents

- [Objective](#objective)
- [What It Does](#what-it-does)
- [CI/CD Pipeline](#cicd-pipeline)
- [Technologies Used](#technologies-used)
- [How To Run](#how-to-run)
- [Project Structure](#project-structure)
- [What It Demonstrates](#what-it-demonstrates)
- [License](#license)

---

## Objective

Build a full-stack tech quiz application and wire it into a GitHub Actions CI/CD pipeline. The pipeline automatically runs Cypress component tests on pull requests to `develop`, and triggers a Render deployment on every push to `main`.

---

## What It Does

The app serves a Python tech quiz pulled from a MongoDB seed dataset. Users start a quiz, answer multiple-choice questions one at a time, and see their final score when finished. Questions are served from a REST API backed by MongoDB.

---

## CI/CD Pipeline

Two GitHub Actions workflows run automatically:

| Workflow | Trigger | Action |
|----------|---------|--------|
| `cypress-tests.yml` | PR opened/updated targeting `develop` | Runs Cypress component tests |
| `deploy.yml` | Push to `main` | Triggers Render deploy hook via `RENDER_DEPLOY_HOOK_URL` secret |

The branch model: active development happens on `develop`, Cypress gates any merge, and only `main` deploys to production.

---

## Technologies Used

**Frontend:** React, TypeScript, Vite  
**Backend:** Express, Node.js, TypeScript  
**Database:** MongoDB, Mongoose  
**Testing:** Cypress (component tests)  
**CI/CD:** GitHub Actions, Render  

---

## How To Run

**Prerequisites:** Node.js, MongoDB running locally.

```bash
# 1. Install root dependencies
npm install

# 2. Configure environment
cp server/.env.example server/.env
# default value (localhost MongoDB) works out of the box

# 3. Seed the database
cd server
npm run seed

# 4. Start the server
npm start
```

Client (separate terminal):
```bash
cd client
npm install
npm run dev
```

Run Cypress tests:
```bash
npm run test-component
```

---

## Project Structure

```
module20-cicd-quiz/
├── .github/
│   └── workflows/
│       ├── cypress-tests.yml      # Run Cypress on PRs to develop
│       └── deploy.yml             # Deploy to Render on push to main
├── client/
│   └── src/
│       ├── App.tsx
│       ├── components/
│       │   └── Quiz.tsx            # Quiz component: start, question loop, score
│       ├── services/
│       │   └── questionApi.ts      # API calls to /api/questions
│       ├── models/                 # TypeScript interfaces: Question, Answer
│       └── mocks/
│           └── questionRoutes.ts   # Mock API responses for Cypress
├── cypress/
│   └── component/
│       └── Quiz.cy.jsx             # Cypress component test for Quiz
├── server/
│   └── src/
│       ├── server.ts               # Express setup, static serving
│       ├── config/connection.ts    # MongoDB connection
│       ├── controllers/
│       │   └── questionController.ts
│       ├── models/Question.ts      # Mongoose Question schema
│       ├── routes/                 # /api/questions route
│       └── seeds/                  # Python quiz seed data + seed script
├── server/.env.example
└── package.json
```

---

## What It Demonstrates

- GitHub Actions CI/CD: branching strategy with automated test gate on `develop` and auto-deploy from `main`
- Cypress component testing: mounting `Quiz` in isolation and asserting UI behavior
- Full-stack TypeScript: typed models shared conceptually across client and server
- MongoDB with Mongoose for storing and serving quiz questions
- Vite + React frontend consuming an Express REST API
- Environment secrets management: `RENDER_DEPLOY_HOOK_URL` stored as a GitHub Actions secret

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
