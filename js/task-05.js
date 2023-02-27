// const printName = document.querySelector("#name-output");
// const getName = document.querySelector("#name-input");

// getName.addEventListener("input",(event)=>printName.textContent =
//  event.currentTarget.value === "" ? "Anonymous" : event.currentTarget.value);



const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", enterName);

function enterName(event) {
  if (event.currentTarget.value.trim() === "") {
    spanEl.textContent = "Anonymous";
  } else {
    spanEl.textContent = event.currentTarget.value;
  }
}