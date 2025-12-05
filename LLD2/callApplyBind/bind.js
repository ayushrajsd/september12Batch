// function print() {
//   console.log("asd");
// }

const person1 = {
  name: "Kabil",
  age: 35,
  introduce: function () {
    // xA123
    console.log("this", this);
    console.log(`My name is ${this.name}`);
  },
  print: function () {
    console.log("asdasd");
  },
};

const debounced = debouce(person1.print);

// person1.introduce(); // xA123() , this - person1
// person1.introduce.call(person2);

// const fn = person1.introduce; // fn-> xA123
// fn(); //   xA123()
const fixed = person1.introduce.bind(person1);
// fixed();

const button = document.getElementById("btn");
button.addEventListener("click", fixed);

// const person = {
//   name: "Aarav",
//   show: function () {
//     console.log(this.name);
//   },
// };

// const ref = person.show;
// // ref(); //

// function announce() {
//   console.log("Launching " + this.product);
// }

// const app1 = { product: "ChatFlow" };
// const app2 = { product: "CodeSync" };

// // Step 1
// announce.call(app1); // Chatflow

// // Step 2
// const f = announce.bind(app2); // this -> app2

// // Step 3
// f.call(app1); // this -> app2
