// updated full index.ts with green comments

// updated index.ts with fixed .js extensions for ESM
import Truck from "./classes/Truck.js";        // ✅ add .js
import Car from "./classes/Car.js";            // ✅ add .js
import Motorbike from "./classes/Motorbike.js"; // ✅ add .js
import Wheel from "./classes/Wheel.js";        // ✅ add .js
import Cli from "./classes/Cli.js";            // ✅ add .js

// (rest of your file stays the same)


// create an array of vehicles
const vehicles = [];

// TODO: uncomment once trucks are implemented
// const truck1 = new Truck(Cli.generateVin(), "red", "Ford", "F-150", 2021, 5000, 120, [], 10000);

// will use default wheels
const car1 = new Car(
  Cli.generateVin(),  // generate unique VIN for the car
  'blue',             // set color to blue
  'Toyota',           // set make to Toyota
  'Camry',            // set model to Camry
  2021,               // set manufacturing year to 2021
  3000,               // set weight to 3000 lbs
  130,                // set top speed to 130 mph
  []                  // leave wheels empty, they will be set to defaults
);

// TODO: uncomment once motorbikes are implemented
// const motorbike1Wheels = [new Wheel(17, "Michelin"), new Wheel(17, "Michelin")];
// const motorbike1 = new Motorbike(Cli.generateVin(), "black", "Harley Davidson", "Sportster", 2021, 500, 125, motorbike1Wheels);

// push vehicles to array
// TODO: uncomment once trucks are implemented
// vehicles.push(truck1);
vehicles.push(car1);  // add car1 to the vehicles array
// TODO: uncomment once motorbikes are implemented
// vehicles.push(motorbike1);

// create a new instance of the Cli class with vehicles array
const cli = new Cli(vehicles);  // pass vehicles array to the Cli instance

// start the CLI (method is called start, not startCli)
cli.start();  // start the CLI interaction

// end of file
