document.addEventListener('DOMContentLoaded', function () {
    const commentButton = document.getElementById('comment_button');
    const commentText = document.getElementById('comment_text');
    const commentsContainer = document.getElementById('comments');

    commentButton.addEventListener('click', function () {
        const name = document.getElementById('name').value;
        const comment = commentText.value;

        if (name && comment) {
            const newComment = document.createElement('div');
            newComment.className = 'comment_container';
            newComment.innerHTML = `<strong>Name: ${name}
						</strong><br>${comment}<br><br>`;

            commentsContainer.insertBefore(newComment, commentsContainer.firstChild);

            document.getElementById('name').value = '';
            commentText.value = '';
        }
    });
});
