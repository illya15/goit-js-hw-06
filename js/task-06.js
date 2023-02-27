
const getText = document.querySelector("#validation-input");

getText.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === Number(getText.dataset)) {
    getText.classList.remove("invalid");
    getText.classList.add("valid");
  } else {
    getText.classList.remove("valid");
    getText.classList.add("invalid");
  }
});


