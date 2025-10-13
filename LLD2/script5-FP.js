function printName(cb1, cb2, cb3) {
  // cb has to be function
  console.log("Kabil");
  /**
   *
   *
   *
   *
   */
  cb1(); // calling the callback placeholder for fn invocation
  cb2(); // calling the callback placeholder for fn invocation
  cb3(); // calling the callback placeholder for fn invocation
}

function printLastName() {
  console.log("Dev");
}

function printAge() {
  console.log(24);
}

function printAddress() {
  console.log("Delhi");
}

printName(printLastName, printAge, printAddress);
let counter = 0;

function increment(value, step) {
  //   counter = counter + 1;
  return value + step;
}

console.log(increment(10, 1));
console.log(increment(10, 1));

// let discount = 10; // click 8

// function getFinalPrice(price, discount) {
//   return price - (price * discount) / 100; //
//   // return price - (price * discount)/100
// }

// getFinalPrice(100, 10) //

// function greetUser(callback) {
//   console.log("Hello");
//   callback();
// }

// function askQuestion() {
//   console.log("How are you today");
// }

// greetUser(askQuestion);

// function multiplier(factor) {
//   return function (number) {
//     return number * factor;
//   };
// }

// const double = multiplier(2);
// const triple = multiplier(3);

// console.log(double(5));
// console.log(triple(5));

const radiuses = [2, 3, 4, 5, 8];

function calculate(radiusArr, logic) {
  // radiuses , circimference
  // radius arr , calculateArea
  const result = [];
  for (let i = 0; i < radiusArr.length; i++) {
    result.push(logic(radiusArr[i]));
  }
  return result;
}
function calculateArea(radius) {
  return Math.PI * radius * radius;
}
function calculateCircumference(radius) {
  return Math.PI * 2 * radius;
}
function calculateDiameter(radius) {
  return 2 * radius;
}
function calculateSemiCirlce(radius) {
  return Math.PI * radius;
}

// function calculateArea(radiusArr) {
//   const result = [];
//   for (let i = 0; i < radiusArr.length; i++) {
//     result.push(Math.PI * radiusArr[i] * radiusArr[i]);
//   }
//   return result;
// }

// function calculateCircumference(radiusArr) {
//   const result = [];
//   for (let i = 0; i < radiusArr.length; i++) {
//     result.push(Math.PI * 2 * radiusArr[i]);
//   }
//   return result;
// }

// function calculateDiameter(radiusArr) {
//   const result = [];
//   for (let i = 0; i < radiusArr.length; i++) {
//     result.push(2 * radiusArr[i]);
//   }
//   return result;
// }

// console.log(calculateArea(radiuses));
// console.log(calculateCircumference(radiuses));
// console.log(calculateDiameter(radiuses));

const areas = calculate(radiuses, calculateArea);
const circumferences = calculate(radiuses, calculateCircumference);
const diameters = calculate(radiuses, calculateDiameter);
const semi = calculate(radiuses, calculateSemiCirlce);

console.log(areas);
console.log(diameters);
