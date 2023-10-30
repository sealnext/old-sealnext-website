document.addEventListener("DOMContentLoaded", function () {
  var menuButton = document.getElementById("menu-button");
  var navigation = document.getElementById("main-navigation");

  menuButton.addEventListener("click", function () {
    let isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", !isExpanded);
    let isHidden = menuButton.getAttribute("aria-hidden") === "true";
    navigation.setAttribute("aria-hidden", !isHidden);
  });
});
