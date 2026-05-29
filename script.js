const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

navToggle.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isOpen));
  navLinks.classList.toggle("open");
});

navLinks.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    navToggle.setAttribute("aria-expanded", "false");
    navLinks.classList.remove("open");
  }
});
