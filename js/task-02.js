const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let ul = document.querySelector("#ingredients");

const ingredientsItemsEl = ingredients.map(ingredient => {
  const itemEl = document.createElement(`li`);
  itemEl.classList.add('item');
  itemEl.textContent = ingredient;
  return itemEl;
});
ul.append(...ingredientsItemsEl);