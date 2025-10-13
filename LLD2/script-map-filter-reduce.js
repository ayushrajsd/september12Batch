const numbers = [1, 2, 3, 4, 5];

const squares = [];
for (let i = 0; i < numbers.length; i++) {
  squares.push(numbers[i] * numbers[i]);
}
// console.log(squares);

const results = numbers.map(function (num) {
  // what to do not now to do
  return num * num;
});

// console.log(results);

// function abc(num) {
//   return num * num;
// }

const radiuses = [1, 2, 3, 4]; // -> [12,234,123,345]

const areas = radiuses.map(function (radius) {
  return Math.PI * radius * radius;
});

const transaction = [1000, 30000, 4000, -898, 3800, -4500];
const inrToUsd = 83;

const amountInUSd = transaction.map(function (amount) {
  return amount / inrToUsd;
});

// console.log("usd array", amountInUSd);

const numbers2 = [1, 2, 5, 7, 8, 2, 6, 9, 13, 17];
const evenNumbers = [];

for (let i = 0; i < numbers2.length; i++) {
  if (numbers2[i] % 2 === 0) {
    evenNumbers.push(numbers2[i]);
  }
}

const evenNumbers2 = numbers2.filter(function (num) {
  return num % 2 === 0;
});

console.log(evenNumbers2);

const transactions = [1000, 30000, 4000, -898, 3800, -4500];
const positiveTransaction = transactions.filter(function (amount) {
  return amount > 0;
});
// console.log(positiveTransaction);

const numbers3 = [1, 2, 3, 4, 5];
let sum = 0;

// for (let i = 0; i < numbers3.length; i++) {
//   sum = sum + numbers3[i];
// }
// return sum;

const total = numbers3.reduce(function (accumalator, currentValue) {
  //0 3 ,3 6 10
  return accumalator + currentValue; // 1 3 6 10 15
}, 0);

console.log(total);

const numbers4 = [10, 45, 67, 32, 89, 21]; // max item from the array => 89

const max = numbers4.reduce(function (acc, curr) {
  // 10 ,10
  if (curr > acc) {
    return curr;
  } else {
    return acc;
  }
}, numbers4[0]);

console.log(max);
