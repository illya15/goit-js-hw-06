const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formEl = event.currentTarget.elements;
    
    const email = formEl.email.value.trim();
  
    const password = formEl.password.value.trim();
   

    const formData = {
        email,
        password,
    }
    if (email==="" || password==="") {
        alert ("Будь-ласка, заповніть всі поля")
        return;
     } else {
        console.log(formData);
     }
     event.currentTarget.reset();

    };



