document.addEventListener("DOMContentLoaded", () => {
  const sidenav = document.querySelectorAll(".sidenav");
  const sidenavInstance = M.Sidenav.init(sidenav, {});

  const parallax = document.querySelectorAll(".parallax");
  const parallaxInstance = M.Parallax.init(parallax, {});

  const collapsible = document.querySelectorAll(".collapsible");
  const collapsibleInstance = M.Collapsible.init(collapsible, {});
});

const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

$("document").ready(function () {
  const name = prompt("¿Cuál es tu nombre?");

  document.getElementById("welcome-name").innerHTML = `!Bienvenido ${name}!`;
});
