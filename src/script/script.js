const burger = document.getElementById("burger");
const nav = document.getElementById("nav-links");

burger.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});