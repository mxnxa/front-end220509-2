let nav = document.querySelector(".nav ul");
let btn = document.querySelector(".menu");

btn.onclick = function () {
  if (nav.classList.contains("active")) {
    nav.classList.remove("active");
  } else {
    nav.classList.add("active");
  }
};

// 팝업창
let popupBtn = document.querySelector(".popupBtn");
let popupBg = document.querySelector(".popupBg");

// popupBtn.onclick = function () {
//   popup.style.display = "none";
//   document.querySelector("body").style.overflow = "visible";
//   document.querySelector(".popupBg").style.display = "none";
// };

popupBtn.addEventListener("click", () => {
  document.body.style.overflow = "auto";
  popupBg.style.display = "none";
});

// slider
let btns = document.querySelectorAll(".slider .btns .btn");
let sliderUl = document.querySelector(".slider .sliderContainer ul");

btns.forEach(function (btn, idx) {
  btn.addEventListener("click", function () {
    sliderUl.style.transform = `translateX(${-600 * idx}px)`;
  });
});
