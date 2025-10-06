// // function serveBeverage(drink, quantity) {
// //   // function declaration
// //   // parameters
// //   console.log("I want " + quantity + " " + drink);
// // }

// // serveBeverage("coffee", 4); // arguments

// // // function expression
// // let sayHi = function () {
// //   console.log("Hi from JavaScript");
// //   return 8;
// // };

// // // sayHi();

// // /**
// //  * functions as first class citizens
// //  * 1. store them as variables
// //  * 2. pass them as arguments
// //  * 3. Return a function from a function
// //  * 4. assign them as properties of objects
// //  */

// // function greet(name) {
// //   // Ritik
// //   return "Hello " + name;
// // }

// // function log(input) {
// //   console.log(`User activity done for ${input}`);
// // }

// // // greet("Nitin") // - Hello Nitin
// // //
// // function processUserInput(fn) {
// //   // log
// //   // greet
// //   // greet
// //   // parameter expected is function
// //   let name = "Ritik";
// //   console.log(fn(name)); // log(name)
// // }

// // processUserInput(greet); // function as argument
// // processUserInput(log); // function as argument

// // console.log("a is ", a);
// // var a = 10;
// // console.log("a is ", a);
// // printName();

// // function printName() {
// //   console.log("Scaler Ex Context");
// // }

// // var b = 20;

// // printAge();

// // var printAge = function () {
// //   console.log(24);
// // };
// debugger;
// // console.log(x); // TDZ;
// let x = 10;
// var a = 20;
// const as = "hoisting";
// console.log(a); // undefined
// console.log(as);

// Practise problems
// console.log(x);
// var x = 10;
// console.log(x);

sayHi(); // declaration

function sayHi() {
  console.log("Hello from declaration");
}
var sayHi = function () {
  console.log("hello from expression");
}; // sayHi -> fn with console log as expression

sayHi(); // expression
