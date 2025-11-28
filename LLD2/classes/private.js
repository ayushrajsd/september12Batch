class Coffee {
  static totalCoffeesMade = 0;
  #flavor;
  #size;
  #milkType;

  constructor(flavor, size, milkType) {
    this.#flavor = flavor;
    this.#size = size;
    this.#milkType = milkType;
    this.prop = "asda";
    Coffee.totalCoffeesMade++;
  }
  describe() {
    console.log(
      ` A ${this.#size} ${this.#flavor} coffee with ${this.#milkType} milk`
    );
  }
  getFlavor() {
    return this.#flavor;
  }
  setFlavor(newFlavor) {
    if (typeof newFlavor === "string" && newFlavor.trim() !== "") {
      this.#flavor = newFlavor;
    } else {
      console.log("invalid flavor");
    }
  }

  static showTotalOrders() {
    console.log(`Total coffees made: ${Coffee.totalCoffeesMade}`);
  }
}

const order1 = new Coffee("Cappuccino", "medium", "almond"); // order1 -> this
// console.log(order1.#flavor);
console.log(order1.prop);
// order1.#flavor = "latte";
order1.describe();
console.log(order1.getFlavor());
order1.setFlavor("Latte");
console.log(order1.getFlavor());
order1.setFlavor("");

// order1.#flavor;
