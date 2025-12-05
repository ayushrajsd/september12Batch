function show() {
  console.log(this);
}

// const obj = { label: "Object", fn: show };

// obj.fn(); // this = obj; method invocation
// show(); // regular invocation

const user = {
  name: "Chandana",
  greet() {
    console.log("Helloasdasd", this.name);
  },
};

// user.greet(); // "Hello, Chandana"
const ref = user.greet;
console.log(ref === user.greet);
// ref(); // Hello, undefined

function runLater(fn) {
  // passing the ref of user.greet
  fn(); // callback -> user.greet.call(user)
}

// runLater(user.greet);
// runLater(() => user.greet.call(user));
// runLater(() => user.greet());

const person = {
  name: "Kabil",
  say() {
    console.log(this.name);
  },
};
// [1, 2, 3].forEach(person.say);

// callback(element)

const obj = {
  fName: "Pranav",
  say() {
    console.log(this);
  },
};

// obj.say(); // method invopcation

const fn = user.greet.bind(user);
fn();

document.getElementById("btn").addEventListener("click", fn); // button.onClick()

/**
 * fixing with call, apply and bind
 */

// user.greet();
// user.greet.call(user);
// user.greet.call(person);
