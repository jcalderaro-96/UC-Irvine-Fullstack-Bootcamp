# Module 19 - Tech Quiz with Cypress Testing

**Program:** UC Irvine Full-Stack Web Development (Nov 2024 - June 2025)
**Stack:** React / TypeScript / Vite / Express / Node.js / MongoDB / Mongoose / Cypress

![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)

---

## Table of Contents

- [Objective](#objective)
- [Features](#features)
- [Technologies](#technologies)
- [How To Run](#how-to-run)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [What It Demonstrates](#what-it-demonstrates)
- [Notes](#notes)
- [License](#license)

---

## Objective

Build a full-stack tech quiz application and write both Cypress component tests and end-to-end tests covering the quiz flow.

---

## Features

- Tech quiz with 10 random Python questions pulled from MongoDB
- Displays final score on completion
- Option to restart and take a new quiz
- Cypress component test: mounts the Quiz component and asserts the Start button renders
- Cypress e2e test: drives the full quiz flow from start to final score screen

---

## Technologies

**Frontend:** React, Vite, TypeScript  
**Backend:** Express.js, Node.js, TypeScript  
**Database:** MongoDB, Mongoose  
**Testing:** Cypress (component + e2e)  

---

## How To Run

**Prerequisites:** Node.js, MongoDB running locally.

```bash
# 1. Install all dependencies
npm run install

# 2. Configure environment
cp server/.env.example server/.env

# 3. Seed the database
npm run seed

# 4. Build the client and start the server
npm start
```

For development with hot reload:
```bash
npm run start:dev
```

App runs at `http://localhost:3001`.

---

## Testing

Open Cypress interactive runner:
```bash
npm test
```

**Component test** (`cypress/component/Quiz.cy.jsx`): mounts `Quiz` in isolation and asserts the Start button is visible.

**E2e test** (`cypress/e2e/quiz.cy.js`): visits the app, clicks Start, loops through 10 questions by selecting the first answer each time, and asserts the final score screen appears.

---

## Project Structure

```
module19-cypress-quiz/
├── client/
│   └── src/
│       ├── App.tsx
│       ├── components/
│       │   └── Quiz.tsx              # Quiz UI: start, question loop, score
│       ├── models/                   # TypeScript interfaces: Question, Answer
│       └── services/
│           └── questionApi.ts        # GET /api/questions
├── cypress/
│   ├── component/
│   │   └── Quiz.cy.jsx               # Component test - mounts Quiz
│   ├── e2e/
│   │   └── quiz.cy.js                # E2e test - full quiz flow
│   ├── fixtures/
│   │   └── questions.json            # Fixture data for tests
│   └── support/
│       ├── commands.ts
│       └── e2e.ts
├── server/
│   └── src/
│       ├── server.ts                 # Express setup, serves client/dist
│       ├── config/connection.ts      # Mongoose connection (uses MONGODB_URI)
│       ├── controllers/
│       ├── models/Question.ts
│       ├── routes/
│       └── seeds/                    # Python quiz seed data
├── server/.env.example
├── cypress.config.ts
└── package.json
```

---

## What It Demonstrates

- Cypress component testing: mounting a React component in isolation with `cypress/react`
- Cypress e2e testing: driving real browser interactions against the running app
- Full-stack MERN architecture: React client consuming an Express/MongoDB REST API
- TypeScript throughout: typed models on both client and server
- dotenv for configurable MongoDB connection string

---

## Notes

The Cypress test suite was configured but not fully verified end-to-end during the module — the component test structure is correct, and the e2e test covers the intended flow, but the server/client integration had a MIME type mismatch that prevented the frontend from loading correctly when served from Express. The quiz app itself runs and the API endpoints are functional.

---

## License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).
