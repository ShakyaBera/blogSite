burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
navlist = document.querySelector(".navlist");
burger.addEventListener("click", () => {
  navlist.classList.toggle("visi-class-resp");
  navbar.classList.toggle("heightNav-resp");
});
