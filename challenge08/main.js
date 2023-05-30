const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const header = document.querySelector("header");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav--visible");
  header.classList.toggle("absolute");
});
