emailjs.init("8_m7T6pQNO517Bs2c");

let forgotPassword = document.getElementById("forgot_password");

let emailVerify = document.getElementById("email_feedback");

forgotPassword.addEventListener("submit", (e) => {
    e.preventDefault();

    let user_email = document.getElementById("email").value;

    if (user_email === "") {
        emailVerify.innerText = "El correo electrónico no puede estar vacío.";
        emailVerify.style.display = "block";

        setTimeout(() => {
            emailVerify.style.display = "none";
            forgotPassword.reset();
        }, 3500)
    }

    else if (!user_email.includes("@") ) {
        emailVerify.innerText = "Por favor, ingresa un correo electrónico válido.";
        emailVerify.style.display = "block";

        setTimeout(() => {
            emailVerify.style.display = "none";
            forgotPassword.reset();
        },3500)
    }

    else {
        sendForgotPasswordEmail(user_email);
        alert("Se ha enviado un correo electrónico con las instrucciones para restablecer tu contraseña. Por favor, revisa tu bandeja de entrada.");
        window.location.href = "restart_password.html";
    }
})

function sendForgotPasswordEmail(email) {

    const templateParams = {
        to_email: email,
        company: "Ludus Arcanus"
    }

    const options = {

    }

    emailjs.send("service_b3iohz9", "template_1k0etc9", templateParams, options)
        .then((response) => {
            console.log("Sending forgot_password", response.status, response.text);
        }, (error) => {
            console.log("Failed to send email verification", error);
        })
}