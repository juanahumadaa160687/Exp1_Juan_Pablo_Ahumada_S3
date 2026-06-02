let form = document.getElementById("login");
let feedback_username = document.getElementById("feedback_username");
let feedback_password = document.getElementById("feedback_password");

let boton_submit = document.getElementById("boton_submit");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "") {
        feedback_username.classList.remove("valid-feedback");
        feedback_username.classList.add("invalid-feedback");

        feedback_username.innerText = "El nombre de usuario no puede estar vacío.";
        feedback_username.style.display = "block";
    }

    else if (password === "" || password.length < 8) {
        feedback_password.classList.remove("valid-feedback");
        feedback_password.classList.add("invalid-feedback");

        feedback_password.innerText = "La contraseña no puede estar vacía o debe tener al menos 8 caracteres.";
        feedback_password.style.display = "block";
    }

    else {
        form.submit();
        form.reset();
    }

})