const loginButton = document.querySelector(".login-button");


function loginFunction() {

    const loginUsername = document.querySelector("#login-username");
    const loginPassword = document.querySelector("#login-password");

    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");

    if(loginUsername.value != username) {
        loginUsername.setCustomValidity("Korisničko ime se ne poklapa");
    } else if(loginPassword.value != password) {
        loginPassword.setCustomValidity("Lozinka se ne poklapa");
    } else {
        window.location.href = "./jokes.html";
    } 
}

loginButton.addEventListener('click', loginFunction);