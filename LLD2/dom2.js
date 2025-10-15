const allItems = document.querySelectorAll("li");
const ourList = document.querySelector("ul");
console.log(allItems); // NodelList - iterable

// // identify the node with value as 8
// for(let node of allItems){
//     if(node.innerText === '8'){

//     }
// }
//const indexThatHas8 = allItems[6];
console.log(indexThatHas8.innerText);

const sevenElement = document.createElement("li");
sevenElement.innerText = "7";

// insert before 8
ourList.insertBefore(sevenElement, indexThatHas8);
