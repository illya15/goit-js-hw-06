const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// const element = [];
// for (let i = 0; i < ingredients.length; i++) {
//   const option = ingredients[i];

//   const liEl = document.createElement("li");
//   liEl.textContent = option;
//   liEl.classList.add("item");

//   element.push(liEl);

 
// }
//  console.log(element);

//  const ingredientsEl = document.querySelector(".ingredients");
//  ingredientsEl.append(...element);

 const element = ingredients.map(option => {


  const liEl = document.createElement("li");
  liEl.textContent = option;
  liEl.classList.add("item");
  return liEl;
 })

 console.log(element);
 const ingredientsEl = document.querySelector("#ingredients");
ingredientsEl.append(...element);