const car = {
  name: "Mercedes",
  color: "White",
};

function buy(price, year) {
  console.log(
    "I bought a " +
      this.color +
      " " +
      this.name +
      " for " +
      price +
      " made in " +
      year
  );
}

const fn = buy.bind(car, "3000000"); // remember what my original fn is
// fn("2023"); // step 2 call that original fn

// buy("300000",2020)
// currying -> sum(1,2,3) -> sum(1)(2)(3)

Function.prototype.myBind = function (context, ...boundArgs) {
  if (typeof this !== "function") {
    throw new Error("not callable");
  }
  const original = this; // this points to funciton that called myBind
  return function (...callTimeArgs) {
    // const arr = boundArgs.concat(callTimeArgs);
    original.apply(context, [...boundArgs, ...callTimeArgs]);
  };
};

const newFn = buy.myBind(car, "3000000");
newFn("2024"); // buy("300000",2024) this -> car
