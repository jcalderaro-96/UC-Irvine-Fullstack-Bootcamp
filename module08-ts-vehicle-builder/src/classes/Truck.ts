// updated Truck.ts with full implementation and green comments

// import dependencies
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// Truck class extends Vehicle and implements AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  vin: string; // unique vehicle identifier
  color: string; // color of the truck
  make: string; // manufacturer
  model: string; // model name
  year: number; // production year
  weight: number; // weight in pounds
  topSpeed: number; // max speed in mph
  wheels: Wheel[]; // array of wheels
  towingCapacity: number; // towing capacity in pounds

  // constructor initializes all properties
  constructor(
    vin: string, // Add vin as a parameter
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
    super(vin); // pass vin to the Vehicle constructor
    this.vin = vin; // assign vin
    this.color = color; // assign color
    this.make = make; // assign make
    this.model = model; // assign model
    this.year = year; // assign year
    this.weight = weight; // assign weight
    this.topSpeed = topSpeed; // assign top speed

    // if wheels array is not length 4, create 4 default wheels
    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels; // else assign passed wheels
    }

    this.towingCapacity = towingCapacity; // assign towing capacity
  }

  // implement tow method from AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    // get make and model of the vehicle to tow
    const make = vehicle.make;
    const model = vehicle.model;

    // check if vehicle weight is within towing capacity
    if (vehicle.weight <= this.towingCapacity) {
      console.log(`Towing ${make} ${model}`);
    } else {
      console.log(`${make} ${model} is too heavy to be towed`);
    }
  }

  // override printDetails method from Vehicle
  override printDetails(): void {
    super.printDetails(); // print basic vehicle details

    // print Truck specific details
    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Towing Capacity: ${this.towingCapacity} lbs`);

    // print each wheel's details
    this.wheels.forEach((wheel, index) => {
      console.log(
        `Wheel ${index + 1}: ${wheel.getDiameter} inch with a ${wheel.getTireBrand} tire`
      );
    });
  }
}

// export Truck class as default
export default Truck;

// end of file
