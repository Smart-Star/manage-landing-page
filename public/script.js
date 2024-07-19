const btn = document.querySelector("#menu-btn");
const btnOpen = document.querySelector("#open-menu");
const btnClose = document.querySelector("#close-menu");
const hamburgerMenu = document.querySelector("#menu");

btn.addEventListener("click", () => {
  btnOpen.classList.toggle("hidden");
  btnClose.classList.toggle("hidden");
  hamburgerMenu.classList.toggle("flex");
  hamburgerMenu.classList.toggle("hidden");
});
