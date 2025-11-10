// import the "fs" module
const fs = require("fs");

console.log("before reading file");

// // read data synchronously
// const data = fs.readFileSync("f1.txt", "utf8");

// console.log("file content:", data);

// read file asynchronouldy ( non-blocking)
// fs.readFile("f1.txt", "utf8", function (err, data) {
//   if (err) {
//     console.error("Error rading file", err);
//     return;
//   }
//   console.log("File1 content", data);
// });
// fs.readFile("f2.txt", "utf8", function (err, data) {
//   if (err) {
//     console.error("Error rading file", err);
//     return;
//   }
//   console.log("File2 content", data);
// });
// fs.readFile("f3.txt", "utf8", function (err, data) {
//   if (err) {
//     console.error("Error rading file", err);
//     return;
//   }
//   console.log("File3 content", data);
// });

// console.log("After reading file");

fs.readFile("f1.txt", "utf8", cb1);

function cb1(err, data) {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File 1 data", data);
  fs.readFile("f2.txt", "utf8", cb2);
}

function cb2(err, data) {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File2 data", data);
  fs.readFile("f3.txt", "utf8", cb3);
}

function cb3(err, data) {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File3 data", data);
}

console.log("after");
