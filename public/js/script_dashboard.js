let product_form = document.getElementById('product_form');

let admin_user = sessionStorage.getItem("role") || null;


product_form.addEventListener('submit', function (event) {
    event.preventDefault();

    let id = document.getElementById('inputId').value.trim();
    let nombre = document.getElementById('productName').value.trim();
    let categoria = document.getElementById('productCategory').value.trim();
    let descripcion = document.getElementById('productDescription').value.trim();
    let precio = document.getElementById('productPrice').value.trim();
    let stock = document.getElementById('productStock').value.trim();
    let imagen = document.getElementById('productImage').value.trim();
    let destacado = document.getElementById('productFeatured').value.trim();

    let productos = JSON.parse(localStorage.getItem('productos')) || [];

    let producto = {
        id: id,
        nombre: nombre,
        categoria: categoria,
        descripcion: descripcion,
        precio: precio,
        stock: stock,
        imagen: imagen,
        destacado: destacado,
    }

    productos.push(producto);

    if (dataSet.length > 0) {
        alert("Producto agregado correctamente");
        product_form.reset();
    }

    localStorage.setItem('productos', JSON.stringify(productos));
    window.location.reload();
});


let dataSet = JSON.parse(localStorage.getItem('productos')) || [];

let table = new DataTable('#productoTable', {
    paging: false,
    responsive: true,
    columns: [
        {title: 'ID'},
        {title: 'Nombre'},
        {title: 'Categoria'},
        {title: 'Descripcion'},
        {title: 'Precio'},
        {title: 'Stock'},
        {title: 'Acciones'},
    ],

    data:
        dataSet.map((item) => {
            return [
                item.id,
                item.nombre,
                item.categoria,
                item.descripcion,
                item.precio,
                item.stock,
                `<button class="btn btn-danger" id="bt_eliminar" onclick="deleteProd(${item.id})"><i class="fa fa-trash"></i></button>`,

            ]
        })

});

function deleteProd(id) {

    console.log(id);

    let productos = JSON.parse(localStorage.getItem('productos')) || [];

    let producto = productos.find(p => p.id == id);

    console.log(producto);

    productos.splice(productos.indexOf(producto), 1);

    localStorage.setItem('productos', JSON.stringify(productos));

    alert("Producto eliminado correctamente");

    window.location.reload();
}


let adminForm = document.getElementById("admin_form");

let nameFeed = document.getElementById("name_feedback");
let lastnameFeed = document.getElementById("lastname_feedback");
let userNameFeed = document.getElementById("userName_feedback");
let correo_feedback = document.getElementById("correo_feedback");
let birthday_feedback = document.getElementById("birthday_feedback");
let contrasena_feedback = document.getElementById("contrasena_feedback");
let contrasena_confirmation_feedback = document.getElementById("confirmContrasena_feedback");


adminForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let lastname = document.getElementById("lastname").value.trim();
    let userName = document.getElementById("userName").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let birthday = document.getElementById("birthday").value.trim();
    let address = document.getElementById("address").value.trim();
    let contrasena = document.getElementById("contrasena").value.trim();
    let confirmacion_contrasena = document.getElementById("confirmContrasena").value.trim();
    let rol = document.getElementById("rol").value.trim();

    let users = JSON.parse(localStorage.getItem('productos')) || [];

    let user_username_exists = users.find(p => p.username == userName);

    let user_email_exists = users.find(p => p.email == correo);

    if (name === "") {
        nameFeed.innerText = "El nombre no puede estar vacío.";
        nameFeed.style.display = "block";

        setTimeout(() => {
            nameFeed.style.display = "none";
        }, 3500);
    }

    else if (lastname === "") {
        lastnameFeed.innerText = "El apellido no puede estar vacío.";
        lastnameFeed.style.display = "block";

        setTimeout(() => {
            lastnameFeed.style.display = "none";
        }, 3500);
    }
    else if (userName === "") {
        userNameFeed.innerText = "El nombre de usuario no puede estar vacío";
        userNameFeed.style.display = "block";

        setTimeout(() => {
            userNameFeed.style.display = "none";
        }, 3500);
    }
    else if (user_username_exists) {
        userNameFeed.innerText = "El nombre de usuario ya existe. Por favor, elige otro.";
        userNameFeed.style.display = "block";
        setTimeout(() => {
            userNameFeed.style.display = "none";
        }, 3500);
    }
    else if (correo === "") {
        correo_feedback.innerText = "El email no valido";
        correo_feedback.style.display = "block";
        setTimeout(() => {
            correo_feedback.style.display = "none";
        }, 3500);
    }
    else if (!correo.includes("@") || !correo.includes(".")) {
        correo_feedback.innerText = "El email no es válido.";
        correo_feedback.style.display = "block";
        setTimeout(() => {
            correo_feedback.style.display = "none";
        }, 3500);
    }
    else if (user_email_exists) {
        correo_feedback.innerText = "El email ya está registrado. Por favor, elige otro.";
        correo_feedback.style.display = "block";
        setTimeout(() => {
            correo_feedback.style.display = "none";
        }, 3500);
    }
    else if (birthday=== "") {
        birthday_feedback.innerText = "La fecha de nacimiento no puede estar vacía.";
        birthday_feedback.style.display = "block";
        setTimeout(() => {
            birthday_feedback.style.display = "none";
        }, 3500);
    }
    else if (new Date(birthday) > new Date()) {
        birthday_feedback.innerText = "La fecha de nacimiento no puede ser en el futuro.";
        birthday_feedback.style.display = "block";
        setTimeout(() => {
            birthday_feedback.style.display = "none";
        }, 3500);
    }
    else if (new Date().getFullYear() - new Date(birthday).getFullYear() < 18) {
        birthday_feedback.innerText = "Debes tener al menos 18 años para registrarte.";
        birthday_feedback.style.display = "block";
        setTimeout(() => {
            birthday_feedback.style.display = "none";
        }, 3500);
    }
    else if (contrasena === "" || !contrasena.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
        contrasena_feedback.innerText = "La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas, números y caracteres especiales.";
        contrasena_feedback.style.display = "block";
        setTimeout(() => {
            password_feedback.style.display = "none";
        }, 3500);
    }
    else if (confirmacion_contrasena === "") {
        contrasena_confirmation_feedback.innerText = "La confirmación de contraseña no puede estar vacía.";
        contrasena_confirmation_feedback.style.display = "block";
        setTimeout(() => {
            contrasena_confirmation_feedback.style.display = "none";
        }, 3500);
    }
    else if (contrasena !== confirmacion_contrasena) {
        contrasena_feedback.innerText = "Las contraseñas no coinciden.";
        contrasena_feedback.style.display = "block";
        setTimeout(() => {
            contrasena_feedback.style.display = "none";
        }, 3500);
    }
    else {

        let user_admin = {
            nombre: name,
            apellido: lastname,
            username: userName,
            email: correo,
            fecha_nacimiento: birthday,
            direccion: address,
            password: contrasena,
            role: rol
        }

        let users = JSON.parse(localStorage.getItem("users")) || [];

        users.push(user_admin);

        localStorage.setItem("users", JSON.stringify(users));

        alert("Usuario administrador agregado correctamente");

        window.location.href = "/ludus_arcanus_web/login.html";
    }
})