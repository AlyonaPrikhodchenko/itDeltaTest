import { createComments } from "./util.js";

const popupTemplate = document.querySelector('#popup')
  .content
  .querySelector('.modal');

const addContentPopup = (data) => {
  const popupElement = popupTemplate.cloneNode(true);
  const fullPhoto = popupElement.querySelector('.modal__img');
  const commentsContainer = popupElement.querySelector('.modal__photo-comments');

  fullPhoto.src = data.url;
  createComments(data.comments, commentsContainer);

  return popupElement;
}

export { addContentPopup };
