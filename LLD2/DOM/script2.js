// document.addEventListener("keydown", function (event) {
//   console.log("Key pressed", event.key);
// });

const section1 = document.getElementById("s1");
const section2 = document.getElementById("s2");
const section3 = document.getElementById("s3");
const htmlRect = document.querySelector("html").getBoundingClientRect();
console.log(htmlRect.height);

document.addEventListener("keydown", function (event) {
  console.log("Key pressed", event.key);
  if (event.key === "1") {
    section1.scrollIntoView({ behavior: "smooth" });
  }
  if (event.key === "2") {
    section2.scrollIntoView({ behavior: "smooth" });
  }
  if (event.key === "3") {
    section3.scrollIntoView({ behavior: "smooth" });
  }
  if (event.key === "t") {
    // scroll to the top of the page
    // window.scrollTo({top:valu ein pixels, behavior:"smooth"})
    // window.scrollTo({ top: 0, behavior: "smooth" });
    window.scrollBy({ top: -htmlRect.height, behavior: "smooth" });
  }
  if (event.key === "b") {
    // scroll to the bottom of the page
    // window.scrollTo({top:valu ein pixels, behavior:"smooth"})
    // window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    window.scrollBy({ top: htmlRect.height, behavior: "smooth" });
  }
});
