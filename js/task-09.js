function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector(".widget");
const bodyEl = document.querySelector("body");
const btnEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

btnEl.addEventListener("click", changeColor);

function changeColor(event) {
  
  const result = getRandomHexColor();
  bodyEl.style.backgroundColor = result;
  spanEl.textContent = result;
}