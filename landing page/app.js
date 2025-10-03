const hoverBox = document.querySelector(".headline");
const container = document.querySelector(".strawberry-container");

const logoutBtn = document.getElementById("logout");

const recipesDropdown = document.getElementById("recipes-dropdown");
const searchBox = document.getElementById("search-box");
const loginRegister = document.getElementById("login-register");

const dessertApi = `https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert`;
const dessertContainer = document.getElementById("desserts");

hoverBox.addEventListener("mouseenter", () => {
  for (let i = 0; i < 7; i++) {
    const strawberry = document.createElement("img");
    strawberry.src = "../assets/Untitled-1.png";
    strawberry.classList.add("strawberry");
    strawberry.style.left = `${Math.random() * 100}%`;
    container.appendChild(strawberry);
    setTimeout(() => strawberry.remove(), 900);
  }
});

async function fetchDesserts() {
  const res = await fetch(dessertApi);
  const data = await res.json();

  dessertContainer.innerHTML = `
    <h1 style="width:100%;color:rgb(182,23,63);text-align:center">Desserts</h1>
  `;

  data.meals.forEach((meal) => {
    const mealDiv = document.createElement("div");
    mealDiv.innerHTML = `
      <p>${meal.strMeal}</p>
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
      <button onclick="getRecipe(${meal.idMeal})">See recipe</button>
    `;
    mealDiv.classList.add("meal_div");
    dessertContainer.appendChild(mealDiv);
    dessertContainer.classList.add("desserts");
  });
}

function getRecipe(id) {
  window.location.href = `../recipe/recipe.html?id=${id}`;
}

function logout() {
  localStorage.removeItem("userEmail");
  location.reload();
}
logoutBtn.addEventListener("click", logout);
//////////////////////////////////////////////
window.addEventListener("load", () => {
  const currentUser = localStorage.getItem("currentUser");
  if (!currentUser) {
    window.location.href = "/signin/signin.html";
  }
});

document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("currentUser");
  window.location.href = "/signin/signin.html";
});
///////////////////////////////////////////////
function updateUI(isLoggedIn) {
  if (isLoggedIn) {
    fetchDesserts();
    recipesDropdown.style.display = "inline-block";
    searchBox.style.display = "flex";
    logoutBtn.style.display = "block";
    loginRegister.style.display = "none";
    dessertContainer.style.display = "flex";
  } else {
    recipesDropdown.style.display = "none";
    searchBox.style.display = "none";
    logoutBtn.style.display = "none";
    loginRegister.style.display = "inline-block";
    dessertContainer.style.display = "none";
  }
}

window.addEventListener("load", () => {
  const savedEmail = localStorage.getItem("userEmail");
  updateUI(!!savedEmail);
});
