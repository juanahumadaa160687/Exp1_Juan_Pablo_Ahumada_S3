let form = document.getElementById("login");
let feedback_username = document.getElementById("feedback_username");
let feedback_password = document.getElementById("feedback_password");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("user " + username));

    if (users.length === 0) {
        feedback_username.innerHTML = "El usuario no existe.";
        feedback_username.style.display = "block";

        setTimeout(() => {
            feedback_username.style.display = "none";
        }, 3500);
    }

    else {
        for (let i = 0; i < users.length; i++) {
            let user_username = users[i].username;
            let user_password = users[i].password;

            if (username === user_username && password === user_password) {

                sessionStorage.setItem("username", username);
                sessionStorage.setItem("password", password);

                window.location.href = "/ludus_arcanus_web/index.html";
                return;
            }
            else {
                feedback_password.innerText = "Contraseña incorrectas.";
                feedback_password.style.display = "block";

                setTimeout(() => {
                    feedback_username.style.display = "none";
                }, 3500);
            }
        }
    }


})

