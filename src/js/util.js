const isEscapeKey = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const createComments = (comments, container) => {
  if (comments.length > 0) {
    const item = document.createElement('li');
    comments.forEach((comment) => {
      item.textContent = comment.text;
    })
    container.append(item)
  }
}

const closePopup = (popup) => {
  const modalWindow = document.querySelector(".modal");
  const modalContent = modalWindow.querySelector(".modal__content");

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
}

export {
  createComments,
  closePopup
};
