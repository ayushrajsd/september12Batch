// // /******
// //  *
// //  * Async and Await
// //  *
// //  * 1. arrow function - 15 examples of arrow function
// //  * function abc(asd){
// //  * console.log("asdasd")
// //  * return 12
// //  * }
// //  *
// //  * const abc = () =>
// //  *
// //  * 2. Promise.all, Promise.any, race
// //  *
// //  * Agenda:
// //  * a. async and await
// //  * b. what happens when we make a function as async
// //  * c. await
// //  * d. error handling ->
// //  *
// //  * getUser()
// //  * .then(function(user){
// //  * return getPosts(user.id)
// //  * })
// //  * .then(function(posts){
// //  * return getComments(posts[0].id)
// //  * })
// //  * .then(function(comments){
// //  * // some loginc with comments
// //  * })
// //  * .catch(function(error){
// //  * // handle error
// //  * })
// //  *
// //  *
// //  * async -> marks a function to always return a promise
// //  * consume the promise with the await
// //  */

//  const user = await getUser(); // get the user data
// const post = await getPosts(user.id)
// const comments = await getComments(posts[0].id)

// // async function abc() {
// //   return 10; // Promise {10}
// // }

// // async function fetchData() {
// //   return "data";
// // }

// // const result = fetchData();
// // console.log(result);

// // fetchData().then(function (res) {
// //   console.log(res);
// // });

// // fetchData().then((res) => console.log(res));

// // const p = new Promise((resolve) => {
// //   resolve("Inner Promise Resolved");
// // });

// async function fetchData2() {
//   return p;
// }

// // console.log(
// //   fetchData2().then(function (data) {
// //     console.log(data);
// //   })
// // );

// const p = new Promise((resolve) => {
//   setTimeout(function () {
//     resolve("Inner Promise Resolved");
//   }, 5000);
// });

// async function handlePromise() {
//   console.log("before await");
//   const value = await p;
//   //   const value2 = await p2;
//   //   const value3 = await p3;
//   //   const value4 = await p4;
//   //   const value5 = await p5;
//   console.log("after await");
//   console.log("value", value);
// }

// handlePromise().then(function (value) {
//   console.log("after await");
//   console.log("value", value);
// });
// .then()
// .then()

// handlePromise();

// const p1 = new Promise((resolve) =>
//   setTimeout(() => resolve("First done"), 3000)
// );
console.time("start");
const p1 = new Promise(function (resolve) {
  console.log("start");
  setTimeout(function () {
    resolve("inside set timeout");
  }, 3000);
});
const p2 = new Promise((resolve) =>
  setTimeout(() => resolve("Second done"), 1000)
);

async function test() {
  console.log("Start");
  const val1 = await p1; // 3s   , 1s has passed
  console.log(val1);
  const val2 = await p2; // 1s
  console.log(val2);
  console.log("End");
  console.timeEnd("start");
}

test();

console.log("after the test function");

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
