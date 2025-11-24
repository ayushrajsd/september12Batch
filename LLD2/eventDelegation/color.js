const colorPalette = document.getElementById("colorPalette");

colorPalette.addEventListener("click", function (event) {
  const target = event.target;

  // guard clause
  if (!target.classList.contains("color-box")) return;
  const selectedColor = target.style.backgroundColor;
  document.body.style.backgroundColor = selectedColor;
});
