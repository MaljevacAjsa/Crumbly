const recipeContainer = document.getElementById("recipeContainer");
const logoutBtn = document.getElementById("logout");

function logout() {
  localStorage.removeItem("userEmail");
  window.location.href = "../register/index.html";
}
logoutBtn.addEventListener("click", logout);

const urlParams = new URLSearchParams(window.location.search);
const recipeId = urlParams.get("id");

async function loadRecipe() {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
  );
  const data = await res.json();
  const recipe = data.meals[0];

  recipeContainer.innerHTML = `
    <h2>${recipe.strMeal}</h2>
    <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}" style="max-width:300px; border-radius:10px; margin:1rem 0;">
    <h3>Category: ${recipe.strCategory}</h3>
    <h4>Instructions:</h4>
    <p style="text-align:justify;">${recipe.strInstructions}</p>
  `;
}

loadRecipe();
