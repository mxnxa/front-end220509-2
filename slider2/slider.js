const slides = document.querySelector(".slides");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const slideImg = document.querySelectorAll(".slides li");
const count = slideImg.length;
let currentIdx = 0;

function moveSlide(num) {
  slides.style.transform = `translateX(${800 * -num}px)`;
  currentIdx = num;
}

prev.addEventListener("click", function () {
  if (currentIdx !== 0) moveSlide(currentIdx - 1);
});

next.addEventListener("click", function () {
  if (currentIdx !== count - 1) moveSlide(currentIdx + 1);
});
