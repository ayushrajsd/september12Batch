// Array.isArray()

// const arr = [];
// const newArr = arr.concat([1, 2]);
// console.log(newArr);

function flatten(arr) {
  return arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      // recursive logic
      //   return acc.push(...flatten(item));
      return acc.concat(flatten(item));
    } else {
      // push it in array
      //   return acc.push(item);
      return acc.concat(item);
    }
  }, []);
}

const nestedArr = [1, [2, 3], [4, [5, 6]]]; // -> logic -> [1,2,3,4,5,6]
console.log(flatten(nestedArr));

const arr1 = [1, 2];
const arr2 = [3, 4];
// const res = arr1.concat(arr2);
const res = arr1.push(...arr2);
console.log(res);
