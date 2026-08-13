# Module 07 - README Generator

**Program:** UC Irvine Full-Stack Web Development (Nov 2024 - June 2025)
**Stack:** Node.js / Inquirer.js

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

---

## Table of Contents

- [Objective](#objective)
- [What It Does](#what-it-does)
- [How To Run](#how-to-run)
- [Example Prompt Flow](#example-prompt-flow)
- [Project Structure](#project-structure)
- [What It Demonstrates](#what-it-demonstrates)
- [License](#license)

---

## Objective

Build a command-line tool that prompts a developer through a structured set of questions and automatically generates a complete, professionally formatted `README.md` file — no manual markdown writing required.

---

## What It Does

Runs in the terminal and walks the user through nine prompts: project title, description, installation steps, usage instructions, license selection, contributing guidelines, test instructions, GitHub username, and email. On completion, it writes a fully structured and formatted `README.md` to the `Output/` directory.

A sample of the generated output is included in `sample-README/README.md`.

---

## How To Run

```bash
npm install
node index.js
```

Follow the prompts in the terminal. The generated file will appear in `Output/README.md`.

---

## Example Prompt Flow

```
? What is your project title? My Awesome App
? Write a description of your project: A web app that does X.
? What are the installation instructions? npm install
? How is the app used? Run npm start and open localhost:3000
? What are the contribution guidelines? Fork the repo and submit a PR.
? What are the test instructions? npm test
? Choose a license for your project: MIT
? What is your GitHub username? jcalderaro-96
? What is your email address? dev@example.com

README.md generated successfully in Output folder!
```

---

## Project Structure

```
module07-readme-generator/
├── index.js                  # Main entry point - prompts and file write logic
├── utils/
│   └── generateMarkdown.js   # Assignment starter scaffold (stub functions)
├── sample-README/
│   └── README.md             # Example of generated output
└── Output/                   # Directory where the tool writes its output
```

---

## What It Demonstrates

- Interactive CLI prompt chaining with Inquirer.js
- Dynamic markdown generation using template literals with conditional license badge logic
- File system writes and directory creation with Node's built-in `fs` and `path` modules
- ES module syntax (`import`/`export`) in a Node.js environment

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
