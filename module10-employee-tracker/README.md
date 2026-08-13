# Module 10 - Employee Tracker

**Program:** UC Irvine Full-Stack Web Development (Nov 2024 - June 2025)
**Stack:** Node.js / PostgreSQL / Inquirer.js

![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)

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

Build a command-line content management system (CMS) that lets a business owner view and manage departments, roles, and employees stored in a PostgreSQL database.

---

## What It Does

Presents a looping CLI menu with seven actions. View queries use SQL JOINs to return readable data — roles show their department name, employees show their title, department, salary, and manager name via a self-join on the employee table. Add actions prompt for relevant details, fetch live data from the DB to populate list choices (e.g. role options when adding an employee), and insert using parameterized queries. The app keeps the connection open until the user selects Exit.

---

## How To Run

**Prerequisites:** PostgreSQL must be running locally.

```bash
# 1. Set up the database
psql -U postgres -f schema.sql

# 2. Install dependencies
npm install

# 3. Configure environment
cp .env.example .env
# edit .env and set DB_PASSWORD to your local postgres password

# 4. Start the app
npm start
```

---

## Example Prompt Flow

```
? What would you like to do?
  View All Departments
  View All Roles
> View All Employees
  Add Department
  Add Role
  Add Employee
  Update Employee Role
  Exit

id | first_name | last_name | title     | department  | salary | manager
---|------------|-----------|-----------|-------------|--------|--------
1  | Alice      | Smith     | Engineer  | Engineering | 80000  | null
2  | Bob        | Jones     | Salesperson | Sales     | 60000  | null

? What would you like to do? Add Employee
? Enter the employee's first name: Dana
? Enter the employee's last name: Lee
? Select the employee's role: Engineer
? Select the employee's manager: Alice Smith

Employee Dana Lee added.
```

---

## Project Structure

```
module10-employee-tracker/
├── index.js          # All app logic - DB connection, menu loop, query functions
├── schema.sql        # Table definitions (department, role, employee) + seed data
├── .env.example      # Copy to .env and set DB_PASSWORD
└── package.json
```

---

## What It Demonstrates

- Relational database design with PostgreSQL - foreign keys, referential integrity, self-referencing table (manager is also an employee)
- Multi-table SQL JOINs including a self-join to resolve manager names
- Parameterized queries with the `pg` client to prevent SQL injection
- `Promise.all` for parallel DB queries before rendering prompt choices
- CLI prompt loop with Inquirer.js and input validation on all user-facing fields
- Environment variable management with `dotenv`

---

## License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).
