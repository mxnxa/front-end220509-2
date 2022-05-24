let userId = "test";
let userPassword = "test123";

document.querySelector(".btnSubmit").addEventListener("click", function (e) {
  // 요소가 가지고 있는 기본 기능을 실행 x => 로그인 버튼 눌러도 새로고침 x
  e.preventDefault();

  let loginId = document.querySelector(".id");
  let loginPassword = document.querySelector(".password");
  let loginBox = document.querySelector(".left");

  //   if(userId === loginId.value || )
  if (userId === loginId.value && userPassword === loginPassword.value) {
    alert("로그인 성공!");
    loginBox.innerHTML = `<h3>로그인 성공!</h3>`;
  } else {
    alert("아이디 또는 비밀번호가 일치하지 않습니다.");
  }
});

// NodeList => 유사배열이지만 배열의 forEach가 구현되어 있다.
// 여러 개 가져와 서 forEach를 쓰면 각 요소에 접근가능
// getElementsByClassName => HTMLCollection => forEach 구현 x => 배열로 바꿔서 forEach 사용 가능.
// => 스프레드 문법으로 배열로 전환 => let btnArr = [...btnsByClass]

let btns = document.querySelectorAll(".bottomWrapper a");
btns.forEach((item, idx) => {
  if ((idx + 1) % 2 === 0) {
    item.style.color = "red";
  }
});
