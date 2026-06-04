let login =document.getElementById("login");
let logout = document.getElementById("logout");
let profile = document.getElementById("profile");

let user = sessionStorage.getItem("username");

console.log(user);

if (user != null && user !== "") {
    logout.style.visibility = "visible";
    profile.style.visibility = "visible";
    login.style.display = "none";

    profile.innerHTML = user;
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

});