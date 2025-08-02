const form = document.getElementById("signInForm");
const email = document.getElementById("email");
const password = document.getElementById("password");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

function validateEmail() {
  const value = email.value.trim();
  const valid = value.includes("@");
  emailError.textContent = valid
    ? ""
    : "Please provide a properly formated email adress.";
  console.log(valid);
  return valid;
}

function validatePassword() {
  const value = password.value.trim();
  const valid = value.length >= 6;
  passwordError.textContent = valid
    ? ""
    : "Password must be at least 6 characters long.";
  console.log(valid);
  return valid;
}

function validateConfirmPassword() {
  const valid = password.value === confirmPassword.value;
  confirmPasswordError.textContent = valid ? "" : "Passwords dont match.";
  console.log(valid);
  return valid;
}

function logout() {
  localStorage.removeItem("userEmail");
  location.reload();
}

window.addEventListener("load", () => {
  const savedEmail = localStorage.getItem("userEmail");
  if (savedEmail) {
    showWelcome(savedEmail);
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const valid =
    validateEmail() &
    validatePassword() &
    validateConfirmPassword() &
    validateGender() &
    validateTerms();
  console.log(valid);

  if (valid) {
    localStorage.setItem("userEmail", email.value.trim());
    showWelcome(email.value.trim());
  }
});

email.addEventListener("input", validateEmail);
password.addEventListener("input", validatePassword);
