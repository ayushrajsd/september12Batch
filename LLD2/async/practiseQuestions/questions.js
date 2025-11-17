// // Q1 Simulate a Delayed Task (Using setTimeout & Callbacks)
// // Create a function fakeDownload(url, callback) that simulates downloading a file from a URL. The function should:

// // Log "Downloading from [url]...".
// // Wait 2 seconds.
// // Call the callback function with "Download complete!".
// // Starter Code:

// // Task:
// // Create a function fakeDownload(url, callback) that simulates downloading a file from a URL. The function should:
// //     Log "Downloading from [url]...".
// //     Wait 2 seconds.
// //     Call the callback function with "Download complete!".

// function fakeDownload(url, callback) {
//   // Write code here...
// }

// // Usage:
// fakeDownload("https://example.com/file", (message) => {
//   console.log(message); // Expected Output: "Download complete!" (after 2 sec)
// });

// // q2. convert callback to a promise

// // Usage:
// fakeDownload("https://example.com/file").then((message) =>
//   console.log(message)
// ); // Expected Output: "Download complete!" (after 2 sec)

// /***
//    * Q3
//    * Fetch a random cat fact from "https://catfact.ninja/fact" and log it.
// Use promise chaining to handle the fetch request. Log any errors that occur.

// Starter Code:

// // Task:
// // Fetch a random cat fact from "https://catfact.ninja/fact" and log it.
// // Use promise chaining to handle the fetch request. Log any errors that occur.

// function fetchCatFact() {
//   // Write code here...
// }

// // Usage:
// fetchCatFact();
//    */

// // Q1 Fetch and Display User Data (async/await & Error Handling)
// // Create a random user generator using the "https://randomuser.me/api/" API.
// // When a user clicks the "Get Random User" button, fetch user details and display them on the page, including:

// // Full Name
// // Email
// // Country
// // Handle API errors and provide appropriate feedback if the fetch fails.

// // HTML Starter code:

// // <!DOCTYPE html>
// // <html lang="en">
// //   <head>
// //     <title>Random User Generator</title>
// //     <style>
// //       #userCard {
// //         border: 1px solid #ccc;
// //         padding: 10px;
// //         width: 250px;
// //         text-align: center;
// //         display: none;
// //         margin-top: 10px;
// //       }
// //     </style>
// //   </head>
// //   <body>
// //     <button id="fetchUserBtn">Get Random User</button>
// //     <div id="userCard">
// //       <p id="userName"></p>
// //       <p id="userEmail"></p>
// //       <p id="userCountry"></p>
// //     </div>

// //     <script src="./script.js"></script>
// //   </body>
// // </html>

// // JS Starter Code:

// // Task
// // Create a random user generator using the "https://randomuser.me/api/" API.
// // When a user clicks the "Get Random User" button, fetch user details and display them on the page, including:
// //     Full Name
// //     Email
// //     Country
// // Handle API errors and provide appropriate feedback if the fetch fails.

// async function fetchRandomUser() {
//   // Write code here...
// }
const body = document.querySelector("body");

async function fetchDogs() {
  try {
    const urls = [
      "https://dog.ceo/api/breeds/image/random1",
      "https://dog.ceo/api/breeds/image/random2",
      "https://dog.ceo/api/breeds/image/random3",
    ];
    data = [undefined, dog2, undefined];

    const responses = await Promise.any(urls.map((url) => fetch(url))); // [Promise1, promse2,pr3]
    console.log("responses");
    console.log(responses);
    const data = await Promise.all(responses.map((res) => res.json()));
    // const response = await fetch("https://dog.ceo/api/breeds/image/random");
    // const data = await response.json();
    console.log("parsing");
    console.log(data);
    for (let dog of data) {
      const img = document.createElement("img");
      img.src = dog.message;
      body.appendChild(img);
    }

    // Write code here...
  } catch (error) {
    alert("Error fetching dog images: " + error.message);
  }
}

fetchDogs();
