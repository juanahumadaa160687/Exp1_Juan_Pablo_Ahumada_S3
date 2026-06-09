let login =document.getElementById("login");
let logout = document.getElementById("logout");
let profile = document.getElementById("profile");
let dashboard = document.getElementById("dashboard");

let user = sessionStorage.getItem("username");


if (user != null && user !== "") {
    logout.style.visibility = "visible";
    login.style.display = "none";

    if (sessionStorage.getItem("role") === "admin") {
        dashboard.style.visibility = "visible";

        dashboard.innerText = "Bienvenido " + user.toUpperCase();
    }
    else {
        profile.style.visibility = "visible";

        profile.innerText = "Bienvenido " + user.toUpperCase();
    }
}

else {
    login.style.visibility = "visible";
}

logout.addEventListener("click", function () {
    sessionStorage.clear()
    login.style.visibility = "visible";
    login.style.display = "block";
    logout.style.display = "none";
    profile.style.display = "none";

    window.location.href = "index.html";

});

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

if (carrito.length > 0){
    let carrito_compras = document.getElementById('carrito_compras');

    let badge = document.createElement('span');
    badge.classList.add('badge', 'bg-danger', 'position-absolute', 'top-3', 'start-100', 'translate-middle', 'rounded-circle', 'border', 'border-light');
    badge.innerText = carrito.length.toString();

    let badge_2 = document.createElement('span');
    badge_2.classList.add('visually-hidden');
    badge_2.innerText = 'Productos en el carrito';
    badge.appendChild(badge_2);

    carrito_compras.appendChild(badge);

}