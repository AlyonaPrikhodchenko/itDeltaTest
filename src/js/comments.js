import { postData } from "./api.js";

const commentForm = document.querySelector('.modal__form');
const commentInput = document.querySelector('.modal__form-textarea');

const createComments = () => {
  if (commentInput.value != '') {
    const newComment = document.createElement('li');
    newComment.textContent = commentInput.value;
    commentInput.value = '';
  } else {
    alert('Невозможно отправить пустое сообщение!')
  }
}

const addComments = (id) => {
  commentForm.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    await postData(id, () => {
      createComments();
    })
  })

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Enter') {
      evt.preventDefault()
      addCommentsPhoto();
    }
  })
}

export { addComments };
