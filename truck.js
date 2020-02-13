let Vehicle = require('./vehicle');

class Truck extends Vehicle{
    constructor(carModel, carYear, maxSpeed){
      super(carModel, carYear, maxSpeed);
      this.type = "truck";
    }
    //overriding parent method
    displayInfo() {
        console.log(`It is a car model: ${this.model};
        Made in year: ${this.year};
        Car max speed: ${this.maxSpeed};`);    
    }
  }
  
  module.exports = Truck;