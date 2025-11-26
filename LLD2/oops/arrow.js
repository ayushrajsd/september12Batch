// function add(a, b) {
//   return a + b;
// }

// const add2 = (a, b) => {
//   return a + b;
// };

// // const add3 = (a,b) => a + b

// // setTimeout(()=>{},100)

// // Array.map((item)=> item* item)

// const obj = {
//   value: "Scaler",
//   regularFunc: function () {
//     console.log("regular:", this.value);
//   },
//   arrowFunc: () => {
//     console.log("arrow:", this.value);
//   },
// };

// obj.regularFunc();
// obj.arrowFunc();

const person = {
  fName: "Sanjay",
  greet: function () {
    //  this -> person
    setTimeout(() => {
      console.log("Hello ", this.fName); // person
    }, 1000);
    setTimeout(function () {
      console.log("Hello ", this.fName);
    }, 2000);
  },
};

person.greet();
