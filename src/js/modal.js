import { photoList} from "./create-card.js";
import { isEscapeKey } from "./util.js";

const modal = document.querySelector('.modal');

const openModal = () => {
  photoList.addEventListener('click', (evt) => {
    if (evt.target) {
      modal.classList.remove('modal--hidden');
    }
  })

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      modal.classList.add('modal--hidden');
    }
  })
}

export { openModal };
