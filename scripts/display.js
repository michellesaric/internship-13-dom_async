const login = document.querySelector(".login");
const registration = document.querySelector(".registration");

if(localStorage.length == 0) {
    login.style.display = "none";
    registration.style.display = "flex";
} else {
    registration.style.display = "none";
    login.style.display = "flex";
}