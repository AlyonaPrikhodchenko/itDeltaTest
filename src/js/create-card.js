const photoList = document.querySelector('.photos__list');
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

const renderCards = (cards) => {
  cards.forEach((element) => {
    const card = showPhotoCard(element);
    photoList.append(card);
  });
}

export { renderCards, photoList };
