const person1 = {
  name: "Kabil",
  age: 35,
  printNameAndAge: function (location, hobby) {
    // console.log("this", this);
    console.log(
      `My name is ${this.name} and I am ${this.age} years old and I live in ${location} and my hobby is ${hobby}`
    );
  },
};

// person1.printNameAndAge("Tamul Nadu", "cricket"); // mrthod invocation

const person2 = {
  name: "Sanjay",
  age: 24,
};

// person2.printNameAndAge();
// person1.printNameAndAge.call(person2, "Maharashtra", "dancing"); // call helps decide the value of this inside function
// person1.printNameAndAge.apply(person2, ["Maharashtra", "dancing"]); // call helps decide the value of this inside function

/**
 *
 * call(thisValue, arg1, arg2, arg3)
 * apply(thisValue, [arg1, arg2, arg3])
 *
 */

const arr = [3, 4, 5, 6, 7, 8];
// console.log(Math.max(arr));
// // // console.log(Math.max())
// // console.log(...arr);
// console.log(Math.max(3, 4, 5, 6, 7, 8)); // 8
// console.log(Math.max.call(null, ...arr));
// console.log(Math.max.apply(null, arr));
