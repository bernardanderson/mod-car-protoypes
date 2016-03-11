/*
  .....  YOUR MISSION  .....
  1. Author functions that define the Make
      and Model of a Car and the Car itself.
  2. Create three instances of your Car that
      each have a different color.
  3. Each Car you create should inherit the
      make and model name.
*/


/*
  Create a function, Make, that has a property
   of makeName and give it the value of your
   vehicle's make.
*/
// This defines what a new car's make will be.
function Make() {
  this.make = "Toyota";
}

/*
Create a function, Model, to hold the
corresponding property and value
*/
// This defines what a new car's model will be.
function Model() {
  this.model = "Celica";
}

/* Define the prototype of a Model? */
// Makes model a prototype of Make. It now inherits "make" from Make.
Model.prototype = new Make();

/* Define a Car */
// This defines the basic car name
function Car(sentColor) {
  this.color = sentColor;
}

/* Define the prototype of a Car? */
// Makes car a prototype of model (it inherits "model" from Model) 
//  which in turn it inherits Make's "make".
Car.prototype = new Model();

// Create the first car
var fastCar = new Car("red");

// Create the second car
var slowCar = new Car("yellow");


// Create the third car
var dirtyCar = new Car("white");











// function Person(name) {
//   this.name = name;
// }

// // the function person has a prototype property
// // we can add properties to this function prototype
// Person.prototype.kind = "person";

// // when we create a new object using new
// var zack = new Person("Zack");

// // the prototype of the new object points to person.prototype
// console.log(zack.__proto__ == Person.prototype); //=> true

// // in the new object we have access to properties defined in Person.prototype
// //zack.kind //=> person