// --------------------------- variables ------------------------------//

let navbar = document.querySelector(".navbar");
let navMenu = document.querySelector(".nav-menu");
let body  = document.querySelector("#body")
let menuOpen = false;
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem("theme");

// --------------------------- Events --------------------------------//

navMenu.addEventListener("click", navToggleButton);

// --------------------------- Menu ----------------------------------//


function navToggleButton(e) {
  e.stopPropagation();

  if (!menuOpen) {
    navMenu.classList.add("open");
    menuOpen = true;
  } else {
    navMenu.classList.remove("open");
    menuOpen = false;
  }

  if (navbar.classList.contains("open-nav")) {
    navbar.classList.add("close-nav");
    navbar.classList.remove("open-nav");
  } else {
    navbar.classList.remove("close-nav");
    navbar.classList.add("open-nav");
  }
}

/* -------------------------------------- Dark Mode ----------------------------------------*/

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);
