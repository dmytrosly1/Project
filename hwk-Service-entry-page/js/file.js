const languages = document.getElementById("languages");

languages.addEventListener("click", function (event) {
  let selectedLanguage = event.target;
  if (selectedLanguage.tagName === "P") {
    let languages = document.querySelectorAll("#languages p");
    languages.forEach(function (language) {
      if (language === selectedLanguage) {
        language.classList.add("active");
      } else {
        language.classList.remove("active");
      }
    });
  }
});

const menu = document.getElementById("menu");

menu.addEventListener("click", function (event) {
  let selectedmenu = event.target;
  if (selectedmenu.tagName === "P") {
    let menu = document.querySelectorAll("#menu p");
    menu.forEach(function (menu) {
      if (menu === selectedmenu) {
        menu.classList.add("active-menu");
      } else {
        menu.classList.remove("active-menu");
      }
    });
  }
});

document.querySelectorAll(".burger").forEach(function (burger) {
  burger.addEventListener("click", function () {
    this.classList.toggle("burger-act");
  });
});

const nav = document.getElementById("nav");

document.querySelectorAll(".burger").forEach(function (burger) {
  burger.addEventListener("click", function () {
    nav.classList.toggle("burger-act");
  });
});

nav.addEventListener("click", function (event) {
  let selectedNav = event.target;
  if (selectedNav.tagName === "LI") {
    let navItems = document.querySelectorAll("#nav li");
    navItems.forEach(function (navItem) {
      if (navItem === selectedNav) {
        navItem.classList.add("active-li");
      } else {
        navItem.classList.remove("active-li");
      }
    });
  }
});

const popupWrapper = document.querySelectorAll(".popup-wrapper");
const btnWrapper = document.querySelector(".btn-cons");

btnWrapper.addEventListener("click", function () {
  popupWrapper.forEach(function (wrapper) {
    wrapper.classList.add("active-wrapper");
  });
});

document
  .querySelectorAll(".popup-window .close, .popup-wrapper")
  .forEach(function (element) {
    element.addEventListener("click", function (event) {
      if (event.target === this) {
        document
          .querySelector(".popup-wrapper")
          .classList.remove("active-wrapper");
      }
    });
  });
