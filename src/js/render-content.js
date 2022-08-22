import { showPhotoCard } from "./create-card.js";
import { getFullImage, postData } from "./api.js";
import { addContentPopup } from "./create-popup.js";
import { closePopup } from "./util.js";

const bodyEl = document.querySelector('body');
const photoList = document.querySelector('.photos__list');

const renderCards = (cards) => {
  cards.forEach((element) => {
    const card = showPhotoCard(element);
    photoList.append(card);

    card.addEventListener('click', async (evt) => {
      evt.preventDefault();
      const data = await getFullImage(element.id);
      const createPopap = addContentPopup(data);
      bodyEl.append(createPopap);

      const form = document.querySelector('.modal__form');

      form.addEventListener('submit', async (evt) => {
        evt.preventDefault();
        const modal = document.querySelector('.modal');
        const comment = form.querySelector('#comment');

        const body = {
          name: data.id,
          comment: comment.value
        }

        const response = await postData(body, data.id);
        if (response.status === 204) {
          modal.remove();
        }
      })

      closePopup(createPopap);
    })

  });
}

export {
  renderCards
};
