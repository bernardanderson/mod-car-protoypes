// This defines what a new car's make will be.
function Make() {
  this.make = "Toyota";
}

Make.prototype.setMake = function(sentMake) {
  this.make = sentMake;
}

// This defines what a new car's model will be.
function Model() {
  this.model = "Celica";
}

// Makes model a prototype of Make. It now inherits "make" from Make.
Model.prototype = new Make();

Model.prototype.setModel = function(sentModel) {
  this.model = sentModel;
}

// This defines the basic car name
function Car(sentColor) {
  this.color = sentColor;
}

// Makes car a prototype of model (it inherits "model" from Model) 
//  which in turn it inherits Make's "make".
// Object.setPrototypeOf( Car.prototype, Model.prototype );
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

/*
    Being a rich, avid car collector, you own 2 cars from your second
    favorite manufacturer. You also one 1 car from your third favorite
    manufacturer.
*/

var fancyChevy = new Car("Silver");
  fancyChevy.setMake("Chevy");
  fancyChevy.setModel("Fit");

var crappyChevy = new Car("Brown");
  crappyChevy.setMake("Chevy");
  crappyChevy.setModel("Slow");

var tesla = new Car("Red");
  tesla.setMake("Tesla");
  tesla.setModel("3X");

console.log("fancyChevy", fancyChevy);
console.log("crappyChevy", crappyChevy);
console.log("tesla", tesla);