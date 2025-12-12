/**
 * 1. object - numbers, strings, booleans, arrays, objects
 * 2 JSON has limitation: function, Dates, undefined
 *
 */

const zoo = {
  name: "Amazing Zoo",
  location: "Melbourne, Australia",
  animals: [
    { species: "Lion", favoriteTreat: "Meat" },
    { species: "Panda", favoriteTreat: "Leaves" },
  ],
};
// console.log(JSON.stringify(zoo));
("'name':'azamixg,'animals':'[{");
("aSASDASDASDASDASDSAD{ASDASD],{:}ASDASD;");

const deepCopyZoo = JSON.parse(JSON.stringify(zoo));
deepCopyZoo.animals[1].favoriteTreat = "Fruits";
// console.log(deepCopyZoo.animals === zoo.animals);
// console.log(zoo.animals[1].favoriteTreat);

/**
 *
 * 1. primitives -> return it directly
 *
 * typeof value !== "object or value is null" -> return
 *
 *
 * 2. array -> [copy each element recursively]
 * [1,2,[12,3224],{a:"12321"}]
 * 3. object -> {copy recursively}
 * 4. function -> return a new function
 *
 *
 */
const obj = {
  a: "asd",
  items: [1, () => {}],
};

const obj2 = {
  a: "asd",
  items: [1, () => {}],
};
// obj.items[1]() -> fn invocation

function deepClone(obj) {
  //  ["rading,"cycling]
  // obj = fn
  if (obj === null || typeof obj !== "object") {
    // handling null and numbers, string, boolean, undefined
    // primitives
    return obj;
  }
  if (Array.isArray(obj)) {
    const result = [];
    for (let i = 0; i < obj.length; i++) {
      result[i] = deepClone(obj[i]);
    }
    return result;
  }
  if (typeof obj === "function") {
    return function (...args) {
      obj.apply(this, args);
    };
    // return obj.bind(this);
  }
  let result = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key]);
    }
  }
  return result;
}

const animal = { type: "Mammal" };
const lion = Object.create(animal); // __proto__ -> animal
lion.name = "Simba";
lion.location = "Africa";
console.log(lion.name);
console.log(lion.type);

// for (key in lion) {
//   //   if (lion.hasOwnProperty(key)) {
//   console.log("obj key", key);
//   //   }
// }

const original = {
  name: "Alice",
  details: { age: 30, hobbies: ["reading", "cycling"] },
  greet() {
    console.log(`hello, my name is ${this.name}`);
  },
};

const copy = deepClone(original);
result = {
  name: "Alice",
  details: { age: 30, hobbies: ["reading", "cycling"] },
  greet: function (...args) {
    obj.apply(this, args);
  },
  animal: lion,
};

copy.details.age = 25;
copy.name = "Bob";
console.log(copy === original);
copy.greet();
console.log(original.details.age);

// JSON.parse - "{asdasd:"asd,'items':[asdasd,{asdasd}]}"
