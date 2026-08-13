// cli.ts

import inquirer from 'inquirer'; // import inquirer for user input
import Car from './Car.js';       // add .js
import Truck from './Truck.js';   // add .js
import Vehicle from './Vehicle.js';  // add .js extension if you are using ES modules and compiled to JS

import Motorbike from './Motorbike.js'; // add .js
import Wheel from './Wheel.js';   // add .js
// and any other imports in this file


// Define the CLI class
class Cli {
  vehicles: Vehicle[]; // Array to store all vehicle objects

  constructor(vehicles: Vehicle[]) {
    this.vehicles = vehicles;
  }

  // Generate VIN for new vehicles (replace with real VIN generation if needed)
  static generateVin(): string {
    return `VIN-${Math.floor(Math.random() * 1000000)}`;
  }

  // Start the command-line interface (CLI)
  async start(): Promise<void> {
    const { action } = await inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: ['Create New Vehicle', 'Select Existing Vehicle', 'Exit'],
      },
    ]);

    // Handle the action selected by the user
    if (action === 'Create New Vehicle') {
      await this.createNewVehicle();
    } else if (action === 'Select Existing Vehicle') {
      await this.selectExistingVehicle();
    } else {
      console.log('Goodbye!');
      process.exit(); // Exit the application
    }
  }

  // Create a new vehicle based on user input
  async createNewVehicle(): Promise<void> {
    const { vehicleType } = await inquirer.prompt([
      {
        type: 'list',
        name: 'vehicleType',
        message: 'What type of vehicle do you want to create?',
        choices: ['Car', 'Truck', 'Motorbike'],
      },
    ]);

    let newVehicle: Vehicle;

    if (vehicleType === 'Car') {
      newVehicle = await this.createCar();
    } else if (vehicleType === 'Truck') {
      newVehicle = await this.createTruck();
    } else {
      newVehicle = await this.createMotorbike();
    }

    this.vehicles.push(newVehicle); // Add new vehicle to the vehicles array
console.log(`Created new ${vehicleType}: ${(newVehicle as Car).vin}`);

    // Recurse to allow for additional actions
    await this.start();
  }

  // Create a new car
  async createCar(): Promise<Car> {
    const { color, make, model, year, weight, speed } = await inquirer.prompt([
      { type: 'input', name: 'color', message: 'Enter the color of the car:' },
      { type: 'input', name: 'make', message: 'Enter the make of the car:' },
      { type: 'input', name: 'model', message: 'Enter the model of the car:' },
      { type: 'input', name: 'year', message: 'Enter the year of the car:' },
      { type: 'input', name: 'weight', message: 'Enter the weight of the car (in kg):' },
      { type: 'input', name: 'speed', message: 'Enter the max speed of the car (in km/h):' },
    ]);

    // Create a new car with the input data
    return new Car(Cli.generateVin(), color, make, model, parseInt(year), parseInt(weight), parseInt(speed), []);
  }

  // Create a new truck (you can extend this for any truck-specific details)
  async createTruck(): Promise<Truck> {
    const { color, make, model, year, weight, speed, payload } = await inquirer.prompt([
      { type: 'input', name: 'color', message: 'Enter the color of the truck:' },
      { type: 'input', name: 'make', message: 'Enter the make of the truck:' },
      { type: 'input', name: 'model', message: 'Enter the model of the truck:' },
      { type: 'input', name: 'year', message: 'Enter the year of the truck:' },
      { type: 'input', name: 'weight', message: 'Enter the weight of the truck (in kg):' },
      { type: 'input', name: 'speed', message: 'Enter the max speed of the truck (in km/h):' },
      { type: 'input', name: 'payload', message: 'Enter the payload capacity of the truck (in kg):' },
    ]);

    // Create a new truck with the input data
    return new Truck(Cli.generateVin(), color, make, model, parseInt(year), parseInt(weight), parseInt(speed), [], parseInt(payload));
  }

  // Create a new motorbike (you can extend this for any motorbike-specific details)
  async createMotorbike(): Promise<Motorbike> {
    const { color, make, model, year, weight, speed } = await inquirer.prompt([
      { type: 'input', name: 'color', message: 'Enter the color of the motorbike:' },
      { type: 'input', name: 'make', message: 'Enter the make of the motorbike:' },
      { type: 'input', name: 'model', message: 'Enter the model of the motorbike:' },
      { type: 'input', name: 'year', message: 'Enter the year of the motorbike:' },
      { type: 'input', name: 'weight', message: 'Enter the weight of the motorbike (in kg):' },
      { type: 'input', name: 'speed', message: 'Enter the max speed of the motorbike (in km/h):' },
    ]);

    // Create a new motorbike with the input data
    return new Motorbike(Cli.generateVin(), color, make, model, parseInt(year), parseInt(weight), parseInt(speed), []);
  }

  // Select an existing vehicle
  async selectExistingVehicle(): Promise<void> {
    const { vehicle } = await inquirer.prompt([
      {
        type: 'list',
        name: 'vehicle',
        message: 'Select an existing vehicle:',
choices: this.vehicles.map(v => `${v.constructor.name} - ${(v as Car).vin}`),

      },
    ]);

    console.log(`You selected vehicle: ${vehicle}`);
    // After selecting, you could allow them to perform actions like "start", "stop", etc. (Not implemented here)

    await this.start(); // Return to the main action menu
  }
}

export default Cli;
