console.log("Hello from script file");
var a = true;
a = 10;
console.log(a);

var a = "Scaler";
console.log(a);

// var does not respect block scope

// let and const
// let - allows reassignment but not re - declaration
let city = "Delhi";
console.log(city);
city = "Pune";
console.log(city);
// let city = "New York";

const pi = 3.14;
pi = 3.15;
console.log(pi);

let a = 20;
let b = -10.5;

let c = 2 / 0;

let d = "hello" / 2;

let musk = 500_000_000_000 + 1000000;
let ambani = 100e9 + 300000;

console.log(a, b, c, d, musk, ambani);

let str1 = "Hello";
let str2 = "World";
let str3 = `this is a template literal`;
let users = 150;
console.log(`There are ${users} online`);
console.log("there are " + users + " online sing +");
console.log(str1, str2, str3);
console.log("there are ", users, "online");

let isEven = false;
let isOdd = true;

// undefined
let x;
console.log(x);

// null
let y = null;
console.log(y);
y = 12;
console.log(y);

function serveBeverage(drink) {
  console.log("Serving " + drink);
}

serveBeverage("tea");
serveBeverage("coffee");

/**
 * functions - stored in variable
 * pass function as argument
 * return function from another function
 * this is why functions are called first class citizens
 */

// Arrays
let arr = [1, "Scaler", true, null, [2, 3]];
console.log(arr[1]);
console.log(arr.length);
// push , pop, shift, unshift
let cars = ["Swift", "BMW", "Audi"];
cars.push("Tesla");
console.log(cars);

let person = {
  name: "Kamal",
  age: 24,
  isStudent: true,
};

console.log(person);

// Promitive VS Reference Copying
let num1 = 100;
let num2 = num1; // copy the value
console.log(num1);
console.log(num2);
console.log("----------");
num2 = 200;

console.log(num1);
console.log(num2);

let arr1 = [1, 2, 3];
let arr2 = arr1; // copying the address / reference
arr2.push(4);
console.log(arr1);
console.log(arr2);

let user = new Object(); // object constructor method
let anotherUser = {}; // object literal syntax
console.log(user, anotherUser);

let person2 = {
  name: "Kamal",
  age: 24,
  phone: 12345678,
  dob: "11-sept",
};
console.log(person.name); // dot notation
console.log(person["age"]); // bracket notation

let cricketer = {
  name: "Virat Kohli",
  age: 35,
  allies: ["Rohit", "Bumra", "Dhoni"],
  address: {
    country: "India",
    city: {
      name: "Delhi",
      pincode: 110001,
    },
  },
  sayHi: function () {
    console.log("Virat says - let's chase this target");
  },
  isCaptain: false,
};

console.log(cricketer.name);
console.log(cricketer.age);
console.log(cricketer.allies[1]);
console.log(cricketer.address.city.pincode);

cricketer.records = ["Fastest ODI century by Indian", "Most runs in T20"];
console.log(cricketer);

cricketer.sayHi();

delete cricketer.age;

console.log(cricketer.age);

cricketer.age;

/**
 * imperative - loop over the array and return an array with double the value
 * let ans = []
 * for(let i = 0; i < array.length; i++){
 * ans.push(arr[i] * 2)

 * }
return ans


let ans = arr.map(i=>i*2)
 */
