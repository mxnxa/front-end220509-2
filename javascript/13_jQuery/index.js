console.log($);

// dom 접근 => $("선택자")
console.log($(".box")); // 클래스가 box인 요소들을 담는다.
$(".container").children().css("border", "2px solid #fff");
$(".box").parent().css("background-color", "lightblue");

// 스타일 변경 => 인라인 속성으로 스타일 추가됨.
// 인라인 속성으로 스타일 변경은 지양하는게 좋다.
// => 스타일이 겹치면 인라인 속성이 우선
// $(".box").css("background-color", "black");

// 속성 변경
// $("a").attr("href", "google.co.kr")

// 이벤트
$(".box").click(function () {
  // this에 jquery api를 적용하려면 $()로 감싸야한다.
  // if (!$(this).hasClass("lightgray")) $(this).addClass("lightgray");
  // else $(this).removeClass("lightgray");
  console.log();
  // $(this).toggleClass("lightgray");
  $(this).toggleClass("lightgray");
  $(this).fadeOut();
});

// 문자열 형태로 요소 추가
$(".container").append(`<div class="box"></div>`);

// empty() : 자식 요소를 모두 삭제
// $(".container").empty();

// eq() : nth-child()와 같다. 인덱스 0 부터 시작
$(".box").eq(3).addClass("lightgray");

// siblings() : 자신 포함 모든 형제 요소를 선택
console.log($(".box").siblings().eq(1).addClass("lightgray"));

// prev() : 이전 형제 요소 선택
console.log($(".box").eq(2).prev().css("border-color", "black"));

// 문제) 리스트 만들어서 각 아이템 클릭 시 해당 아이템 글씨 색상 변경

let arr = [
  { id: 1, text: "JavaScript" },
  { id: 2, text: "jQuery" },
  { id: 3, text: "React" },
];

arr.forEach(function (item) {
  $(".todo").append(`<li>${item.text}</li>`);
});

$(".todo li").click(function () {
  $(this).toggleClass("active");
});
