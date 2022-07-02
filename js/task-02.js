const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients");
let items = [];
const markup = ingredients.forEach(function (ingredient) {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.className = "item";
  list.append(item);
});




