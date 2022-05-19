let nav = document.querySelector(".nav2");
let btns = document.querySelector(".menu");

btns.onclick = function () {
  if (nav.classList.contains("nav2")) {
    nav.classList.remove("nav2");
  } else {
    nav.classList.add("nav2");
  }
};
