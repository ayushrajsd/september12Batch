const numbers = [1, 2, 3, 4, 5];

Array.prototype.myFilter = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + "is not a function");
  }

  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      const shouldKeep = callback.call(thisArg, this[i], i, this);
      if (shouldKeep) {
        result.push(this[i]);
      }
    }
  }
  return result;
};

const evens = numbers.myFilter((num) => num % 2 === 0);
console.log(evens);

const arr = [10, , 20, , 30];
console.log(arr.length);
const result = arr.myFilter((x) => x > 0);
console.log(result);
