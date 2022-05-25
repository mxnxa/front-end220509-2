// 함수 : 여러 명령들을 한번에 실행할 수 있는 코드 블록
// 원하는 시점에 실행 가능. => 재상용성 용이

// 1. 함수 선언식(기명 함수) => 함수 호이스팅 발생
// 작성 방법 : function 함수이름() { 코드 작성 };

func();
function func() {
  console.log("나는 함수 선언식");
}
func();

// 2. 함수 표현식(익명 함수) => 함수(코드블록) 호이스팅 발생 x => 변수만 호이스팅

var func2 = function () {
  console.log("나는 함수 표현식");
};
func2();

// 3. 화살표 함수
//  1) 함수 호이스팅 x
//  2) this 바인딩 x

var func3 = () => {
  console.log("나는 화살표 함수");
};
func3();

// 매개변수(parameter)
// 함수 안에서 사용할 수 있는 값 => 함수를 실행할 때 () 안에 입력
// 실제로 매개변수에 입력되는 값 => 인자(argument)
// 매개변수는 원하는 만큼 선언 => 매개변수와 인자의 개수가 달라도 오류 발생 x
// (a = 3) => 매개변수 a에 아무 값도 입력하지 않았을 때 기본값 3으로 사용

// function sum(a, b, c = 3) {
//   console.log(a + b + c);
// }
// sum(1, 3, 5, 7);
// sum(5, 7);

// return
// 함수 실행 결과를 반환
// return 이후의 코드는 실행되지 않음.

function sub(a, b) {
  return a - b;
  console.log("함수 실행 끝!");
}
let result = sub(3, 2);
console.log(result);

// 함수 문제
// 점수 3개 입력시 평균 점수를 구해주는 함수.
// 더하기와 나누기를 분리.

function avgScore(korean, math, english) {
  return (korean + math + english) / 3;
}

function sumScore(korean, math, english) {
  return korean + math + english;
}

function devideScore(score) {
  return score / 3;
}

let result2 = devideScore(sumScore(50, 30, 20));
console.log(result2);

// 스코프
// 지역 변수와 전역 변수
// 1. 지역 변수 : 유효 범위(스코프) 내에서만 사용 가능한 변수
// 2. 전역 변수 : 어디서든 사용 가능한 변수
// 클로저 추후에 공부 추천 => 공부하면 면접에 유리

function sumString(str) {
  let greetingStr = "안녕하세요. "; // 지역 변수
  console.log(result);
  if (true) {
    let innerStr = "출력될까요?";
    console.log(innerStr);
    console.log(greetingStr);
  }
  return greetingStr + str + "님";
}
console.log(sumString("송민하"));

// 즉시 실행 함수
// 클로저에 사용
let resultNum = (function () {
  let num = 1;
  return function () {
    num++;
    console.log(num);
  };
})();
resultNum();
resultNum();
resultNum();
resultNum();

// var
// 함수 코드 블록 안에서 선언시에는 코드 블록 밖에서는 사용 불가
// 일반 코드 블록 안에서 선언시에는 코드 블록 밖에서도 사용 가능.
function double(a) {
  var varNum = 2;
  return a * varNum;
}
{
  let firstNum = 1;
  var secondNum = 2;
}
console.log(secondNum);
// console.log(varNum);
// console.log(firstNum);

// 함수 : 어떠한 작업을 하기 위해 독립적으로 미리 작성된 코드 => 코드블록으로 작성
// => 개발자가 원하는 때에 실행 가능
// 반복적으로 같은 코드를 작성하는 것을 피할 수 있다.

// 함수 호이스팅
// 호이스팅 o : 함수선언식
// 호이스팅 x : 함수표현식, 화살표함수

// 매개변수의 순서, 개수를 잘 지켜야한다.
// 매개변수의 이름을 잘 지어야 다른 사람이 봤을 때 무슨 함수인지 알 수 있다.

function 더하기(숫자1, 숫자2) {
  return 숫자1 + 숫자2;
}
더하기(1, 2);

function getFullName(firstName, lastName) {
  return lastName + firstName;
}
console.log(getFullName("minha", "song "));

// 함수 안에서 자기자신(함수)를 호출 할 수 있다.
function 재귀함수(num) {
  if (num <= 1) {
    return 1;
  }
  return num + 재귀함수(num - 1);
}
console.log(재귀함수(100));

function outer() {
  console.log("바깥 함수...");
  inner();
  console.log("바깥 함수 끝...");
}

function inner() {
  console.log("안쪽 함수...");
  last();
  console.log("안쪽 함수 끝...");
}

function last() {
  console.log("마지막 함수...");
}
outer();

// 부록) 스택, 큐, 이벤트 루프

// NodeList : 요소를 배열처럼 담는다.
// [node, node, node];
// document.querySelectorAll("li");
// 잘못된 문법
// [node, node, node].style.display = "none";

// 맞는 문법 => 각 인덱스로 접근 적용을 하면 잘 되지만 번거롭다.
// node[0].style.display = "none";
// node[1].style.display = "none";
// node[2].style.display = "none";

// 노드리스트.forEach

// 클로저
// 하위 스코프에서 상위 스코프의 값을 참초 하고 있으면
// 상위 스코프의 생명주기가 끝나도 참조하고 있는 값이 사라지지 않는다.
// 직접 접근하지 못하기 때문에 캡슐화 할 수 있다.

function 클로저() {
  let num = 0;
  return function (type) {
    if (type === "increase") {
      num++;
    } else if (type === "decrease") {
      num--;
    }
    console.log(num);
  };
}

let 클로저함수 = 클로저();
클로저함수("increase");
클로저함수("increase");
클로저함수("increase");
클로저함수("increase");
클로저함수("decrease");
클로저함수("decrease");
클로저함수("decrease");
