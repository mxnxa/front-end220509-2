const slides = document.querySelector(".slides");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const count = document.querySelectorAll(".slides li").length;
let currentIdx = 0;

function moveSlide(num) {
  slides.style.transform = `translate(${-800 * num}px)`;
  currentIdx = num;
}

prev.addEventListener("click", () => {
  if (currentIdx !== 0) moveSlide(currentIdx - 1);
});

next.addEventListener("click", () => {
  if (currentIdx < count - 1) moveSlide(currentIdx + 1);
});
