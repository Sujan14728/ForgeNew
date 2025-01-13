document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const mobileMenu = document.querySelector(".mobile-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const contactButton = document.querySelector(".btn-orange");
  const closeMenu = document.querySelector(".close-menu");
  document.addEventListener("scroll", () => {
    const navbar = document.querySelector("nav");
    if (window.scrollY > 80) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Toggle mobile menu visibility
  hamburgerMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
    mobileMenu.classList.toggle("hide");
  });
  closeMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
    mobileMenu.classList.toggle("hide");
  });

  // Close mobile menu on link or button click
  [...navLinks, contactButton].forEach((element) => {
    element.addEventListener("click", () => {
      mobileMenu.classList.add("hide");
      mobileMenu.classList.remove("show");
    });
  });
});
