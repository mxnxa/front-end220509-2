$(".topNav li").on("mouseleave", function () {
  $(this).children("ul").fadeOut();
});

$(".topNav li").on("mouseover", function () {
  $(this).children("ul").fadeIn();
});
