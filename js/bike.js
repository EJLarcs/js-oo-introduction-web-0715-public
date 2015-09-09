function Bike(name, bikeType, frameColor, condition){
  this.name = name;
  this.bikeType = bikeType;
  this.frameColor = frameColor;
  this.condition = "ready to go!";
  this.WHEELS = 2;
}

Bike.prototype.takeForARide = function(num){
  if (num > 50) {
    this.condition = "needs a tune up";
  }
};

Bike.prototype.tuneUp = function(){

    this.condition = "ready to go!";

};
