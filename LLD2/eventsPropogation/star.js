const stars = document.querySelectorAll(".star");

const ratingDisplay = document.getElementById("ratingValue");

function updateStars(selectedValue) {
  // 4
  stars.forEach(function (star) {
    const starValue = star.getAttribute("data-value");
    if (starValue <= selectedValue) {
      star.classList.add("filled");
    } else {
      star.classList.remove("filled");
    }
  });
}

stars.forEach(function (star) {
  star.addEventListener("click", function () {
    const selectedValue = star.getAttribute("data-value");
    updateStars(selectedValue);
    ratingDisplay.textContent = selectedValue;
  });
});

// ratingContainer.addEventListener("click", functiom(){
//     // determine which star was clicked -> e.target
//     // get the data attribute
// })
