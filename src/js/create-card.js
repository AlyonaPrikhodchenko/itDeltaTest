const photoTemplate = document.querySelector('#photo-card')
  .content
  .querySelector('.photos__item');

const showPhotoCard = (card) => {
  const cardElement = photoTemplate.cloneNode(true);

  const image = cardElement.querySelector('.photos__image');
  const idPhoto = cardElement.querySelector('.js-id');
  image.src = card.url;
  idPhoto.textContent = card.id;

  return cardElement;
}

export {
  showPhotoCard
};
