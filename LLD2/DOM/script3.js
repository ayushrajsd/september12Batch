const removeAllBtn = document.querySelector("#removeAll");
// const ul = document.querySelector("ul");
// const allDeleteButtons = document.querySelectorAll(".delete_button");

// for (let i = 0; i < allDeleteButtons.length; i++) {
//   allDeleteButtons[i].addEventListener("click", function (e) {
//     // go to the target element and then delete the parent
//     e.target.parentElement.remove();
//   });
// }

// removeAllBtn.addEventListener("click", function () {
//   //   const allListItems = ul.querySelectorAll("li");
//   //   for (let i = 0; i < allListItems.length; i++) {
//   //     ul.removeChild(allListItems[i]);
//   //   }
//   ul.innerHTML = "";
// });

const liElements = document.getElementsByTagName("li");

removeAllBtn.addEventListener("click", function (e) {
  for (let i = liElements.length - 1; i >= 0; i--) {
    liElements[i].remove();
  }
});
