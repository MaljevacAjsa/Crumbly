const form = document.getElementById("loginForm");

const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const gender = document.getElementById("gender");
const terms = document.getElementById("terms");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const genderError = document.getElementById("genderError");
const termsError = document.getElementById("termsError");

const formContainer = document.getElementById("formContainer");
const welcomeContainer = document.getElementById("welcomeContainer");
const welcomeMessage = document.getElementById("welcomeMessage");
function validateEmail() {
  const value = email.value.trim();
  const valid = value.includes("@");
  emailError.textContent = valid ? "" : "Unesite validan email.";
  console.log(valid);
  return valid;
}

function validatePassword() {
  const value = password.value.trim();
  const valid = value.length >= 6;
  passwordError.textContent = valid
    ? ""
    : "Lozinka mora imati bar 6 karaktera.";
  console.log(valid);
  return valid;
}

function validateConfirmPassword() {
  const valid = password.value === confirmPassword.value;
  confirmPasswordError.textContent = valid ? "" : "Lozinke se ne poklapaju.";
  console.log(valid);
  return valid;
}

function validateGender() {
  const valid = gender.value !== "";
  genderError.textContent = valid ? "" : "Izaberite pol.";
  console.log(valid);
  return valid;
}

function validateTerms() {
  const valid = terms.checked;
  termsError.textContent = valid ? "" : "Morate prihvatiti uslove.";
  console.log(valid);
  return valid;
}

function showWelcome(userEmail) {
  formContainer.style.display = "none";
  welcomeContainer.style.display = "block";
  welcomeMessage.textContent = `Ćao, ${userEmail}! Dobrodošao nazad.`;
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
confirmPassword.addEventListener("input", validateConfirmPassword);
gender.addEventListener("change", validateGender);
terms.addEventListener("change", validateTerms);
