const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", onNameInput);

function onNameInput(event) {
    if (event.currentTarget.value !== "") {
        nameOutput.textContent = event.currentTarget.value;
    }
    else {
        nameOutput.textContent = "Anonymous";
    }
}