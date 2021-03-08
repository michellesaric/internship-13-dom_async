const logout = document.querySelector(".sign-out-button");

function logoutFunction() {
    localStorage.clear();
    window.location.href = "./index.html";
}


logout.addEventListener('click', logoutFunction);