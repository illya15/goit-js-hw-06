const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

 const element = ingredients.map(option => {


  const liEl = document.createElement("li");
  liEl.textContent = option;
  liEl.classList.add("item");
  return liEl;
 })

 const ingredientsEl = document.querySelector("#ingredients");
ingredientsEl.append(...element);