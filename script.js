const menuButton = document.querySelector(".mobile-menu");
const navLinks = document.querySelector(".nav-links");

menuButton?.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

document.querySelector(".signup-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you. Your BDN interest form has been captured. Connect. Grow. Own.");
});
