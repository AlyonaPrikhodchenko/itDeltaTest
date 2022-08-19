const commentForm = document.querySelector('.modal__form');
const commentList = document.querySelector('.modal__photo-comments');
const commentInput = document.querySelector('.modal__form-textarea');

const addCommentsPhoto = () => {
  if (commentInput.value != '') {
    const newComment = document.createElement('li');
    newComment.textContent = commentInput.value;
    commentInput.value = '';
    commentList.append(newComment);
  } else {
    alert('Невозможно отправить пустое сообщение!')
  }
}

commentForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  addCommentsPhoto();
})

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Enter') {
    evt.preventDefault()
    addCommentsPhoto();
  }
})
