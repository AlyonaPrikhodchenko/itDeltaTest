import { getFullImage } from "./api.js";
import { isEscapeKey } from "./util.js";
import { addComments } from './comments.js';

const photoList = document.querySelector('.photos__list');
const photoTemplate = document.querySelector('#photo-card')
  .content
  .querySelector('.photos__item');

const modal = document.querySelector('.modal');
const fullPhoto = document.querySelector('.modal__img');
const commentsContainer = document.querySelector('.modal__photo-comments');

const showPhotoCard = (card) => {
  const cardElement = photoTemplate.cloneNode(true);

  const image = cardElement.querySelector('.photos__image');
  const idPhoto = cardElement.querySelector('.js-id');
  image.src = card.url;
  idPhoto.textContent = card.id;

  cardElement.addEventListener('click', async (evt) => {
    evt.preventDefault();
    modal.classList.remove('modal--hidden');
    const data = await getFullImage(card.id);

    if (card.id === data.id) {
      fullPhoto.src = data.url;
      createComments(data.comments);
      addComments(data.id)
    }

    document.addEventListener('keydown', (evt) => {
      if (isEscapeKey(evt)) {
        evt.preventDefault();
        modal.classList.add('modal--hidden');
      }
    })
  })

  return cardElement;
}

function createComments(comments) {
  if (comments.length > 0) {
    const item = document.createElement('li');
    comments.forEach((comment) => {
      item.textContent = comment.text;
    })
    commentsContainer.append(item)
  }
}

const renderCards = (cards) => {
  cards.forEach((element) => {
    const card = showPhotoCard(element);
    photoList.append(card);
  });
}

export { renderCards, photoList };
