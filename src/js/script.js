import { renderCards } from './create-card.js';
import { getData } from './api.js';
import { openModal } from './modal.js';
import './comments.js';


getData((cards) => {
  renderCards(cards);
})

openModal();







