import { renderCards } from './render-content.js';
import { getData } from './api.js';

getData((cards) => {
  renderCards(cards);
})






