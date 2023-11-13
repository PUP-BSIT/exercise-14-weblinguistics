let nameInput = document.getElementById("name");
let commentInput = document.getElementById("comment");
let commentButton = document.getElementById("comment_button");
let commentsContainer = document.getElementById("comments_container");

function checkInputs() {
  if (nameInput.value && commentInput.value) {
    commentButton.disabled = false;
  } else {
    commentButton.disabled = true;
  }
}

function addComment() {
  if (nameInput.value && commentInput.value) {
    let commentElement = document.createElement("div");
    commentElement.className = "comment";
    commentElement.innerHTML = `<strong>${nameInput.value}:</strong> ${commentInput.value}`;

    commentsContainer.appendChild(commentElement);

    nameInput.value = "";
    commentInput.value = "";

    commentButton.disabled = true;
  }
}

nameInput.addEventListener("input", checkInputs);
commentInput.addEventListener("input", checkInputs);
commentButton.addEventListener("click", addComment);
