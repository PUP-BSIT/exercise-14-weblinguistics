const SORT_ORDER_ASC = 'asc';
const SORT_ORDER_DESC = 'desc';

function sortComments(order) {
  const commentsList = document.getElementById('comments_list');
  const comments = Array.from(commentsList.children);

  comments.sort(function (a, b) {
    const dateA = new Date(a.getAttribute('data-date'));
    const dateB = new Date(b.getAttribute('data-date'));

    if (order === SORT_ORDER_ASC) {
      return dateA - dateB;
    } else if (order === SORT_ORDER_DESC) {
      return dateB - dateA;
    }
  });

  commentsList.innerHTML = '';

  comments.forEach(function (comment) {
    commentsList.appendChild(comment);
  });
}

document.getElementById('comment_form').addEventListener('submit', function
 (event) {
  event.preventDefault();

  const nameInput = document.getElementById('name');
  const commentTextInput = document.getElementById('comment_text');
  const commentsList = document.getElementById('comments_list');

  const newComment = document.createElement('li');
  const currentDate = new Date().toISOString();
  newComment.setAttribute('data-date', currentDate);
  newComment.innerHTML = `<p><strong>Name:</strong> ${nameInput.value}</p><p>
  ${commentTextInput.value}</p>`;

  commentsList.appendChild(newComment);

  nameInput.value = '';
  commentTextInput.value = '';
});