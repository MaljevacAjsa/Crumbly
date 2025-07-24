const hoverBox = document.querySelector(".headline");
const container = document.querySelector(".strawberry-container");

hoverBox.addEventListener("mouseenter", () => {
  for (let i = 0; i < 5; i++) {
    const strawberry = document.createElement("img");
    strawberry.src = "../assets/Untitled-1.png";
    strawberry.classList.add("strawberry");

    strawberry.style.left = `${Math.random() * 100}%`;

    container.appendChild(strawberry);

    setTimeout(() => {
      strawberry.remove();
    }, 900);
  }
});
