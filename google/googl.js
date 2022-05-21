let nav = document.querySelector(".toolBox");
let btn = document.querySelector(".pointer");

btn.onmouseover = function () {
  nav.classList.add("active");
};

btn.onmouseout = function () {
  nav.classList.remove("active");
};
