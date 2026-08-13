// updated Wheel.ts with green comments and minor cleanup

// Wheel class that defines the properties of a wheel
class Wheel {
  // private properties for encapsulation
  private diameter: number; // diameter of the wheel in inches
  private tireBrand: string; // brand of the tire

  // constructor with default values for diameter and tire brand
  constructor(diameter: number = 18, tireBrand: string = "GoodYear") {
    this.diameter = diameter; // assign diameter
    this.tireBrand = tireBrand; // assign tire brand
  }

  // getter for diameter (read-only access)
  get getDiameter(): number {
    return this.diameter;
  }

  // getter for tire brand (read-only access)
  get getTireBrand(): string {
    return this.tireBrand;
  }
}

// export the Wheel class for use in other modules
export default Wheel;

// end of file
