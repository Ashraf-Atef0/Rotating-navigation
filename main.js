let container = document.querySelector(".container");
let circle = document.querySelector(".nav-circle");
let openNav = document.querySelector(".nav-circle .open");
let closeNav = document.querySelector(".nav-circle .close");
let navList = document.querySelector("nav ul");

console.log(closeNav);
openNav.onclick = () => {
  container.classList.add("show-nav");
  circle.classList.add("active");
  navList.classList.add("active");
};
closeNav.onclick = () => {
  container.classList.remove("show-nav");
  circle.classList.remove("active");
  navList.classList.remove("active");
};
