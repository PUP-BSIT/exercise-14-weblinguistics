document.addEventListener('DOMContentLoaded', function () {
    const commentForm = document.getElementById('comment_form');
    const commentsList = document.getElementById('comments_list');
    const nameInput = document.getElementById('name');
    const commentInput = document.getElementById('comment_text');
    const addCommentButton = document.getElementById('add_comment');
    
    function addComment() {
        const name = nameInput.value;
        const comment = commentInput.value;

        if (name.trim() !== '' && comment.trim() !== '') {
            const commentItem = document.createElement('li');
            commentItem.innerHTML = `<strong>${name}:</strong> ${comment}`;
            commentsList.appendChild(commentItem);

            nameInput.value = '';
            commentInput.value = '';
        }
    }

    addCommentButton.addEventListener('click', function (e) {
        e.preventDefault(); 
        addComment();
    });
});