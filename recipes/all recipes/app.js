const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    const recipeIds = [
      "oreo_cupcakes",
      "blueberry_peach_pie",
      "cookie_dough_truffles",
      "banana_baked_oatmeal",
      "strawberry_cupcakes",
      "oatmeal_cream_pies",
      "blueberry_oatmeal_muffins",
    ];

    const recipeId = recipeIds[index];

    window.location.href = `recipe.html?id=${recipeId}`;
  });
});

const openBtn = document.getElementById("addRecipeBtn");
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".modal-content .close");
const saveRecipe = document.getElementById("saveRecipe");

openBtn.addEventListener("click", () => {
  modal.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("active");
  }
});

saveRecipe.addEventListener("click", () => {
  const div = document.createElement("div");
  const title = document.createElement("div");
  const text = document.createElement("div");
});
