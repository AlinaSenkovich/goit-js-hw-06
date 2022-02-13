const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let ul = document.getElementById("ingredients");

const ingredientsItemsEl = ingredients.forEach((i) => {
  const itemEl = document.createElement(`li`);
  itemEl.classList.add('item');
  itemEl.appendChild(document.createTextNode(i));
  ul.appendChild(itemEl);
});


