const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');


const createComment = (comment) => {
  const commentBlock = commentTemplate.cloneNode(true);
  commentBlock.querySelector('.social__picture').src = comment.avatar;
  commentBlock.querySelector('.social__picture').alt = comment.name;
  commentBlock.querySelector('.social__text').textContent = comment.message;

  return commentBlock;
};

const createCommentsFragment = (comments) => {
  const commentsFragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    commentsFragment.appendChild(createComment(comment));
  });

  return commentsFragment;
};

export {createCommentsFragment};
