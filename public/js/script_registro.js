let form = document.getElementById("signup_form");

let nombre_feedback = document.getElementById("nombre_feedback");
let apellidos_feedback = document.getElementById("apellidos_feedback");
let username_feedback = document.getElementById("username_feedback");
let email_feedback = document.getElementById("email_feedback");
let password_feedback = document.getElementById("password_feedback");
let confirmPassword_feedback = document.getElementById("confirmPassword_feedback");
let fecha_nacimiento_feedback = document.getElementById("fecha_nacimiento_feedback");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let nombres = document.getElementById('nombres');
    let apellidos = document.getElementById('apellidos');
    let username = document.getElementById('username');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let password_confirmation = document.getElementById('confirmPassword');
    let fecha_nacimiento = document.getElementById('fecha_nacimiento');

    if (nombres.value === "") {
        nombre_feedback.classList.remove("valid-feedback");
        nombre_feedback.classList.add("invalid-feedback");

        nombre_feedback.innerText = "El nombre no puede estar vacío.";
        nombre_feedback.style.display = "block";
    }
    else if (apellidos.value === "") {
        apellidos_feedback.classList.remove("valid-feedback");
        apellidos_feedback.classList.add("invalid-feedback");

        apellidos_feedback.innerText = "Los apellidos no pueden estar vacíos.";
        apellidos_feedback.style.display = "block";
    }
    else if (username.value === "") {
        username_feedback.classList.remove("valid-feedback");
        username_feedback.classList.add("invalid-feedback");

        username_feedback.innerText = "El nombre de usuario no puede estar vacío.";
        username_feedback.style.display = "block";
    }
    else if (email.value === "") {
        email_feedback.classList.remove("valid-feedback");
        email_feedback.classList.add("invalid-feedback");

        email_feedback.innerText = "El correo electrónico no puede estar vacío.";
        email_feedback.style.display = "block";
    }
    else if (!email.includes("@")) {
        email_feedback.classList.remove("valid-feedback");
        email_feedback.classList.add("invalid-feedback");

        email_feedback.innerText = "El correo electrónico no es válido.";
        email_feedback.style.display = "block";
    }
    else if (password.value === "") {
        password_feedback.classList.remove("valid-feedback");
        password_feedback.classList.add("invalid-feedback");

        password_feedback.innerText = "La contraseña no puede estar vacía.";
        password_feedback.style.display = "block";
    }
    else if (password.value !== password_confirmation.value) {
        confirmPassword_feedback.classList.remove("valid-feedback");
        confirmPassword_feedback.classList.add("invalid-feedback");

        confirmPassword_feedback.innerText = "Las contraseñas no coinciden.";
        confirmPassword_feedback.style.display = "block";
    }
    else if (fecha_nacimiento.value === "") {
        fecha_nacimiento_feedback.classList.remove("valid-feedback");
        fecha_nacimiento_feedback.classList.add("invalid-feedback");

        fecha_nacimiento_feedback.innerText = "Debe ingresar su fecha de nacimiento.";
        fecha_nacimiento_feedback.style.display = "block";
    }
    else {
        alert("¡Registro exitoso!");
        form.submit();
        form.reset();
    }

})

let boton_limpiar = document.getElementById("limpiar");

boton_limpiar.addEventListener("click", function (event) {
    event.preventDefault();
    form.reset();
})
