// let message = "Hello from the outside";
// var a = 10;

// function greet() {
//   console.log(message);
// }

// greet();

// function outer() {
//   let food = "Pizza";
//   function inner() {
//     console.log("I love " + food);
//   }
//   inner();
// }
// outer();

// const city = "Pune";
// var state = "Maharashtra";
// function outer() {
//   let area = "Kothrud";
//   function inner() {
//     let street = "MG Road";
//     console.log(street, area, city, state);
//   }
//   inner();
// }

// outer();

// function outer() {
//   function inner() {
//     console.log(unknownVar);
//   }
//   inner();
// }
// outer();

// function parent() {
//   let a = 10;
//   function child() {
//     console.log("from inner", a);
//     // return 10;
//   }
//   return child;
//   //   return child;
// }
// const abc = parent(); // child
// console.log(abc()); // child()

// function parent() {
//   let a = 5;
//   function child() {
//     var b = 7;
//     function grandChild() {
//       console.log(a + b);
//     }
//     return grandChild;
//   }
//   return child;
// }

// let fn1 = parent(); // child function
// const fn2 = fn1(); // grandChild
// fn2();

// data privacy
function secretCounter() {
  let count = 0;
  return {
    increment: function () {
      count++;
      console.log(count);
    },
    reset: function () {
      count = 0;
      console.log("counter reset to ", count);
    },
  };
}

let counter = secretCounter(); //
// // console.log(counter);
// counter.increment();
// counter.increment();
// counter.increment();
// counter.reset();

// factory function

function multiplier(factor) {
  return function (num) {
    return num * factor;
  };
}

let double = multiplier(2); // inner function with factor set as 2
let triple = multiplier(3); // inner function with factor set as 3

console.log(double(5)); // 12
console.log(triple(5)); // 15
