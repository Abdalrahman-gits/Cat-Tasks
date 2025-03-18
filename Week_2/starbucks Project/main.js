// Hamburger Icon 
let icon = document.querySelector(".ham-icon");
let menu = document.querySelector(".mega-menu");


function menuIcon() {
  icon.classList.toggle("open");
  menu.classList.toggle("active");
  document.body.classList.toggle("noscroll")
}

icon.onclick = menuIcon;

