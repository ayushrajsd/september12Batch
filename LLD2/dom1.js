// SELECTION
//   const btn = document.getElementById("btn-1");
const btn = document.querySelector("#btn-1");
//   const btn2 = document.querySelector(".btn-2");
//   const btn3 = document.querySelector("div > p");
//   const btn4 = document.querySelector("button")
console.log(btn);

/** LISTENING */
btn.addEventListener("click", function () {
  console.log("Button Clicked");
  // Creeate a new element
  const divElem = document.createElement("div");

  // set the text
  divElem.innerText = "Hello";

  // select the body and append to it
  const body = document.querySelector("body");
  body.appendChild(divElem);
});
