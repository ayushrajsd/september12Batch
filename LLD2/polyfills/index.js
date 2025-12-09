const arr = [1, 2, 3];

// console.log(doubled);

Array.prototype.myMap = function (callback, thisArg) {
  // logic
  //   console.log(this);
  if (typeof callback !== "function") {
    throw new TypeError(callback + "is not a function");
  }

  const result = new Array(this.length);
  for (let i = 0; i < this.length; i++) {
    // arr[1] -> undefined
    if (i in this) {
      result[i] = callback.call(thisArg, this[i], i, this);
    }
    // if i is not present, do nothing - slot will remain empty
  }
  return result;
};

[1, 2, 3].myMap((x) => x * 2);
const doubled = arr.map((num, index, arr) => num * 2);
// console.log(doubled);

const doubled2 = arr.myMap((num, index, arr) => num * 2);

console.log(doubled2);

// [1, 2, 3].map("not a fucntion");

/**
 *
 * sparse arrays
 */
const arr2 = [1, , 3];
const result = arr2.map((x) => x * 2);
const result2 = arr2.myMap((x) => x * 2);
console.log(result2);
console.log(result);
console.log("----------");
console.log(0 in arr2);
console.log(1 in arr2);
console.log(2 in arr2);

const user = { name: "asd" };
console.log("name" in user);
console.log("age" in user);

const multiplier = { factor: 10 };
const numbers = [1, 2, 3];

const result3 = numbers.map(function (num) {
  return num * this.factor;
}, multiplier);

// result3 -> 10,20,30
