/**
 * Agenda:
 * Memory of JS datatypes
 * - Shallow and Deep copy
 * - truthy and falsy values
 * -
 *
 * Primitives - number, string, boolean, null, undefined, bigint, symbol , stack
 * Reference - objects, arrays, functions, maps, sets, {} , [], fn
 */

let a = 50;
let b = 50;
b = 12;

let obj1 = { name: "John", age: 20 };
let obj2 = obj1;

obj1.age = 25;

console.log(obj2.age);
obj2.name = "Jane";
// console.log(obj1.name);
// console.log(obj2 === obj1);
// console.log(obj2 === {name:"John",age:20});

const zoo = {
  name: "Amazing Zoo",
  location: "Melbourne, Australia",
  animals: [
    { species: "Lion", favoriteTreat: "Meat" },
    { species: "Panda", favoriteTreat: "Fruits" },
  ],
};
// const newObj = {}
// for(let key of zoo){
//     newObj[key] = zoo[key]

// }

const shallowCopyZoo = { ...zoo }; // shallow copy creates a clone shallowCopy.animals = zoo.animals
// shallowCopyZoo.name = "Wonderland";

console.log(shallowCopyZoo === zoo); // false
console.log(shallowCopyZoo); // false

console.log(zoo.animals === shallowCopyZoo.animals); // true
// console.log(zoo.animals === shallowCopyZoo.animals); // true

shallowCopyZoo.location = "Kerala, India";
console.log(zoo.location);

shallowCopyZoo.animals[1].favoriteTreat = "Fruits";
console.log(zoo.animals[1]);
