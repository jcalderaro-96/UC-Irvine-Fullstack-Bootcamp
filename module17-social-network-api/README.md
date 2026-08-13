# Module 17 - Social Network API

**Program:** UC Irvine Full-Stack Web Development (Nov 2024 - June 2025)
**Stack:** Node.js / Express / MongoDB / Mongoose ODM / JavaScript (ES6+)

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

---

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [How To Run](#how-to-run)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [What It Demonstrates](#what-it-demonstrates)
- [License](#license)

---

## Demo

No live deployment — this is a backend API designed for testing with Insomnia or Postman.

**Video Walkthrough:** [Watch on Screencastify](https://app.screencastify.com/watch/Z50mnvrPUpm8l9iWJMlC)

---

## Features

- User CRUD operations (Create, Read, Update, Delete)
- Friend list management — add and remove friends via dedicated routes
- Thoughts CRUD linked to users
- Reaction subdocuments embedded within thoughts
- Timestamp formatting on thoughts and reactions via Mongoose getters
- Cascade deletion: removing a user also deletes their associated thoughts
- `friendCount` and `reactionCount` virtuals computed on the model level

---

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose ODM
- JavaScript (ES6+)
- dotenv
- Insomnia (for API testing)

---

## How To Run

**Prerequisites:** MongoDB running locally (default port 27017).

```bash
# 1. Install dependencies
npm install

# 2. Configure environment (optional - defaults to localhost)
cp .env.example .env

# 3. Start the server
npm start
```

Server runs at `http://localhost:3001`. Test all routes with Insomnia or Postman.

---

## API Endpoints

**Users**

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/users` | Get all users |
| GET | `/api/users/:userId` | Get user by ID |
| POST | `/api/users` | Create a new user |
| PUT | `/api/users/:userId` | Update a user by ID |
| DELETE | `/api/users/:userId` | Delete user and their thoughts |
| POST | `/api/users/:userId/friends/:friendId` | Add a friend |
| DELETE | `/api/users/:userId/friends/:friendId` | Remove a friend |

**Thoughts**

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/thoughts` | Get all thoughts |
| GET | `/api/thoughts/:thoughtId` | Get thought by ID |
| POST | `/api/thoughts` | Create a new thought (requires userId) |
| PUT | `/api/thoughts/:thoughtId` | Update a thought by ID |
| DELETE | `/api/thoughts/:thoughtId` | Delete a thought by ID |

**Reactions** (nested within Thoughts)

| Method | Route | Description |
|--------|-------|-------------|
| POST | `/api/thoughts/:thoughtId/reactions` | Add a reaction |
| DELETE | `/api/thoughts/:thoughtId/reactions/:reactionId` | Remove a reaction |

---

## Project Structure

```
module17-social-network-api/
├── config/
│   └── connection.js          # Mongoose connection setup (uses MONGODB_URI env var)
├── controllers/
│   ├── userController.js      # User CRUD + friend list handlers
│   └── thoughtController.js   # Thought CRUD + reaction handlers
├── models/
│   ├── User.js                # User schema with friendCount virtual
│   ├── Thought.js             # Thought + embedded Reaction schema, reactionCount virtual
│   └── index.js               # Model exports
├── routes/
│   ├── index.js               # Root router
│   └── api/
│       ├── index.js           # API router aggregator
│       ├── userRoutes.js      # User and friend routes
│       └── thoughtRoutes.js   # Thought and reaction routes
├── server.js                  # Express setup, DB connection, server start
├── .env.example
└── package.json
```

---

## What It Demonstrates

- MongoDB document modeling with Mongoose: schemas, validation, and relationships via ObjectId references
- Embedded subdocuments (reactions inside thoughts) vs. referenced documents (users, thoughts)
- Mongoose virtuals: `friendCount` and `reactionCount` computed at query time without storing in DB
- Mongoose getters for timestamp formatting on `createdAt` fields
- Cascade delete: `pre('deleteOne')` or controller logic to clean up dependent documents on user removal
- RESTful route organization: controllers handle logic, routes handle registration
- dotenv pattern for configurable connection strings

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
