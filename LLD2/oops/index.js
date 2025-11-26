const student = {
  val: "Ritik",
  introduce: function () {
    console.log(this); // student
    console.log("Hi, I am", this.val);
  },
};

student.introduce();

function Person(value) {
  this.value = value;
}

function person() {
  asdasdasd;
}

const person = new Person("Sanjay");
("use strict");

console.log("Scenario 1");
console.log(this); // module export object

console.log("Scenario 2");
function fnGlobal() {
  console.log(this);
  //   console.log("global object in node", globalThis);
}

fnGlobal();

console.log("Scenario 3");
const obj = {
  val: "obhect",
  fn: function () {
    console.log(this);
  },
};

obj.fn(); // method invocation -> this: object

console.log("Scenario 4");
const obj2 = {
  fn: function () {
    console.log("1", this);
    function nestedFn() {
      console.log("2", this);
    }
    nestedFn(); // normal fn invocation
  },
};

obj2.fn(); // method invocaation

// function nestedFn() {
//     console.log("2", this); // global
//   };
//   nestedFn(); // normal fn invocation

function greet() {
  console.log("Hello from ", this.val);
}

const p1 = {
  val: "Chandana",
  hello: greet,
};
const p2 = {
  val: "Sujatha",
  hello: greet,
};

p1.hello();
p2.hello();
