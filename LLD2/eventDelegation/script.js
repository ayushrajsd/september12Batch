const submitBtn = document.getElementById("submitComment");
const commentInput = document.getElementById("commentInput");

const commentsContainer = document.getElementById("commentsContainer");

submitBtn.addEventListener("click", function () {
  const text = commentInput.value.trim();
  if (!text) return;
  addComment(text);
  commentInput.value = "";
});

commentsContainer.addEventListener("click", function (e) {
  // check if the reply button was clicked
  if (e.target.classList.contains("replyBtn")) {
    const parentElemt = e.target.closest(".comment");
    const replyInput = parentElemt.querySelector(".replyInput");
    const replyText = replyInput.value.trim();
    if (!replyText) return;

    // for now log it
    console.log("Replying with ", replyText);
    addReply(parentElemt, replyText);
    replyInput.value = "";
  }
  if (e.target.classList.contains("toggleReplies")) {
    const parentComment = e.target.closest(".comment");
    const repliesContainer = parentComment.querySelector(".repliesContainer");
    repliesContainer.classList.toggle("collapsed");
  }
});

function addComment(text) {
  const commentElement = document.createElement("div");
  commentElement.className = "comment";
  commentElement.innerHTML = `
    <p>${text}</p>
        <button class="replyBtn">Reply</button>
        <button class="toggleReplies">Show/Hide Replies</button>
        <div class="repliesContainer collapsed"></div>
        <textarea class="replyInput" placeholder="Write a reply..."></textarea>
    `;
  commentsContainer.appendChild(commentElement);
}

function addReply(parentComment, text) {
  const repliesContainer = parentComment.querySelector(".repliesContainer");

  const replyElement = document.createElement("div");
  replyElement.className = "reply";
  replyElement.innerHTML = `
    <p>${text}</p>
    `;
  repliesContainer.appendChild(replyElement);
  repliesContainer.classList.remove("collapsed");
}
