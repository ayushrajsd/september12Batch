// const promise = new Promise(function(resolve, reject){ // function -> executor
//     // some async work will go here

// })

// let washDishes = new Promise(function (resolve, reject) {
// //   let isClean = false; // some async operation -> 5s
//   if (isClean) {
//     // success
//     resolve("Dishes are clean");
//   } else {
//     // error
//     reject("Could not clean the Dishes");
//   }
// });
// console.log(washDishes);

// washDishes
//   .then(function (message) {
//     console.log("Succes:", message);
//   })
//   .catch(function (error) {
//     console.log("Failire:", error);
//   });

// let chaiPromise = new Promise(function (resolve, reject) {
//   console.log("Order placed. Waiting for chai ..."); // sync

//   setTimeout(function () {
//     // arrow function ()=>{}
//     let isShopOpen = Math.random() > 0.5;
//     if (isShopOpen) {
//       resolve("kamal = Chai is ready");
//       //   console.log("kamal = Chai is ready");
//     } else {
//       reject("Kamal = Stall was closed - no chai ready");
//       //   console.log("Kamal = Stall was closed - no chai ready");
//     }
//   }, 2000);
// });

// console.log("You continue coding while the chai is being made");

// chaiPromise
//   .then(function (msg) {
//     console.log("Success:", msg);
//   })
//   .catch(function (err) {
//     console.log("Failure:", err);
//   })
//   .finally(function () {
//     console.log("done waiting - back to work!");
//   });

// console.log("last line");

function makeChai() {
  return new Promise(function (resolve, reject) {
    console.log("starting to make chai ..."); // sync

    setTimeout(function () {
      // arrow function ()=>{}
      let isShopOpen = Math.random() > 0.3; // 70%
      if (isShopOpen) {
        resolve("Chai is ready");
        //   console.log("kamal = Chai is ready");
      } else {
        reject("Gas ran out - can't make chai");
        //   console.log("Kamal = Stall was closed - no chai ready");
      }
    }, 2000);
  });
}

function toastBread() {
  return new Promise(function (resolve, reject) {
    console.log("toasting bread");
    setTimeout(function () {
      // arrow function ()=>{}
      let isBreadAvailable = Math.random() > 0.2; // 70%
      if (isBreadAvailable) {
        resolve("Bread Toasted");
      } else {
        reject("No Bread left");
      }
    }, 1500);
  });
}

function serveBreakFast() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Breakfast served with love!");
    }, 1000);
  });
}

makeChai() // rturns a promse
  .then(function (msg) {
    console.log("Chai then block", msg);
    return toastBread(); // returns a new promise
  })
  .then(function (toastMesage) {
    console.log("toast then block", toastMesage);
    // console.log("Breakfast served - chai and toast");
    return serveBreakFast();
  })
  .then(function (msg) {
    console.log(msg);
  })
  .catch(function (err) {
    console.log("Something went wrong", err);
  })
  .finally(function () {
    console.log("Morning routine complete");
  });
