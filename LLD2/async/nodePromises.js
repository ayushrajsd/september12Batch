const { log } = require("console");
const fs = require("fs");

// let filePromise = fs.promises.readFile("f1.txt", "utf8");
// let file2Promise = fs.promises.readFile("f2.txt", "utf8");
// let file3Promise = fs.promises.readFile("f3.txt", "utf8");

// filePromise
//   .then(function (data) {
//     console.log("this is the file data ->", data);
//   })
//   .catch(function (err) {
//     console.log("error reading file ->", err);
//   });

function handleSuccess(data) {
  console.log("file data", data);
}

function handleError(err) {
  console.log("Error", err);
}

// filePromise.then(handleSuccess).catch(handleError);
// file2Promise.then(handleSuccess).catch(handleError);
// file3Promise.then(handleSuccess).catch(handleError);
// file2Promise.then(function (data) {
//   console.log("File 2->", data);
// });
// file3Promise.then(function (data) {
//   console.log("File 3->", data);
// });

// function logA() {
//   console.log("A");
// }
// function logB() {
//   console.log("B");
// }
// function logC() {
//   console.log("C");
// }
// function logD() {
//   console.log("D");
// }

// logA(); // sync A
// setTimeout(logB, 0); // macro queue
// Promise.resolve().then(logC); // micro
// logD(); // sync D

fs.promises
  .readFile("f1.txt", "utf8")
  .then(function (data) {
    console.log("File 1 data ->", data);
    return fs.promises.readFile("f2.txt", "utf8");
  })
  .then(function (data2) {
    console.log("File 2 data ->", data2);
    return fs.promises.readFile("f3.txt");
  })
  .then(function (data3) {
    console.log("File 3 data ", data3);
  })
  .catch(function (err) {
    console.log("error reading file", err);
  });
