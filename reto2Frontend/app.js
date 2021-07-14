const navToggle = document.querySelector(".nav-toggle");
const menus = document.querySelector(".menus");
const menuArray = document.querySelectorAll(".menu");

navToggle.addEventListener("click", function () {
  navToggle.classList.toggle("toggle-icon");
  menus.classList.toggle("toggle-menus");
  // close all dropdown when menus close
  if (!navToggle.classList.contains("toggle-icon")) {
    menuArray.forEach((menu) => {
      menu.classList.remove("toggle-dropdown");
    });
  }
  // close dropdown when go back to icon-hamburger
  menuArray.forEach((menu) => {
    menu.classList.remove("toggle-dropdown");
  });
});

menuArray.forEach((menu) => {
  const menuTitle = menu.querySelector(".menu-title");
  // show only one dropdown menu at a time
  menuTitle.addEventListener("click", function () {
    menuArray.forEach((element) => {
      if (element !== menu) {
        element.classList.remove("toggle-dropdown");
      }
    });
  //
    menu.classList.toggle("toggle-dropdown");
  });
});