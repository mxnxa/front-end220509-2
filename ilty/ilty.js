let popup = document.querySelector(".popup");
let closeBtn = document.querySelectorAll(".btns");

closeBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    popup.style.display = "none";
  });
});

$(".topNav li").on("mouseleave", function () {
  $(this).children("ul").fadeOut();
});

$(".topNav li").on("mouseover", function () {
  $(this).children("ul").fadeIn();
});
