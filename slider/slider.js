const slide = document.querySelector(".slide");
const slideImg = document.querySelectorAll(".slide img").length;
let currentIdx = 0;
// const slideCount = slideImg.length;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

function moveSlide(num) {
  slide.style.transform = `translateX(${-num * 500}px)`;
  currentIdx = num;
}

prev.addEventListener("click", function () {
  if (currentIdx !== 0) moveSlide(currentIdx - 1);
});

next.addEventListener("click", () => {
  if (currentIdx !== slideImg - 1) moveSlide(currentIdx + 1);
});

// prev.addEventListener("click", function () {
//   for (i = 0; i < slideCount; i++) {
//     slide.style.transform = `translateX(${i * 500}px)`;
//   }
// });

// slide.forEach(function (item, idx) {
//   next.addEventListener("click", function () {
//     slide.style.transform = `translateX(${-800 * idx}px)`;
//   });
// // });

// next.addEventListener("click", function () {
//   for (i = 0; i < slideCount; i++) {
//     slide.style.transform = `translateX(${i * -500}px)`;
//   }
// });
