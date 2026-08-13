// updated Car.ts with green comments and get accessor fix
import Vehicle from './Vehicle.js'; // import base Vehicle class
import Wheel from './Wheel.js'; // import Wheel class

class Car extends Vehicle {
  vin: string; // unique vehicle identifier
  color: string; // car color
  make: string; // manufacturer
  model: string; // model name
  year: number; // manufacturing year
  weight: number; // weight in pounds
  topSpeed: number; // max speed in mph
  wheels: Wheel[]; // array of wheels (should be 4)

  constructor(
    vin: string, // the VIN is now passed into the constructor
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]
  ) {
    super(vin); // pass vin to the base Vehicle constructor
    this.vin = vin; // assign vin
    this.color = color; // assign color
    this.make = make; // assign make
    this.model = model; // assign model
    this.year = year; // assign year
    this.weight = weight; // assign weight
    this.topSpeed = topSpeed; // assign top speed

    // Validate wheels count: assign default 4 wheels if not 4 provided
    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()]; // default wheels
    } else {
      this.wheels = wheels; // use provided wheels
    }
  }

  // Override Vehicle's printDetails() to add Car-specific info
  override printDetails(): void {
    super.printDetails(); // print base Vehicle info

    // Print Car-specific properties
    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);

    // Print wheels info using property access (getters)
    this.wheels.forEach((wheel, index) => {
      console.log(
        `Wheel ${index + 1}: ${wheel.getDiameter} inch with a ${wheel.getTireBrand} tire`
      );
    });
  }
}

export default Car; // export Car class as default

// end of Car.ts
