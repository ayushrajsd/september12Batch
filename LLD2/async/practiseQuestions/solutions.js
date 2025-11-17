// // function fakeDownload(url, callback) {
// //   // Write code here...
// //   // step 1 - log the msg
// //   console.log(`"Downloading from ${url}...".`);
// //   // step 2 - delay for 2s
// //   setTimeout(() => {
// //     callback("Download complete!");
// //   }, 2000);
// //   // step 3 - call the callback
// // }

// // // Usage:
// // fakeDownload("https://example.com/file", (message) => {
// //   console.log(message);
// // });

// /***
//  * Q2- converting callback to promise
//  */
// // function fakeDownload(url) {
// //   // Write code here...
// //   // step 1 - log the msg
// //   console.log(`"Downloading from ${url}...".`);
// //   // step 2 - delay for 2s
// //   setTimeout(() => {
// //     // callback("Download complete!");
// //   }, 2000);
// //   // step 3 - call the callback
// // }

// function fakeDownload(url) {
//   return new Promise((resolve) => {
//     console.log(`"Downloading from ${url}...".`);
//     setTimeout(() => {
//       resolve("Download complete!");
//     }, 2000);
//   });
// }

// // fakeDownload("https://example.com/file").then((message) =>
// //   console.log(message)
// // ); // Expected Output: "Download complete!" (after 2 sec)

// function fetchCatFact() {
//   //   const response = await fetch("https://catfact.ninja/fact")
//   //   const data = await response.json()

//   fetch("https://catfact.ninja/fact")
//     .then((response) => {
//       console.log(response);
//       return response.json();
//     }) // parsing the response to a js obkject
//     .then((data) => console.log("cat fact", data))
//     .catch((error) => console.error("error fetching data", error));
// }

// fetchCatFact();

async function fetchRandomUser() {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    console.log(data);
    const user = data.results[0];
    document.getElementById(
      "userName"
    ).innerText = `Name: ${user.name.first} ${user.name.last}`;
    document.getElementById("userEmail").innerText = `Email: ${user.email}`;
    document.getElementById(
      "userCountry"
    ).innerText = `Country: ${user.location.country}`;
    document.getElementById("userCard").style.display = "block";
  } catch (err) {
    alert("error fetching user:", err.message);
  }
}

document
  .getElementById("fetchUserBtn")
  .addEventListener("click", fetchRandomUser);
