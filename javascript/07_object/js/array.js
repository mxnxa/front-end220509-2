// Array : 배열 객체

let arr = [1, 2, 3]; // 배열을 만들어내는 순간에 인스턴스 생성.
// let arr2 = new Array(10);
console.log(arr.length); // 배열.length : 배열의 크기. 가지고 있는 데이터 값의 수(대체로)

// push, pop
// push : 배열의 마지막에 요소를 추가
// pop : 배열의 마지막 요소를 꺼낸다. => pop() 실행 결과로 꺼내온 요소를 return.
let selectedArr = [];
// arr.pop(); 마지막 요소인 3을 꺼내와서 return
selectedArr.push(arr.pop());
console.log(selectedArr, arr);
console.log(`arr : ${arr} selectedArr : ${selectedArr}`);

// shift, unshift
// shift : 배열의 처음 요소를 꺼낸다. => shift() 실행 결과로 꺼내온 요소를 return.
// unshift : 배열의 처음에 요소를 추가한다.

// 문제) arr의 3, 4를 꺼내서 selectedArr2에 추가
let arr2 = [3, 4, 5, 6];
let selectedArr2 = [];
selectedArr2.unshift(arr2.shift());
selectedArr2.push(arr2.shift()); // 3 다음으로 추가하기 위해 push 사용
console.log(`arr2 : ${arr2} selectedArr2 : ${selectedArr2}`);

// splice, slice
// splice : 원하는 위치에서 부터 원하는 개수(배열)를 꺼내온다(return). 데이터를 추가하는 것도 가능.
// slice : splice와 같이 꺼내오지만 기존 배열에서는 삭제하지 않는다. => 추가하는 기능은 x

let arr3 = [10, 20, 30, 40];
// console.log(arr3.splice(1)); splice()의 인자로 숫자 한 개만 넣으면 넣은 index 부터 마지막까지 꺼낸댜.
// console.log(arr3.splice(1, 1)); splice()의 두번째 인자는 삭제하고 싶은 개수.
console.log(arr3.splice(1, 1, "minha"), arr3); // splice의 세번째 인자는 추가하고 싶은 데이터
console.log(arr3.splice(1, 0, "minha"), arr3); // 추가만 하고 싶은 경우에는 두번째 인자에 0 입력

let arr4 = ["apple", "banana", "orange"];
console.log(arr4.slice(0, 1), arr4);

// 배열 고차 함수 : 함수의 인자 값으로 함수를 받거나, 함수의 return 값으로 함수를 반환하는 함수.
// addEventListener("click", function() {})

// forEach
// 배열에 있는 모든 요소를 함수의 인자로 전달하여 실행.
// 두번째 인자로 인덱스 값을 전달해준다.

let arr5 = ["apple", "banana", "orange"];

for (let i = 0; i < arr5.length; i++) {
  console.log(arr5[i] + "은 맛있습니다.");
}

arr5.forEach(function (fruit, i) {
  console.log(`${i + 1}번째 ` + fruit);
});

// map
// 배열의 각 데이터를 가공해서 새로운 배열에 담아서 return
// map 함수의 인자로 들어온 함수의 return 값을 배열에 담는다.

let arr6 = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < arr6.length; i++) {
//   arr6[i] = arr6[i] * 2;
// }

let resultArr = arr6.map(function (num) {
  return num * 2;
});
console.log(resultArr);

let a = (x) => x + 1;
console.log(a(1));

arr6.map((num) => num * 2);

// for문 안에서 배열의 각 요소를 사용
// if문을 통해서 짝수 일 때만 배열에 push.
// 담을 배열을 미리 선언

let arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenArr = [];

for (let i = 0; i < arr7.length; i++) {
  if (arr7[i] % 2 === 0) {
    evenArr.push(arr7[i]);
  }
}
console.log(evenArr);

// filter : 인자로 전달된 함수의 return 값이 true인 요소들만 배열에 담아서 배열을 return.
let evenArr2 = arr7.filter(function (num) {
  return num % 2 === 0;
});
console.log(evenArr2);
