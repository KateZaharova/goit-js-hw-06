const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngr = document.querySelector("#ingredients");

const markup = ingredients.map((ingredient) => {
  const itemInrg = document.createElement("li");
  itemInrg.classList.add("list-item");
  itemInrg.textContent = ingredient;
  return itemInrg;
  })

listIngr.append(...markup);



