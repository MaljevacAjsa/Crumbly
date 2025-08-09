// Selektuj sve kartice
const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    // Dodeljujemo ID recepta (isti redosled kao u JSON-u)
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

    // Prebacujemo ID recepta u URL
    window.location.href = `recipe.html?id=${recipeId}`;
  });
});
