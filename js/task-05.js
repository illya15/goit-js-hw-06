const printName = document.querySelector("#name-output");
const getName = document.querySelector("#name-input");

getName.addEventListener("input",(event)=>printName.textContent =
 event.currentTarget.value === "" ? "Anonymous" : event.currentTarget.value);