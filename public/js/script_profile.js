let profile_nombre = document.getElementById("nombre");
let profile_apellido = document.getElementById("apellido");
let profile_username = document.getElementById("username");
let profile_email = document.getElementById("email");
let profile_direccion = document.getElementById("direccion");
let profile_fecha_nacimiento = document.getElementById("fecha_nacimiento");

let user = JSON.parse(localStorage.getItem("user " + sessionStorage.getItem("username")));

if (user != null) {
    profile_nombre.value = user.nombre;
    profile_apellido.value = user.apellido;
    profile_username.value = user.username;
    profile_email.value = user.email;
    profile_direccion.value = user.direccion;
    profile_fecha_nacimiento.value = user.fecha_nacimiento;
}