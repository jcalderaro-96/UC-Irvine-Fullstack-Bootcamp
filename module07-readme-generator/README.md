# Module 07 - README Generator

**Program:** UC Irvine Full-Stack Web Development (Nov 2024 - June 2025)
**Stack:** Node.js / Inquirer.js

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

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
