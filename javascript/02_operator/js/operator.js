// 1. 산술 연산자(숫자) : +, -, /, *, %, ++, --
var num = 10;
console.log("num + 10 =", num + 10);
console.log("num - 10 =", num - 10);
console.log("num * 3 =", num * 3);
console.log("num / 2 =", num / 2);
console.log("num % 3 =", num % 3);

// 증감 연산자
// num++ : num = num + 1;
// ++의 순서에 따라 값을 대입하는 시기가 달라진다.
console.log("++num =", ++num);
console.log("num =", num);

// var num = 10;
// console.log(num++); => console.log(10) 실행 => num = num + 1 => 11
// console.log(num--); => console.log(11) 실행 => num = num - 1 => 10

// console.log(++num); => num = num + 1 => console.log(11) 실행
// console.log(--num); => num = num - 1 => console.log(10) 실행

// 2. 할당 연산자 : 우항의 값을 계산하여 할당한다.
var newNum = 100; // 100;
newNum += 10; // 110; num = num + 10;
newNum -= 20; // 90;
newNum *= 2; // 180;
newNum /= 3; // 60;
console.log("newNum =", newNum);

// 3. 연결 연산자(문자) : '+' => 문자열을 연결한다.
console.log("나는 " + "송민하다.");

// 4. 비교 연산자 : 좌항과 우항을 비교하여 참이면 true, 거짓이면 false 반환
console.log("======== 비교 연산자 ========");
console.log("3 == 2", 3 == 2);
console.log('3 == "3"', 3 == "3"); // 자료형 무시 => 똑같은 3이네. => true : 암묵적 형변환
console.log('3 === "3"', 3 === "3"); // 자료형까지 비교 => false
console.log('3 != "3"', 3 != "3"); // false
console.log('3 !== "3"', 3 !== "3"); // true
console.log("3 > 2 + 2", 3 > 2 + 2);
console.log("3 < 4", 3 < 4);
console.log("3 >= 3", 3 >= 3);

var obj1 = {
  name: "minha",
};
var obj2 = {
  name: "minha",
};

console.log(obj1 == obj2); // false : 주소가 다른 객체 두 개가 생성되기 때문

// 5. 논리 연산자 : true와 false를 처리하는 연산자
// ! : 피연산자가 false => true. boolean 값을 뒤집는다.
// && : 피연산자 모두 true일 때 => true => 둘 중 하나라도 false이면 false.
console.log("======== 논리 연산자 ========");
console.log("!true", !true);
console.log("true && true", true && true);
console.log("3 > 2 && 4 > 2 * 3", 3 > 2 && 4 > 2 * 3);
console.log("3 < 4 && !(3 > 2 + 5)", 3 < 4 && !(3 > 2 + 5));
console.log(true || false);
