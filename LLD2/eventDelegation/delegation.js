const categoriesContainer = document.getElementById("categories");
categoriesContainer.addEventListener("click", function (event) {
  const target = event.target;
  //   console.log("target:", target);
  // guard clause
  if (!target.classList.contains("product")) return;
  //  const product = event.target;
  //  const heading = product.parentElement.querySelector("h2")

  const categoryName = target
    .closest(".category")
    .querySelector("h2").textContent;

  const productName = target.textContent;
  console.log("Clicked on", productName, "from ", categoryName);
});
