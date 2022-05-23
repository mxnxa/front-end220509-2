// 끝말 잇기
let keyword = "컴퓨터";
const keywordText = document.getElementById("word");
const inputText = document.getElementById("inputText");
const btnSubmit = document.getElementById("btnSubmit");

keywordText.innerText = keyword;
let answerArr = [];

btnSubmit.addEventListener("click", () => {
  submit();
});

inputText.addEventListener("keydown", (e) => {
  console.dir(e);
  if (e.keyCode === 13) submit();
});

function submit() {
  let text = inputText.value;

  if (answerArr.indexOf(text) !== -1) {
    alert("이미 입력된 단어입니다.");
    inputText.value = "";
    return;
  }

  if (text[0] === keyword[keyword.length - 1]) {
    keyword = text;
    keywordText.innerText = keyword;
    answerArr.push(text);
    console.log(answerArr);
  } else {
    alert("마지막 글자와 일치하지 않습니다.");
  }
  inputText.value = "";
}
