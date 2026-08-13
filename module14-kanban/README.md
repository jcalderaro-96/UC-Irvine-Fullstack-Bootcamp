# Module 14 - Kanban Board with JWT Auth

**Program:** UC Irvine Full-Stack Web Development (Nov 2024 - June 2025)
**Stack:** Node.js / Express 5 / JSON Web Tokens / React / Vite

![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)

---

## Table of Contents

- [Objective](#objective)
- [What It Does](#what-it-does)
- [How To Run](#how-to-run)
- [API Reference](#api-reference)
- [Project Structure](#project-structure)
- [What It Demonstrates](#what-it-demonstrates)
- [Notes](#notes)
- [License](#license)

---

## Objective

Build a Kanban board application with JWT-based authentication. Users log in to receive a signed token, and all subsequent API requests require that token to be valid before the server responds.

---

## What It Does

The Express server handles two concerns: authentication and ticket management. A `POST /api/auth/login` route validates credentials and returns a signed JWT. All ticket routes (`GET /api/tickets`, `POST /api/tickets`) are protected by an `authenticateToken` middleware that reads the `Authorization: Bearer <token>` header, verifies the signature, and either passes the request through or returns a 403.

The React client has a login form that posts to the auth route and stores the returned token in localStorage. Tickets are stored in-memory on the server for the duration of the session.

---

## How To Run

```bash
# Install server dependencies
npm install

# Configure environment
cp .env.example .env
# edit .env and set JWT_SECRET to any strong random string

# Start the server
node server/src/index.js
```

Client (separate terminal):
```bash
cd client
npm install
npm run dev
```

Server runs on `http://localhost:5000`. Client dev server on `http://localhost:5173`.

---

## API Reference

| Method | Route | Auth Required | Description |
|--------|-------|--------------|-------------|
| POST | `/api/auth/login` | No | Returns a signed JWT on valid credentials |
| GET | `/api/auth/user` | Yes | Returns the authenticated user from the token |
| GET | `/api/tickets` | Yes | Fetch all tickets |
| POST | `/api/tickets` | Yes | Create a new ticket |

Test credentials: `username: admin` / `password: password`

---

## Project Structure

```
module14-kanban/
├── server/
│   └── src/
│       ├── index.js                # Express server setup, route mounting
│       ├── middleware/
│       │   └── auth.js             # JWT verification middleware
│       └── routes/
│           ├── auth-routes.js      # POST /login, GET /user
│           └── ticket-routes.js    # GET + POST /tickets (both protected)
├── client/
│   └── src/
│       ├── app.js                  # React root - renders Login component
│       └── components/
│           └── login.jsx           # Login form - POSTs credentials, stores JWT
├── .env.example
└── package.json
```

---

## What It Demonstrates

- JWT authentication flow end-to-end - sign on login, verify on every protected request
- Express middleware pattern - `authenticateToken` as a reusable route guard
- Bearer token extraction from `Authorization` header
- Token storage in `localStorage` on the client
- Protected vs. public route separation in Express
- `dotenv` for keeping the JWT secret out of source code

---

## Notes

This module focused on the authentication layer. The backend is fully functional: auth and ticket routes work and are properly protected. The Kanban board UI (columns, card management, drag-and-drop) was scoped for a later iteration and is not implemented here. The client currently covers the login flow only.

---

## License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).
