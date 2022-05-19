let nav = document.querySelector(".nav ul");
let btn = document.querySelector(".menu");

btn.onclick = function () {
  if (nav.classList.contains("active")) {
    nav.classList.remove("active");
  } else {
    nav.classList.add("active");
  }
};
