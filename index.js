const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");
const visible = document.querySelector("nav");

menuToggle = addEventListener("click", function () {
  nav.classList.toggle("slide");
  visible.classList.toggle("visible");
});
