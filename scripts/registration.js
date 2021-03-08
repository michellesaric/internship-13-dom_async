const password = document.querySelector("#registration-password");
const confirm_password = document.querySelector("#registration-repeated-password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Lozinke se ne poklapaju");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword; 

