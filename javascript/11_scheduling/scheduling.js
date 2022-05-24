// setTimeout(함수, 시간(ms))
// 두번째 인자에 입력한 시간이 지나고 첫번째 인자로 입력한 함수 실행.
// => 비동기적(asynchronous)으로 작동

// setInterval은 계속 반복
// setTimeout, setInterval을 실행하면 id 값을 return
// clearTimeout, clearInterval : 해당 id값을 인자로 실행하면 더 이상 실행되지 않는다.

// 동기적 코드 : 코드 순서대로 실행
// 비동기적 코드 : 동시에 실행(병렬)
// JavaScript는 비동기적인 코드 실행 불가 => 브라우저가 비동기적 실행 도와줌

// 디바운스 : 일정 시간 안에 입력하면 clearTimeout을 하고 바로 다시 setTimeout을 등록해서 마지막 입력만 실행
// 스로틀링 : 일정 시간 동안은 이벤트 감지돼도 실행 x. 그 이후 시간에 이벤트가 감지되면 실행

let timeoutId = setTimeout(function () {
  console.log("3초 경과");
}, 3000);

function foo() {
  console.log("foo 함수 실행");
}
foo();

let timeId = setInterval(function () {
  console.log("1초마다 실행");
}, 1000);

document.querySelector(".btnStop").onclick = function () {
  console.log("stop");
  clearInterval(timeId);
  clearTimeout(timeoutId);
};
