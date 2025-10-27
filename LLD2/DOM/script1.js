const select = document.querySelector("select");
const allPrices = document.querySelectorAll(".price");
console.log(allPrices);

select.addEventListener("change", function () {
  console.log("Drop down changed", select.value);
  const selected = select.value;
  for (let p of allPrices) {
    // console.log(p.getAttribute("data-category"));
    const category = p.getAttribute("data-category");
    if (selected == "none" || selected === category) {
      // keep the movie card
      p.parentElement.style.display = "flex";
    } else {
      // remove that movie card
      p.parentElement.style.display = "none";
    }
  }
});

/**
 *
 *  allMovies - document.querySelectorAll(".movies")
 *
 * loop over the movie array
 * for every movie -> get the the element with class as price
 * movie.querySelector(".price")
 *
 */
