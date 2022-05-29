let nav = document.querySelector(".nav ul");
let btn = document.querySelector(".menu");

btn.onclick = function () {
  if (nav.classList.contains("active")) {
    nav.classList.remove("active");
  } else {
    nav.classList.add("active");
  }
};

// 팝업창
let popupBtn = document.querySelector(".popupBtn");
let popupBg = document.querySelector(".popupBg");

// popupBtn.onclick = function () {
//   popup.style.display = "none";
//   document.querySelector("body").style.overflow = "visible";
//   document.querySelector(".popupBg").style.display = "none";
// };

popupBtn.addEventListener("click", () => {
  document.body.style.overflow = "auto";
  popupBg.style.display = "none";
});

// slider
let btns = document.querySelectorAll(".slider .btns .btn");
let sliderUl = document.querySelector(".slider .sliderContainer ul");

btns.forEach(function (btn, idx) {
  btn.addEventListener("click", function () {
    sliderUl.style.transform = `translateX(${-800 * idx}px)`;
  });
});

// login
document.querySelector(".loginBtn").addEventListener("click", function (e) {
  e.preventDefault();

  let userId = "test";
  let userPw = "test123";
  let id = document.querySelector(".id");
  let pw = document.querySelector(".pw");
  let user = [];

  if (userId === id.value && userPw === pw.value) {
    alert("로그인 성공!");
  } else if (userId !== id.value && userPw !== pw.value) {
    alert("아이디와 비밀번호가 일치하지 않습니다.");
  } else if (userId !== id.value) {
    alert("아이디가 일치하지 않습니다.");
  } else if (userPw !== pw.value) {
    alert("비밀번호가 일치하지 않습니다.");
  }

  user = [id.value, pw.value];
  console.log(user);

  id.value = "";
  pw.value = "";
  id.focus();
});
