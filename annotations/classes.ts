class Vehicle {
  constructor(private _color: string) { }

  protected honk(): void {
    console.log("poop");
  }

  public get color(): string {
    return this._color;
  }

  public set color(color: string) {
    this._color = color;
  }
}

class Car extends Vehicle {
  constructor(color: string) {
    super(color);
  }

  private drive(): void {
    console.log("Room");
  }

  public startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle("red");
console.log(vehicle.color);
