const numbers = [1, 2, 3, 4];
// const numbers = [];

Array.prototype.myReduce = function (callback, initialValue) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + "is not a functuin");
  }
  let accumulator;
  let startIndex;
  //   let accumulator = initialValue;
  if (arguments.length > 1) {
    accumulator = initialValue;
    startIndex = 0;
  } else {
    if (this.length === 0) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    accumulator = this[0];
    startIndex = 1;
  }
  for (let i = startIndex; i < this.length; i++) {
    if (i in this) {
      accumulator = callback(accumulator, this[i], i, this);
    }
  }
  return accumulator;
};

// const sum = numbers.myReduce((acc, curr) => acc + curr, 0);
const arr = [1, , 3];
const sum = arr.reduce((acc, curr) => acc + curr);
console.log(sum);

function abc(a, b, c, d) {
  console.log(arguments.length);
}
abc(1, 2);

// sum(a,b,c) ->  sum(1)(2)(3) // 6 -> currying
