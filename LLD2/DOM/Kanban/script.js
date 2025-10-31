// ------------------- DOM ELEMENTS -----------------
const addBtn = document.querySelector(".add-btn");
const removeBtn = document.querySelector(".remove-btn");
const modalCont = document.querySelector(".modal-cont");
// const textAreaCont = document.querySelector(".textArea-cont")
const mainCont = document.querySelector(".main-cont");
const textAreaCont = document.querySelector(".textArea-cont");

// ----------------- STATE FLAGS ---------------------------
let addTaskFlag = false; // tracks whether modal is open or closed
let removeTaskFlag = false;

// ------------------ EVENT LISTENERS -----------------------
addBtn.addEventListener("click", function () {
  // flip the flag value
  addTaskFlag = !addTaskFlag;

  // Show or hide based on the flag
  //   if (addTaskFlag) {
  //     modalCont.style.display = "flex";
  //   } else {
  //     modalCont.style.display = "none";
  //   }
  modalCont.style.display = addTaskFlag ? "flex" : "none";
});

removeBtn.addEventListener("click", function () {
  removeTaskFlag = !removeTaskFlag;
  if (removeTaskFlag) {
    alert("Delete mode activated");
    removeBtn.style.color = "red";
  } else {
    removeBtn.style.color = "white";
  }
});
// function to remove tickets when delete mode is active
function handleRemoval(ticket) {
  // newly created ticket -> add event listener to remove here
  ticket.addEventListener("click", function () {
    if (!removeTaskFlag) return;
    ticket.remove();
  });
}

// function to create ticket

function createTicket(ticketColor, ticketID, ticketTask) {
  console.log("ticket color", ticketColor);
  const ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");
  ticketCont.innerHTML = `
    <div class="ticket-color" style="background-color:${ticketColor}"></div>
    <div class="ticket-id">${ticketID}</div>
    <div class="task-area">${ticketTask}</div>
    `;

  // append the created ticket to the main container
  mainCont.appendChild(ticketCont);

  // add delete funcitonlaity , we will call a handleRemove
  handleRemoval(ticketCont);
}

// adding event listener for the SHIFT key to create ticket
modalCont.addEventListener("keydown", function (e) {
  const keyPressed = e.key;

  if (keyPressed === "Shift") {
    const taskContent = textAreaCont.value.trim(); // read the text from text area
    if (taskContent == "") {
      alert("Please enter a task before creating a ticket");
      return;
    }
    const ticketID = shortid();

    createTicket(modalPriorityColor, ticketID, taskContent); // call the createTicket function to generate a new ticket
    modalCont.style.display = "none";

    addTaskFlag = false;

    textAreaCont.value = ""; // clear the user text for the next input
  }
});

const allPriorityColors = document.querySelectorAll(".priority-color");
const colors = ["lightpink", "lightgreen", "lightblue", "black"];

let modalPriorityColor = colors[colors.length - 1]; // default = black

// loop over all the colors and attach click listeners
allPriorityColors.forEach(function (colorElem) {
  colorElem.addEventListener("click", function () {
    allPriorityColors.forEach(function (priorityColorElem) {
      priorityColorElem.classList.remove("active");
    });

    // add the active class to the clicked color
    colorElem.classList.add("active");

    // store the selected color
    modalPriorityColor = colorElem.classList[0];
    console.log("selected color", modalPriorityColor);
  });
});
