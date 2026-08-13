# Module 08 - TypeScript Vehicle Builder

**Program:** UC Irvine Full-Stack Web Development (Nov 2024 - June 2025)
**Stack:** TypeScript / Node.js / Inquirer.js

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

Build a TypeScript CLI application that models a fleet of vehicles using object-oriented programming — class inheritance, interface enforcement, and type safety throughout.

---

## What It Does

Runs in the terminal and lets the user create and interact with three vehicle types: Car, Truck, and Motorbike. Each vehicle is built from user input, stored in memory, and can be selected for actions like start, accelerate, decelerate, turn, and reverse. Trucks can tow other vehicles (with weight validation against towing capacity), and Motorbikes can perform a wheelie. TypeScript is compiled to JavaScript via `tsc` before running.

---

## How To Run

```bash
npm install
npm start
```

`npm start` runs `npx tsc && node dist/index.js` — compiles TypeScript first, then launches the CLI.

---

## Example Prompt Flow

```
? What would you like to do?
  Create New Vehicle
  Select Existing Vehicle
  Exit

? What type of vehicle do you want to create?
  Car
  Truck
  Motorbike

? Enter the color of the truck: Red
? Enter the make of the truck: Ford
? Enter the model of the truck: F-150
? Enter the year of the truck: 2022
? Enter the weight of the truck (in kg): 2000
? Enter the max speed of the truck (in km/h): 180
? Enter the payload capacity of the truck (in kg): 1500

Created new Truck: VIN-483921
```

---

## Project Structure

```
module08-ts-vehicle-builder/
├── src/
│   ├── index.ts                   # Entry point - initializes vehicles and starts CLI
│   ├── classes/
│   │   ├── Vehicle.ts             # Base class - shared properties and drive methods
│   │   ├── Car.ts                 # Extends Vehicle
│   │   ├── Truck.ts               # Extends Vehicle, implements AbleToTow
│   │   ├── Motorbike.ts           # Extends Vehicle, adds wheelie()
│   │   ├── Wheel.ts               # Wheel model used by all vehicle types
│   │   └── Cli.ts                 # CLI logic - prompts, vehicle creation, action loop
│   └── interfaces/
│       ├── Driveable.ts           # Interface for driveable vehicles
│       └── AbleToTow.ts           # Interface enforcing tow() method on Truck
├── tsconfig.json
└── package.json
```

---

## What It Demonstrates

- TypeScript class inheritance - Car, Truck, and Motorbike all extend a shared Vehicle base class
- Interface enforcement - Truck implements `AbleToTow`, Motorbike adds `wheelie()`
- Type safety across a multi-file project with strict TypeScript config
- `async/await` CLI loop with Inquirer.js for clean prompt chaining
- Compile-then-run workflow using `tsc` and ES module output

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
