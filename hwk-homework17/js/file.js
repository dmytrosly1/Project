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
