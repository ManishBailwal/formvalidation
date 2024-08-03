const submitBtn = document.getElementById("submitBtn");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

let count = 0;

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (validatename() && validateEmail() && validatePassword()) {
    alert("Form Submitted Successfully");

    count = 3;
  }

  // clearing all the value of form once form is submitted
  if (count == 3) {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
  }
});

function validatename() {
  let name = document.getElementById("name").value;

  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }

  return true;
}

function validateEmail() {
  let email = document.getElementById("email").value;

  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }

  return true;
}

function validatePassword() {
  let password = document.getElementById("password").value;
  if (password.length == 0) {
    passwordError.innerHTML = "Password is required";
    return false;
  }

  return true;
}
