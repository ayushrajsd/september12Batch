function Car(model, year) {
  this.model = model;
  this.year = year;

  // this.displayInfo = function () {
  //   console.log(`this is a ${this.year} ${this.model}`);
  // };
}
Car.prototype.displayInfo = function () {
  console.log(`this is a ${this.year} ${this.model}`);
};

const car1 = new Car("Tata Sierra", 2025);

// car1.__proto__ === Car.prototype
/***
 * 1. creates a new objext
 * 2. link objects's hidden property to constructor function prototype object
 */
const car2 = new Car("Nexon", 2024);

car1.displayInfo();
car2.displayInfo();

const obj = {}; // new Object("")

// prototype and __proto__

// Object.create
const carProtoType = {
  displayInfo: function () {
    console.log(`this is a ${this.year} ${this.model}`);
  },
  print: function () {
    console.log("asdasd");
  },
};

const car3 = Object.create(carProtoType);
/**
 * 1. creates a new empty object
 * 2. sets object's prototype to custom object was passed as param
 */
// car3 -> carPrototype -> Object.prototype -> null

const car4 = Object.create(carProtoType);

car3.model = "Mustang";
car3.year = 2024;

car4.model = "Swift";
car4.year = 2024;

car3.displayInfo(); // checks for displayInfo on car3 -> its prototype (carProtoType)
car4.displayInfo(); // checks for displayInfo on car3 -> its prototype (carProtoType)

function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(this.name, "makes a sound");
};

// const dog = new Animal("Buddy");
// const cat = new Animal("Whiskers");

function Dog(name) {
  this.name = name;
}
// Dog.prototype -> Animal.prototype
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const dog = new Dog("Husky");
console.log(dog.constructor.name);

dog.speak();
// cat.speak();

// getPrototypeOf setPrototypeOf

const animal2 = {
  speak() {
    console.log("sound");
  },
};
const dog2 = {};
Object.setPrototypeOf(dog2, animal2);

dog2.speak();
