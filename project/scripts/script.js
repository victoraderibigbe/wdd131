const menuButton = document.querySelector("#menu");
const navItems = document.querySelector(".nav-items");

menuButton.addEventListener("click", () => {
  navItems.classList.toggle("open");
  menuButton.classList.toggle("open");
});
