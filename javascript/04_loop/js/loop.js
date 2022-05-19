// 1. for문
// for (초기값; 조건; 증감식;)
// 조건에 충족하면 다음 명령 실행. => 증감식 실행.

// <1 ~ 1000까지 더하기>
// var num = 0;
// for (var i = 1; i <= 1000; i++) {
//   num += i;
// }
// document.write(num);

// <for문 중첩>
// for (var i = 0; i < 10; i++) {
//   for (var j = 0; j < 4; j++) {
//     console.log(i, j);
//   }
// }

// <구구단>
// document.write("<h1>구구단</h1>");
// for (var i = 2; i <= 9; i++) {
//   document.write("<h3>" + i + "단</h3>");
//   for (var j = 1; j <= 9; j++) {
//     document.write(i + " * " + j + " = " + i * j + "<br>");
//   }
// }

// 2. while문
// () 안에 있는 값이 true이면 계속 반복.
// 특정 조건에서 while문 안에서 boolean 값을 바꿔서 반복문을 종료. => ex) 특정 버튼 클릭
// break를 통해 while문 탈출
// continue를 통해서 한 번만 건너뜀

// var i = 0;
// while (i < 10) {
//   i++;
//   if (i == 3) continue;
//   console.log(i);
// }

// while문 문제
// 0 ~ 20까지의 수 중에 짝수만 출력 => 0은 출력 x
// var num = 0;
// while (num <= 20) {
//   if (num === 0) {
//     num += 1;
//     continue;
//   }
//   if (num % 2 === 0) {
//     console.log(num);
//   }
//   num++;
// }

// while문 문제2
// 팩토리얼(!) 계산
// var num2 = Number(prompt("숫자를 입력하세요."));
// var i = 1;
// var result = 1;

// while (i <= num2) {
//   result *= i;
//   i++;
// }
// console.log(num2 + "! =", result);

var isPaused = false;
while (!isPaused) {
  isPaused = confirm("멈출래?");
}
