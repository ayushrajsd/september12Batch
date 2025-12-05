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

buy.apply(car, ["3000000", "2024"]);

Function.prototype.myApply = function (context, argsArray) {
  if (typeof this !== "function") {
    throw new Error("not callable");
  }

  if (!Array.isArray(argsArray)) {
    throw new TypeError("called on non-object");
  }

  context.temp = this;
  context.temp(...argsArray);
  delete context.temp;
};

buy.myApply(car, ["3000000", "2024"]);
