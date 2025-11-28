function Coffee(flavor, size, milkType) {
  // constructor function
  this.flavor = flavor;
  this.size = size;
  this.milkType = milkType;

  this.describe = function () {
    console.log(
      ` A ${this.size} ${this.flavor} coffee with ${this.milkType} milk`
    );
  };
}

const order1 = new Coffee("Cappuccino", "medium", "almond"); // order1 -> this
const order2 = new Coffee("Latte", "large", "cow"); // order1 -> this
/**
 * 1. new empty obj {}
 * 2. this -> {}
 * 3. this gets all property and methods
 * 4. returned this
 */

console.log(order1);
order1.describe();
order2.describe();

// order1.describe = function(){
//     alert()
// }

// function greetPeople(){
//     console.log("asdasd")
// }

// const obj = {
//     name:"asd",
//     greet: greetPeople
// }
// const obj2 = {
//     name:"asd",
//     greet: greetPeople
// }

// obj.greet()
