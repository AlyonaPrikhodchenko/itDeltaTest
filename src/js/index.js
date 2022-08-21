import { renderCards } from './render-content.js';
import { getData } from './api.js';

(async function() {
  const cards = await getData();
  renderCards(cards);
})()



