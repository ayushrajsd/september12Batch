/**
 *
 * 1. select all the cards
 */

const cardList = document.querySelectorAll(".card");
console.log(cardList);
for (let i = 0; i < cardList.length; i++) {
  cardList[i].addEventListener("dblclick", function (e) {
    console.log(e);
    console.log(e.target);
    // cardList[0] == e.target

    // get the color from the target
    const classTobeAttached = e.target.getAttribute("data-color");
    console.log(classTobeAttached);
    e.target.classList.toggle(classTobeAttached);

    // set the attribute and mark it as used
    // e.target.setAttribute("data-color", "used");
  });
}

/**
 *
 * caching - closure
 */

// function caching(lookup) {
//   const cache = {};
//   return function (arg) {
//     if (cache[arg] != undefined) {
//       return cache[arg];
//     }
//     const result = lookup(arg);
//     cache[arg] = result;
//     return result;
//   };
// }

// const look = caching(squares);
// look(10);
// look(10)

// {
// 10:100
// }
