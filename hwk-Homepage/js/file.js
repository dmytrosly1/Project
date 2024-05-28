const languages = document.getElementById("languages");

languages.addEventListener("click", function (event) {
  let selectedLanguage = event.target;
  if (selectedLanguage.tagName === "P") {
    let languages = document.querySelectorAll("#languages p");
    languages.forEach(function (language) {
      if (language === selectedLanguage) {
        language.classList.add("active-lang");
      } else {
        language.classList.remove("active-lang");
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

function changeImage(x, image) {
  if (x == 1) {
    image.src = "./img/scroll-red.svg";
  }
  if (x == 2) {
    image.src = "./img/Scroll.svg";
  }
}

const serviceLink = document.querySelector(".service-link");

$(".owl-carousel").owlCarousel({
  items: 1,
  margin: 30,
});
function showContent(tabNumber) {
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".content");

  tabs.forEach((tab, index) => {
    if (index + 1 === tabNumber) {
      tab.classList.add("active-tab");
      contents[index].style.display = "block";
    } else {
      tab.classList.remove("active-tab");
      contents[index].style.display = "none";
    }
  });
}

function scrollToServices() {
  const servicesSection = document.getElementById("services");
  servicesSection.scrollIntoView({ behavior: "smooth" });
}
