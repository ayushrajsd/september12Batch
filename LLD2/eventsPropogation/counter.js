const decrementButton = document.getElementById("decrement");
const incrementButton = document.getElementById("increment");
const resetButton = document.getElementById("reset");
const countDisplay = document.getElementById("count");

let count = 0;
function updateCount() {
  countDisplay.textContent = count;
}

incrementButton.addEventListener("click", function () {
  count++;
  updateCount();
});
decrementButton.addEventListener("click", function () {
  if (count > 0) {
    count--;
  }
  countDisplay.textContent = count;
});
resetButton.addEventListener("click", function () {
  count = 0;
  countDisplay.textContent = count;
});
