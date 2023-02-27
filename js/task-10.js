function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const arrayEl = [];

createBtnEl.addEventListener('click', onBtnClickCreateAmount);

function onBtnClickCreateAmount () {
  createBoxes(inputEl.value)
}

function createBoxes(amount){
for (let i = 0; i < amount; i++) {
  const arrayEl = [];
for (let i = 1; i <= amount; i++) {
  const divEl = document.createElement('div');
  divEl.width = `${20+amount*10}px`;
  divEl.height = `${20+amount*10}px`;
  divEl.style.width = `${20+i*10}px`;
  divEl.style.height = `${20+i*10}px`;
  divEl.style.backgroundColor = getRandomHexColor();
  arrayEl.push(divEl);
}
 boxEl.append(...arrayEl);
}

destroyBtlEl.addEventListener('click', destroyBoxes);

function destroyBoxes(){
  boxEl.innerHTML = '';
}
}