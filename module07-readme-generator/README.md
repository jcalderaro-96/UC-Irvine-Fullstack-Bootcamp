# Module 07 - README Generator

**Program:** UC Irvine Full-Stack Web Development (Nov 2024 - June 2025)
**Stack:** Node.js / Inquirer.js

## Objective
Build a command-line tool that prompts a developer with a series of questions and generates a professional, formatted README.md file from their answers.

## What It Does
Runs in the terminal and walks the user through prompts covering project title, description, installation, usage, license, contributing guidelines, and contact info. On completion it writes a fully structured README to the `sample-README/` directory. The `sample-README/README.md` file in this repo is an example of the generated output.

## How To Run
```bash
npm install
node index.js
```

## What It Demonstrates
- Interactive CLI workflows using Inquirer.js prompt chaining
- Dynamic markdown generation via template literals with conditional license badge logic
- Writing files to disk with Node's built-in `fs` module
