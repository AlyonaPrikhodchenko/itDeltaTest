import { renderCards } from './create-card.js';
import { getData } from './api.js';

getData((cards) => {
  renderCards(cards);
})






