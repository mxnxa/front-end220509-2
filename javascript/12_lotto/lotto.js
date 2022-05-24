let selectedNum = [];
let lottoNumBox = document.querySelector(".lottoNumBox");

while (selectedNum.length < 6) {
  // Math.random() : 0 ~ 1 사이의 실수를 반환 => 44를 곱해서 0 ~ 44 범위. 1을 더해 1 ~ 45
  // Math.floor() : 내림
  let num = Math.floor(Math.random() * 45) + 1;
  if (selectedNum.indexOf(num) === -1) {
    selectedNum.push(num);
  }
}

selectedNum.sort(function (a, b) {
  // return 값이 양수냐 음수냐에 따라 정렬
  // 내림차순 => b - a 값이 역전. 정렬도 반대
  return a - b;
});
console.log(selectedNum);

// Array.prototype.reduce : 누산값, 현재값을 함수의 매개변수로 넣어준다. 두번째 인자는 초기값
let result = selectedNum.reduce((a, b) => {
  return a + b;
}, 0);
console.log(result);

selectedNum.forEach(function (num) {
  lottoNumBox.innerHTML += `<div class="lottoNum">${num}</div>`;
});

// 배열 관련 함수 => forEach, map, filter

// 문제) 배열함수로 id: 3 아이템 빼고 남기기. 골라내는 함수.
/* 
  결과
    let resultArr = [
      { id: 1, text: "HTML" },
      { id: 2, text: "CSS" },
      { id: 4, text: "React" },
    ];
*/

let arr = [
  { id: 1, text: "HTML" },
  { id: 2, text: "CSS" },
  { id: 3, text: "JavaScript" },
  { id: 4, text: "React" },
];

console.log(arr);
for (let i = 0; i < arr.length; i++) {
  if (arr[i].id === 3) arr.splice(i, 1);
}
console.log(arr);

// filter : 조건의 참, 거짓을 반환 => return 사용.
let resultArr = arr.filter(function (item) {
  return item.id !== 3;
});
console.log(resultArr);

// let resultArr = arr.filter((a) => {
//   return a.id !== 3;
// });
// console.log(resultArr);
