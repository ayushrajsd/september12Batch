function limitCalls(fn, n) {
  let count = 0; // this variable lives inside the closure

  return function () {
    if (count < n) {
      count++;
      return fn(); // call the original function
    } else {
      return "No more calls allowed";
    }
  };
}

// Example usage
function greet() {
  return "Hello!";
}

const limitedGreet = limitCalls(greet, 3);

console.log(limitedGreet()); // "Hello!"
console.log(limitedGreet()); // "Hello!"
console.log(limitedGreet()); // "Hello!"
console.log(limitedGreet()); // "No more calls allowed"
