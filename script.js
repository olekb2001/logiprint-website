const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const body = document.body;

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
  body.classList.toggle("menu-open");
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("active");
    body.classList.remove("menu-open");
  });
});

document.addEventListener("click", (e) => {
  if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("active");
    body.classList.remove("menu-open");
  }
});

window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");

  if (window.scrollY > 40) {
    nav.style.boxShadow = "0 8px 25px rgba(0,0,0,0.08)";
    nav.style.background = "rgba(255,255,255,0.85)";
  } else {
    nav.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    nav.style.background = "rgba(255,255,255,0.98)";
  }
});