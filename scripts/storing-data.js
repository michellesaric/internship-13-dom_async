const signUpButton = document.querySelector(".registration-button");

function storingData() {
    const username = document.querySelector("#registration-username");
    const password = document.querySelector("#registration-password");
    const repeatedPassword = document.querySelector("#registration-repeated-password");

    if(username.value.length >= 5 && username.value.length <= 10 && password.value.length >= 5 &&
        password.value.length <= 15 && repeatedPassword.value == password.value) {

        localStorage.setItem("username", username.value);
        localStorage.setItem("password", password.value);

        const registration = document.querySelector(".registration");
        registration.style.display = "none";
        const login = document.querySelector(".login");
        login.style.display = "flex";
    }

    console.log(localStorage);
}


signUpButton.addEventListener('click', storingData);

