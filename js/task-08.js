const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    if ( email === "" || password === "") {
        alert("Всі поля повинні бути заповнені");
    }
    else {
        const data = {
            email,
            password,
        };
        console.log(data);
        form.reset();
    }
}
