// Q1 Simulate a Delayed Task (Using setTimeout & Callbacks)
// Create a function fakeDownload(url, callback) that simulates downloading a file from a URL. The function should:

// Log "Downloading from [url]...".
// Wait 2 seconds.
// Call the callback function with "Download complete!".
// Starter Code:

// Task:
// Create a function fakeDownload(url, callback) that simulates downloading a file from a URL. The function should:
//     Log "Downloading from [url]...".
//     Wait 2 seconds.
//     Call the callback function with "Download complete!".

function fakeDownload(url, callback) {
  // Write code here...
}

// Usage:
fakeDownload("https://example.com/file", (message) => {
  console.log(message); // Expected Output: "Download complete!" (after 2 sec)
});

// q2. convert callback to a promise

// Usage:
fakeDownload("https://example.com/file").then((message) =>
  console.log(message)
); // Expected Output: "Download complete!" (after 2 sec)

/***
   * Q3
   * Fetch a random cat fact from "https://catfact.ninja/fact" and log it.
Use promise chaining to handle the fetch request. Log any errors that occur.

Starter Code:

// Task:
// Fetch a random cat fact from "https://catfact.ninja/fact" and log it.
// Use promise chaining to handle the fetch request. Log any errors that occur.

function fetchCatFact() {
  // Write code here...
}

// Usage:
fetchCatFact();
   */
