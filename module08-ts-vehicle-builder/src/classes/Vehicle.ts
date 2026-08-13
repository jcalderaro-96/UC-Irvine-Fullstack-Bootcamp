// updated Vehicle.ts with green comments

// import Driveable interface
import Driveable from '../interfaces/Driveable.js'; // import the Driveable interface

// Vehicle class that implements Driveable interface
class Vehicle implements Driveable {
  vin: string; // VIN (Vehicle Identification Number) of the vehicle, unique for each vehicle
  started: boolean; // tracks if vehicle is started
  currentSpeed: number; // current speed of the vehicle in mph

  constructor(vin: string) { // constructor takes a VIN as input
    this.vin = vin; // assign the VIN to the vehicle
    this.started = false; // initialize as not started
    this.currentSpeed = 0; // initialize speed to 0
  }

  printDetails(): void {
    // print vehicle status to console
    console.log(`Vehicle VIN: ${this.vin}`); // display the VIN of the vehicle
    console.log(`Vehicle started: ${this.started}`); // display if the vehicle is started
    console.log(`Vehicle current speed: ${this.currentSpeed} mph`); // display current speed
  }

  start(): void {
    this.started = true; // set started to true
    console.log('Vehicle started'); // feedback
  }

  accelerate(change: number): void {
    if (this.started) {
      this.currentSpeed += change; // increase speed by change value
      console.log(`Vehicle accelerated to ${this.currentSpeed} mph`); // output current speed
    } else {
      console.log('Start the vehicle first'); // warn if vehicle not started
    }
  }

  decelerate(change: number): void {
    if (this.started) {
      this.currentSpeed -= change; // decrease speed by change value
      if (this.currentSpeed < 0) this.currentSpeed = 0; // prevent negative speed
      console.log(`Vehicle decelerated to ${this.currentSpeed} mph`); // output current speed
    } else {
      console.log('Start the vehicle first'); // warn if vehicle not started
    }
  }

  stop(): void {
    this.currentSpeed = 0; // reset speed to 0
    this.started = false; // mark vehicle as stopped
    console.log('Vehicle stopped'); // feedback
  }

  turn(direction: string): void {
    if (this.started) {
      console.log(`Vehicle turned ${direction}`); // output turn direction
    } else {
      console.log('Start the vehicle first'); // warn if vehicle not started
    }
  }

  reverse(): void {
    if (this.started) {
      console.log('Vehicle reversed'); // feedback on reverse
    } else {
      console.log('Start the vehicle first'); // warn if vehicle not started
    }
  }
}

export default Vehicle; // export class for use elsewhere

// end of file
