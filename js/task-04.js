const increment = document.querySelector(`[data-action="increment"]`);
const decrement = document.querySelector(`[data-action="decrement"]`);
const shownValue = document.getElementById("value");

let counterValue = 0;

increment.addEventListener("click", onBtnIncrement);
decrement.addEventListener("click", onBtnDecrement);

function onBtnIncrement (event) {
    console.log((counterValue +=1));
    shownValue.textContent = counterValue;
}

function onBtnDecrement(event) {
    console.log((counterValue -=1));
    shownValue.textContent = counterValue;
}