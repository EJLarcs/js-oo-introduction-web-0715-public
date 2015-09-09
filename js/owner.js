function Owner(name){
  this.name = name;
  this.bikes = [];
}

Owner.prototype.buildBike = function(name, bikeType, frameColor){
  var bike = new Bike(name, bikeType, frameColor);
  this.bikes.push(bike);
};
// fabrizio = new Bike("Fabrizio", "roadbike", "red");


Owner.prototype.rideBike = function(bikeName, miles){
  this.bikes.forEach(function(bike) {
    if (bike.name === bikeName) {
      bike.takeForARide(miles);
    }
  }

);
};
