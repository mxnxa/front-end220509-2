let inputText = document.querySelector("#inputText");
let btnSubmit = document.querySelector(".btnSubmit");
let todoList = document.querySelector(".todoList");
let todos;

let todoArr = JSON.parse(localStorage.getItem("todoArr"));

// dataset : 개발자가 넣고 싶은 속성을 태그에 넣을 수 있다. => 권장. 표준
// data라는 접두사 뒤에 -로 단어를 구분해서 속성명을 짓는다. => ex) <li data-todo-id>내용</li>
// 읽을 때는 카멜케이스로 읽는다. => todoId

// 버튼 클릭 감지!
btnSubmit.addEventListener("click", () => {
  console.log(btnSubmit.dataset.buttonId);
  submit();
});

// Enter 눌렀을 때 등록하기
inputText.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) submit();
});

// 1. innerHTML 사용
// todoList.innerHTML += "<li>" + inputText.value + "</li>";
// console.log(todoList.innerHTML);
// innerHTML 사용해서 배열 출력하기

function render2() {
  let todoListStr = "";
  todoArr.forEach(function (todo) {
    todoListStr += `<li data-todo-id=${todo.id}>${todo.text}</li>`;

    inputText.value = "";
    inputText.focus();
  });
  todoList.innerHTML = todoListStr;

  todos = document.querySelectorAll(".todoList li");

  // e.target : 현재 이벤트의 대상
  todos.forEach((item) => {
    item.addEventListener("click", function (e) {
      let todoId = Number(e.target.dataset.todoId);
      console.log(todoId);
      todoArr = todoArr.filter((item) => {
        return item.id !== todoId;
      });
      render2();
    });
  });
}
render2();

// 2. node 만들어서 appendChild 사용
// let liElem = document.createElement("li");
// let textNode = document.createTextNode(inputText.value);
// liElem.appendChild(textNode);
// todoList.appendChild(liElem);
// inputText.value = ""; 등록하면 input 박스 안의 내용 사라짐.
// inputText.focus();  등록 후에도 input 박스에 focus 유지.

// render() : 배열에서 값을 읽어서 li 태그로 화면에 출력
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
render();

// 화면에 출력할 데이터 추가
function submit() {
  todoArr.push({
    id: todoArr[todoArr.length - 1].id + 1,
    text: inputText.value,
  });
  let todoArrJson = JSON.stringify(todoArr);
  localStorage.setItem("todoArr", todoArrJson);

  render2();
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

// console.log(btnSubmit.dataset.buttonId);

// 버블링, 캡처링, 이벤트 위임
