let slides = document.querySelectorAll(".slides img");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let current = 0;

slideShow(current);

function slideShow(current) {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slides[current].style.display = "block";
  console.log(current);
}

prev.onclick = () => {
  if (current > 0) current -= 1;
  else current = slides.length - 1;
  slideShow(current);
};

next.onclick = () => {
  if (current < slides.length - 1) current += 1;
  else current = 0;
  slideShow(current);
};

// prev.addEventListener("onclick", () => {
//   if (current > 0) current -= 1;
//   else current = slides.length - 1;
//   console.log(current);
// });
