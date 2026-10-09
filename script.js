/* ========================================
   KHEM AIR PORTFOLIO JAVASCRIPT
   ======================================== */


// ========================================
// MOBILE MENU
// ========================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

  navLinks.classList.toggle("active");

  const icon = menuBtn.querySelector("i");

  if (navLinks.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }

});


// Close menu after clicking navigation link

document.querySelectorAll(".nav-links a").forEach(link => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("active");

    const icon = menuBtn.querySelector("i");

    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");

  });

});


// ========================================
// DARK / LIGHT MODE
// ========================================

const themeBtn = document.getElementById("themeBtn");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light");

  themeBtn.innerHTML =
    '<i class="fas fa-sun"></i>';
}


themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("light");

  const isLight =
    document.body.classList.contains("light");

  localStorage.setItem(
    "theme",
    isLight ? "light" : "dark"
  );

  themeBtn.innerHTML = isLight
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';

});


// ========================================
// SCROLL REVEAL
// ========================================

const revealElements =
  document.querySelectorAll(".reveal");


const revealObserver =
  new IntersectionObserver(
    (entries, observer) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("show");

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );


revealElements.forEach(element => {

  revealObserver.observe(element);

});


// ========================================
// CONTACT FORM
// ========================================

const contactForm =
  document.getElementById("contactForm");

const formMessage =
  document.getElementById("formMessage");


contactForm.addEventListener("submit", function(event) {

  event.preventDefault();

  const name =
    document.getElementById("name").value.trim();

  if (!name) {
    formMessage.textContent =
      "Please enter your name.";

    return;
  }

  formMessage.textContent =
    `Thanks ${name}! Your message has been received.`;

  contactForm.reset();

});


// ========================================
// CURRENT YEAR
// ========================================

document.getElementById("year").textContent =
  new Date().getFullYear();


// ========================================
// ACTIVE NAVIGATION
// ========================================

const sections =
  document.querySelectorAll("section[id]");

const navigationLinks =
  document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

  let currentSection = "";

  sections.forEach(section => {

    const sectionTop =
      section.offsetTop - 150;

    const sectionHeight =
      section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }

  });


  navigationLinks.forEach(link => {

    link.classList.remove("active");

    if (
      link.getAttribute("href") ===
      `#${currentSection}`
    ) {
      link.classList.add("active");
    }

  });

});