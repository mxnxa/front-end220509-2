let container = document.querySelector(".container");
let boxElem = document.createElement("div");
let boxText = document.createTextNode("박스");

boxElem.classList.add("box");
boxElem.appendChild(boxText);
container.appendChild(boxElem);

// 요소 삭제
// parentNode를 통해 부모 요소에 접근하여 removeChild(삭제할 자식 요소 노드)로 삭제

// container.removeChild(boxElem);
// let child = document.querySelector(".box");
// boxElem.parentNode.removeChild(child);
// boxElem.parentNode.removeChild(boxElem);
