// getElement는 querySelector와 달리

document.getElementById("box").style.backgroundColor = "black";
let boxList = document.getElementsByClassName("box");
console.dir(boxList);
boxList[0].style.backgroundColor = "blue";
boxList[1].style.backgroundColor = "tomato";

// call : 첫번째 인자로 넣은 유사배열을 배열처럼 사용할 수 있게 해준다.
// => 예전에 사용하던 방식으로 꼭 이해할 필요는 없음
Array.prototype.forEach.call(boxList, function (item) {
  item.style.backgroundColor = "black";
});

// from : es6에서 추가됨.
Array.from(boxList).forEach(function (item) {
  //   console.log(item);
});

// 스프레드 문법 : 배열 안에 요소들을 펼친다.
let arr = [1, 2, 3, 4];
let copy = [...boxList];
console.log(copy);

copy.forEach(function (item) {
  console.log(item.classList);
});

let img = document.querySelector(".img");
let btnChange = document.querySelector(".btnChange");

btnChange.onclick = changeBox; // 함수 호출이 아니라 함수를 값으로 할당. => 함수 호출을 하면 버튼을 누르지 않아도 함수가 호출되어 이미지 나타남.

function changeBox() {
  copy.forEach(function (item) {
    item.style.width = "300px";
  });
  img.src = "../../12/images/1.jpg";
  img.width = "300";
}

// typescript : JS + 타이핑(타입 지정)
// let str: string; => 다른 타입의 데이터 넣으면 오류

// innerText => 요소 안에 글씨를 입력. => 요소 안의 자식요소를 비우고 새로 입력된다.
// innerHTML => innerText와 다르게 문자열 안에 태그명을 입력하면 해당태그를 추가.
// 태그안에 속성 입력 가능.

let btnSubmit = document.querySelector(".btnSubmit");
btnSubmit.addEventListener("click", function () {
  document.querySelector(".textContainer").innerText =
    "<p>글씨가 추가됩니다.</p>"; // 태그명을 입력해도 텍스트로 추가
  // 상단 코드의 innerText 를 비우고 h2태그 추가.
  document.querySelector(".textContainer").innerHTML =
    "<h2 class='title'>h2태그추가</h2>";
});
