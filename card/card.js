// 카드 4 * 3 = 12장 화면에 출력
// 처음에는 뒷면, 클릭 시 앞면
// 두 장 겹쳐서
// => perspective + rotate : 3d로 회전 or display: none;

$(".card").click(function () {
  $(this).toggleClass("active");
});
