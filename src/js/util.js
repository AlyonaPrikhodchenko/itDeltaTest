const isEscapeKey = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const addComments = (comments, container) => {
  if (comments.length > 0) {
    const item = document.createElement('li');
    comments.forEach((comment) => {
      item.textContent = comment.text;
    })
    container.append(item)
  }
}

const closePopup = (popup) => {
  const modalWindow = document.querySelector('.modal');
  const modalContent = modalWindow.querySelector('.modal__content');
  const buttonMobile = modalWindow.querySelector('.modal__close-button')

    document.addEventListener('keydown', (evt) => {
      if (isEscapeKey(evt)) {
        evt.preventDefault();
        popup.remove()
      }
    })

    modalContent.onclick = function(evt) {
      evt.stopPropagation();
    }

    modalWindow.onclick = function() {
      popup.remove();
    }

    buttonMobile.addEventListener('click', () => {
      popup.remove();
    })
}

export {
  addComments,
  closePopup
};
