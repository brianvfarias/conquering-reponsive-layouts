const openList = document.querySelector(".open-list");
const nav = document.querySelector("nav");
const navList = document.querySelector(".nav-list");
const icon = document.querySelector("i.ph");

function toggleList() {
  nav.classList.toggle("inactive");
  navList.classList.toggle("inactive");

  if (icon.classList.contains("ph-list")) {
    icon.classList.add("ph-x-square");
    icon.classList.remove("ph-list");
  } else {
    icon.classList.add("ph-list");
    icon.classList.remove("ph-x-square");
  }
}

openList.addEventListener("click", toggleList);
