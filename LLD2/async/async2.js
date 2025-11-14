function placeOrder(drink) {
  return new Promise((resolve, reject) => {
    if (drink == "coffee") {
      resolve("Order placed for coffee");
    } else {
      reject("Sorry, we only serve coffee");
    }
  });
}

// placeOrder("tea")
//   .then((orderStatus) => console.log(orderStatus))
//   .catch((error) => console.log(error));

function processOrder(order) {
  return new Promise((resolve, reject) => {
    resolve(`${order} -> processed and served`);
  });
}

function generateBill(processOrder) {
  return new Promise((resolve) => {
    resolve(`${processOrder} -> bill generated ( rs 200)`);
  });
}

// placeOrder("tea")
//   .then((order) => {
//     console.log(order);
//     return processOrder(order);
//   })
//   .then((processOrder) => {
//     console.log(processOrder);
//     return generateBill(processOrder);
//   })
//   .then((finalBill) => console.log(finalBill))
//   .catch((error) => console.log(error));

async function serverOrder(drink) {
  try {
    const order = await placeOrder(drink);
    console.log(order);

    const orderStatus = await processOrder(order);
    console.log(orderStatus);

    const bill = await generateBill(orderStatus);
    console.log(bill);
  } catch (err) {
    console.log("in the catch block", err);
  }
}

serverOrder("tea");

function fetchUser() {
  return new Promise((resolve) => setTimeout(() => resolve("user data"), 2000));
}

function fetchAnalytics() {
  return new Promise((resolve) => setTimeout(() => resolve("user data"), 3000));
}

function fetchActivity() {
  return new Promise((resolve) => setTimeout(() => resolve("user data"), 1500));
}

async function loadDashboardFast() {
  try {
    const user = fetchUser();
    const analytics = fetchAnalytics();
    const activity = fetchActivity();

    const [userObj, analYticsObj, activityObj] = await Promise.all([
      user,
      analytics,
      activity,
    ]);
  } catch (err) {}
}

console.log("X");

setTimeout(() => console.log("Y"), 0);

async function processData() {
  console.log("Z");
  const data = await Promise.resolve("P");
  console.log(data);
  console.log("Q");
}

processData();

console.log("R");
