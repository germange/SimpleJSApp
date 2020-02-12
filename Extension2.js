let Vehicle = require('./app');

class Truck extends Vehicle{
    constructor(carModel, carYear, maxSpeed){
      super(carModel, carYear, maxSpeed);
      this.type = "truck";
    }
    displayInfo() {
        console.log(`It is a car model: ${this.model};
        Made in year: ${this.year};
        Car max speed: ${this.maxSpeed};`);    
    }
  }
  
  let bmw = new Truck ("xc60",2015,200);
  bmw.displayInfo();