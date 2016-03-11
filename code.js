// This defines what a new car's make will be.
function Make() {
  this.make = "Toyota";
}

// This defines what a new car's model will be.
function Model() {
  this.model = "Celica";
}

// Makes model a prototype of Make. It now inherits "make" from Make.
Model.prototype = new Make();

// This defines the basic car name
function Car(sentColor) {
  this.color = sentColor;
}

// Makes car a prototype of model (it inherits "model" from Model) 
//  which in turn it inherits Make's "make".
Car.prototype = new Model();

// Create the first car
var fastCar = new Car("red");

// Create the second car
var slowCar = new Car("yellow");

// Create the third car
var dirtyCar = new Car("white");

// Show that the cars were made
console.log("fastCar",fastCar);
console.log("slowCar",slowCar);
console.log("dirtyCar",dirtyCar);
