document.addEventListener('DOMContentLoaded', function () {
    const commentButton = document.getElementById('comment_button');
    const commentText = document.getElementById('comment_text');
    const commentsContainer = document.getElementById('comments');

    commentButton.addEventListener('click', function () {
        const name = document.getElementById('name').value;
        const comment = commentText.value;

        if (name && comment) {
            const newComment = document.createElement('div');
            newComment.className = 'comment-container';

            // Add a timestamp to the comment
            const timestamp = new Date().toLocaleString();
            newComment.setAttribute('data-timestamp', timestamp);

            newComment.innerHTML = `<strong>Name: ${name}</strong><br>${comment}<br><br>`;

            commentsContainer.insertBefore(newComment, commentsContainer.firstChild);

            document.getElementById('name').value = '';
            commentText.value = '';

            // Sort comments after adding a new one
            sortComments();
        }
    });

    // Initial sort of comments when the page loads
    sortComments();

    function sortComments() {
        const commentNodes = document.querySelectorAll('.comment_container');

        const commentsArray = Array.from(commentNodes);

        // Sort comments by timestamp in descending order
        commentsArray.sort((a, b) => {
            const timestampA = new Date(a.getAttribute('data-timestamp'));
            const timestampB = new Date(b.getAttribute('data-timestamp'));
            return timestampB - timestampA;
        });

        // Remove all comments from the container
        commentsContainer.innerHTML = '';

        // Add sorted comments back to the container
        commentsArray.forEach(commentNode => {
            commentsContainer.appendChild(commentNode);
        });
    }
});