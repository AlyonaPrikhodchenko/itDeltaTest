import { showPhotoCard } from "./create-card.js";
import { getFullImage } from "./api.js";
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
      const createPopap = addContentPopup(data)

      bodyEl.append(createPopap);

      closePopup(createPopap)
    })
  });
}

export { renderCards };
