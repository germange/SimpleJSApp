let Vehicle = require('./app');

class Car extends Vehicle{
  constructor(carModel, carYear, maxSpeed){
    super(carModel, carYear, maxSpeed);
    this.type = "car";
  }
  static transportPeople(){
    console.log('I am starting transporting passengers');
  }
}
Car.transportPeople();
