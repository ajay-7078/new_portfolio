const heading = document.querySelector(".hero-text h1");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header-sec_inner");

window.addEventListener("load", (e) => {
  heading.style.transition = "0.8s ease";
  heading.style.opacity = 1;
  heading.style.transform = "translateY(0)";
});

// Hamburger Menu Toggle
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close menu when a link is clicked
document.querySelectorAll(".header-sec_inner ul li a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

