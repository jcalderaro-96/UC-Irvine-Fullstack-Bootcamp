# Module 14 - Kanban Board with JWT Authentication

**Program:** UC Irvine Full-Stack Web Development (Nov 2024 - June 2025)
**Stack:** React / TypeScript / Vite / Express / Node.js / PostgreSQL / Sequelize / JWT / bcrypt

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

---

## Table of Contents

- [Objective](#objective)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [How To Run](#how-to-run)
- [Project Structure](#project-structure)
- [What It Demonstrates](#what-it-demonstrates)
- [Notable Challenge](#notable-challenge)
- [License](#license)

---

## Objective

Build a full-stack Kanban board with secure JWT-based authentication. Users log in with credentials, receive a signed token, and can then create and manage tasks across a three-column board. All API routes are protected — no token, no access.

---

## Key Features

- Login page with username/password authentication
- JWT issued on valid login, stored in localStorage, checked on every request
- Token expiration detection — expired sessions redirect to login automatically
- Kanban board with three columns: Todo, In Progress, Done
- Create, edit, and delete tickets with name, description, status, and assigned user
- Logout clears the token and redirects to login
- PostgreSQL database with Sequelize ORM for persistent storage
- bcrypt password hashing on all user records

---

## Technology Stack

**Frontend:** React, TypeScript, Vite, React Router DOM  
**Backend:** Express, Node.js, TypeScript  
**Database:** PostgreSQL, Sequelize ORM  
**Authentication:** JSON Web Tokens (jsonwebtoken), bcrypt  

---

## How To Run

**Prerequisites:** Node.js, PostgreSQL running locally.

```bash
# 1. Create the database
psql -U postgres -f server/db/schema.sql

# 2. Install server dependencies and seed the database
cd server
npm install
npm run seed

# 3. Configure environment variables
cp .env.example .env
# edit .env — set DB_USER, DB_PASSWORD, and JWT_SECRET_KEY
```

Start the server (from `server/`):
```bash
npm start
```

Start the client (separate terminal, from `client/`):
```bash
npm install
npm run dev
```

Client runs at `http://localhost:5173`. Server runs at `http://localhost:3001`.

Default seed credentials: `JollyGuru` / `password`

---

## Project Structure

```
module14-kanban/
├── client/
│   └── src/
│       ├── App.tsx                          # Router setup, protected routes
│       ├── api/
│       │   ├── authAPI.tsx                  # POST /auth/login
│       │   ├── ticketAPI.tsx                # CRUD ticket API calls
│       │   └── userAPI.tsx                  # User API calls
│       ├── components/
│       │   ├── Navbar.tsx                   # Nav with logout button
│       │   ├── Swimlane.tsx                 # Column component (Todo/In Progress/Done)
│       │   └── TicketCard.tsx               # Individual ticket card with delete
│       ├── interfaces/                      # TypeScript interfaces (Ticket, User, etc.)
│       ├── pages/
│       │   ├── Login.tsx                    # Login form
│       │   ├── Board.tsx                    # Kanban board - auth check + ticket fetch
│       │   ├── CreateTicket.tsx             # New ticket form
│       │   ├── EditTicket.tsx               # Edit existing ticket
│       │   └── ErrorPage.tsx               # 404/error fallback
│       └── utils/
│           └── auth.ts                      # AuthService: login/logout/loggedIn/isTokenExpired
├── server/
│   ├── db/
│   │   └── schema.sql                       # PostgreSQL schema
│   └── src/
│       ├── server.ts                        # Express setup, static serving
│       ├── middleware/
│       │   └── auth.ts                      # authenticateToken middleware
│       ├── controllers/
│       │   ├── ticket-controller.ts         # Ticket CRUD handlers
│       │   └── user-controller.ts           # User handlers
│       ├── models/
│       │   ├── user.ts                      # User model with bcrypt hook
│       │   └── ticket.ts                    # Ticket model (name, status, description, assignedUser)
│       ├── routes/
│       │   ├── auth-routes.ts               # POST /login
│       │   └── api/                         # Protected ticket + user routes
│       └── seeds/                           # Seed users and tickets
├── server/.env.example
└── package.json
```

---

## What It Demonstrates

- JWT authentication flow end-to-end: sign on login, verify on every protected route
- Client-side token expiration check using `jwtDecode` before making requests
- Express middleware pattern: `authenticateToken` as a reusable route guard
- Sequelize ORM with PostgreSQL: model definitions, associations, lifecycle hooks
- bcrypt password hashing via Sequelize `beforeCreate`/`beforeUpdate` hooks
- MVC separation: controllers handle logic, routes handle registration
- TypeScript throughout the full stack: interfaces for all data shapes, typed request objects
- Protected vs. public route separation on both client and server

---

## Notable Challenge

The application runs correctly in local development with full auth and ticket management. Deployment to Render encountered a database connection issue (ECONNREFUSED) that prevented the live version from operating. The build and upload succeeded — the failure was specific to the managed database connection configuration on Render.

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
