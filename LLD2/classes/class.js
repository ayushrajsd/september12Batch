class Coffee {
  static totalCoffeesMade = 0;
  constructor(flavor, size, milkType) {
    this.flavor = flavor;
    this.size = size;
    this.milkType = milkType;
    Coffee.totalCoffeesMade++;
  }
  describe() {
    console.log(
      ` A ${this.size} ${this.flavor} coffee with ${this.milkType} milk`
    );
  }

  static showTotalOrders() {
    console.log(`Total coffees made: ${Coffee.totalCoffeesMade}`);
  }
}

const order1 = new Coffee("Cappuccino", "medium", "almond"); // order1 -> this
const order2 = new Coffee("Latte", "large", "cow"); // order1 -> this
// console.log(Coffee.showTotalOrders());

// order1.describe();

// console.log(typeof Coffee);

class IcedCoffee extends Coffee {
  constructor(flavor, size, milkType, syrupType) {
    // code
    super(flavor, size, milkType); // calling the parent constructor
    this.syrupType = syrupType;
  }
  //   describe() {
  //     super.describe(); // call parent method describe
  //     console.log(` This coffee includes ${this.syrupType} syrup`);
  //   }
  describeSyrup() {
    suoper.describe();
    console.log(
      ` This coffee includes ${this.syrupType} syrup and ${this.flavor} with ${this.milkType}`
    );
  }
}

const specialOrder = new IcedCoffee("Mocha", "large", "almond", "hazlenut");
// specialOrder.describeSyrup();
console.log(Coffee.showTotalOrders());
