// Date
// JS 내장 객체로 날짜 관련 속성과 함수를 포함
// 주로 인스턴스로 생성해서 사용.

console.log(Date.now()); // UTC 기준으로 1970년 1월 1일 0시 0분 0초부터 현재까지 경과된 밀리 초를 반환.
let today = new Date();
console.log(today);

console.log(new Date().getDate());

let currentYear = today.getFullYear();
let currentMonth = today.getMonth(); // getMonth()는 0(1월) 부터 11(12월)
let currentDate = today.getDate();
let currentDay = today.getDay(); // getDay()는 0(일요일) 부터 6(토요일)
let currentHours = today.getHours();
let currentMinutes = today.getMinutes();
let currentSeconds = today.getSeconds();
let currentMilliSeconds = today.getMilliseconds();

console.log(currentYear, currentMonth + 1, currentDate, currentDay + 1);
console.log(`${currentHours}시 ${currentMinutes}분 ${currentSeconds}초`);

let date = new Date("2022-01-01");

date.setFullYear(2021);
date.setMonth(2);
date.setDate(31);
date.setDate(date.getDate() + 7);
console.log(date);
console.log(date.toLocaleDateString()); // 현지 시간
console.log(date.toDateString());
