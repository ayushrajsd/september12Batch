function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "A" });
    }, 1000);
  });
}
function fetchPosts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Post 1", " Post 2"]);
    }, 1500);
  });
}
function unstableTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(["Network error"]);
    }, 700);
  });
}

// Promise.resolve(2)
Promise.all([fetchUser(), 2, "23", fetchPosts()])
  .then((result) => {
    // console.log(result[0]); // user data
    // console.log(result[1]); // posts data
    console.log("results ", result);
  })
  .catch((error) => {
    console.log("failed", error);
  });

// Promise.allSettled([fetchUser(), unstableTask(), fetchPosts()]).then(
//   console.log
// );

function fast() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Fast result");
    }, 500);
  });
}
function slow() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("slow result");
    }, 2000);
  });
}
function quickReject() {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject("Rejected quickly");
    }, 200);
  });
}

// Promise.any([quickReject()])
//   .then((result) => {
//     console.log("Winner: ", result);
//   })
//   .catch((error) => {
//     console.log("Error: ", error);
//   });
// Promise.race([slow(), quickReject()])
//   .then((result) => {
//     console.log("Winner: ", result);
//   })
//   .catch((error) => {
//     console.log("Error: ", error);
//   });
