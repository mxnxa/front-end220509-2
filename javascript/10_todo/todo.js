let inputText = document.querySelector("#inputText");
let btnSubmit = document.querySelector(".btnSubmit");
let todoList = document.querySelector(".todoList");

let todoArr = JSON.parse(localStorage.getItem("todoArr"));
console.log(todoArr);

render();
// render2();

// 버튼 클릭 감지!
btnSubmit.addEventListener("click", () => {
  // 1. innerHTML 사용
  // todoList.innerHTML += "<li>" + inputText.value + "</li>";
  // console.log(todoList.innerHTML);

  // 2. node 만들어서 appendChild 사용
  // let liElem = document.createElement("li");
  // let textNode = document.createTextNode(inputText.value);
  // liElem.appendChild(textNode);
  // todoList.appendChild(liElem);
  // inputText.value = ""; 등록하면 input 박스 안의 내용 사라짐.
  // inputText.focus();  등록 후에도 input 박스에 focus 유지.
  submit();
});

inputText.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) submit();
});

function submit() {
  todoArr.push({
    id: todoArr[todoArr.length - 1].id + 1,
    text: inputText.value,
  });
  let todoArrJson = JSON.stringify(todoArr);
  localStorage.setItem("todoArr", todoArrJson);

  render();
}

function render() {
  todoList.innerHTML = "";
  todoArr.forEach(function (item) {
    let liElem = document.createElement("li");
    let textNode = document.createTextNode(item.text);

    liElem.appendChild(textNode);
    todoList.appendChild(liElem);

    inputText.value = "";
    inputText.focus();
  });
}

function render2() {
  // innerHTML 사용해서 배열 출력하기
  todoArr.forEach(function (todo) {
    console.log(todo.text);

    // while (todoList.firstChild) {
    //   todoList.removeChild(todoList.lastChild);
    // }

    todoList.innerHTML += `<li>${todo.text}</li>`;

    inputText.value = "";
    inputText.focus();
  });
}

// localStorage : 저장공간. 사이트마다 개별적으로 저장한다. => 브라우저를 껐다켜도 저장되어 있다.
// key : value 형태로 저장.
// localStorage.setItem(키값, 저장하려는 데이터값)
// localStorage.getItem(키값) => 키값에 해당하는 데이터값 리턴
// localStorage.setItem("isSaved", true);

let todoArrJson = JSON.stringify(todoArr);
localStorage.setItem("todoArr", todoArrJson);
localStorage.removeItem("isSaved");
console.log(todoArrJson);

console.log(btnSubmit.dataset.buttonId);

// 버블링, 캡처링, 이벤트 위임
