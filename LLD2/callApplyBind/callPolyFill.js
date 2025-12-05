// fn.call(obj, arg1, arg2)

const car = {
  name: "Mercedes",
  color: "White",
};

function buy(price) {
  console.log("I bought a " + this.color + " " + this.name + " for " + price);
}

// obj.fn -> this -> obj

car.temp = buy;
// car.temp(3000000);

// print.myCall(person, "cricket")
// buy.myCall(car, "300000")

Function.prototype.myCall = function (context, ...args) {
  // args ->  [3000000, "Asd",3]
  // args -> array of params
  if (typeof this !== "function") {
    throw new Error("Not callabale");
  }
  /**
   * const obj = {}
   * Function.prototype.myCall.call(obj)
   */

  context.temp = this; // this -> always points to function invoking myCall method
  context.temp(...args);
  delete context.temp;
};

buy.myCall(car, 3000000);

// const arr = [1, 2, 3, 4];
// console.log(...arr);
