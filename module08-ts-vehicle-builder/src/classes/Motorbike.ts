// updated Motorbike.ts with green comments

// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js'; // parent Vehicle class
import Wheel from './Wheel.js'; // Wheel class for wheels array

// Motorbike class extends Vehicle
class Motorbike extends Vehicle {
  vin: string; // vehicle identification number
  color: string; // color of the motorbike
  make: string; // manufacturer
  model: string; // model name
  year: number; // manufacturing year
  weight: number; // weight in pounds
  topSpeed: number; // max speed in mph
  wheels: Wheel[]; // wheels array

  constructor(
    vin: string, // Add vin as a constructor parameter
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]
  ) {
    super(vin); // pass vin to the Vehicle constructor

    // initialize properties
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;

    // check wheels length, create default if not 2
    if (wheels.length !== 2) {
      this.wheels = [new Wheel(), new Wheel()]; // default wheels
    } else {
      this.wheels = wheels;
    }
  }

  // method to simulate a wheelie
  wheelie(): void {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }

  // override printDetails method
  override printDetails(): void {
    super.printDetails(); // call Vehicle's printDetails

    // print Motorbike specific details
    console.log(`VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Color: ${this.color}`);

    // print wheel details for both wheels
    console.log(`Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`);
    console.log(`Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`);
  }
}

// export the Motorbike class
export default Motorbike;

// end of file
