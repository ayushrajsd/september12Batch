const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

grandparent.addEventListener("click", function () {
  console.log("Grandparent called");
});
parent.addEventListener("click", function () {
  console.log("Parent called");
});
child.addEventListener("click", function (event) {
  console.log("Child called");
  event.stopPropagation(); // stop the event from moving upward
  //   event.stopImmediatePropagation()
});
