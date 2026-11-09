class Vehicle {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  start() {
    console.log(`${this.brand} ${this.model} начал движение`);
  }
}
class Car extends Vehicle {
  constructor(brand, model, doors) {
    super(brand, model);
    this.doors = doors;
  }

  showInfo() {
    console.log(
      `${this.brand} ${this.model}, количество дверей: ${this.doors}`,
    );
  }
}
class Motorcycle extends Vehicle {
  constructor(brand, model, hasSidecar) {
    super(brand, model);
    this.hasSidecar = hasSidecar;
  }

  showInfo() {
    console.log(
      `${this.brand} ${this.model}, наличие коляски: ${this.hasSidecar}`,
    );
  }
}
const myCar = new Car("Toyota", "Camry", 4);

myCar.start();
myCar.showInfo();

const myMotorcycle = new Motorcycle("Honda", "CBR", false);

myMotorcycle.start();
myMotorcycle.showInfo();
