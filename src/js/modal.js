import { photoList} from "./create-card.js";
// import { mock } from "./mock.js";
import { isEscapeKey } from "./util.js";

const modal = document.querySelector('.modal');
// const commentList = document.querySelector('.modal__photo-comments');

const openModal = () => {
  photoList.addEventListener('click', (evt) => {
    if (evt.target && evt.target.tagName != 'UL') {
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
