// 이벤트 : 사용자가 브라우저에서 하는 모든 행동
// ex) 마우스 클릭, 스크롤, 키보드 입력 등

let box = document.querySelector(".box");
let boxList = document.querySelectorAll(".box");
let btns = document.querySelectorAll("button");
// console.log(box);
// console.log(boxList);
// console.log(btns);
btns[0].onclick = function () {
  box.style.backgroundColor = "black";
};
btns[1].onclick = function () {
  box.style.backgroundColor = "red";
};
btns[2].onclick = function () {
  box.style.backgroundColor = "blue";
};
btns[3].onclick = function () {
  if (box.classList.contains("box")) {
    box.classList.remove("box");
  } else {
    box.classList.add("box");
  }
};

// let box = document.getElementById("box");
// box.onclick = function () {
//   alert("박스 클릭!!");
// };

// let btnClass = document.querySelector(".btnClass");
// btnClass.addEventListener("click", function () {
//   box.classList.add("box03");
// });

// 직접 이벤트를 입력하면 덮어쓴다.
btns[3].onclick = function () {
  alert("클릭");
};

// addEventListener를 하면 누적된다.
// addEventListener는 캡처링을 할지 버블링을 할지 정할 수 있다. => 3번째 인자 기본값 false
// => 3번째 false이면 버블링. => true를 입력하면 캡처링
btns[3].addEventListener("click", function () {
  if (box.classList.contains("box")) {
    box.classList.remove("box");
  } else {
    box.classList.add("box");
  }
  false;
});

btns[3].addEventListener("click", function (name) {
  console.log(name);
});
