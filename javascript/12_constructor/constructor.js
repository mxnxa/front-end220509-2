// 생성자 함수
// 생성자 : 미리 설계도를 만들어 놓고 그 설계도에 맞는 실체(인스턴스)를 만들어낸다.
// 인스턴스 : 실제로 메모리를 차지함
// 인스턴스 생성할 때는 항상 new 키워드와 함께 생성자 함수를 호출

// 생성자 함수 : 제품의 설계도
// new 생성자함수() : 실제 제품
// => ex) 자동차 => 색상, 옵션, 연식 등

// 파스칼 케이스로 작성(맨 앞 글자 대문자)
const date = new Date();
const arr = new Array(10);
const str = new String("minha");

// const arr01 = []; 리터럴 표기법을 이용한 인스턴스 생성

// 인스턴스에서 실행하는 함수와 생성자 함수를 통해 직접 실행하는 함수와 속성이 있다.
console.log(Date.now()); // 생성자 함수가 직접 호출하는 함수
console.log(date.getDate()); // 인스턴스가 호출하는 함수

// this : new 키워드를 통해 생성된 인스턴스 자체
function User(name, age) {
  this.name = name;
  this.age = age;
  type = "human";
}

const user = new User("coco", 10);
const user02 = new User("navi", 2);

// 생성자 함수가 직접 호출 => Math.floor(), Date.now()
// 정적 메서드, 정적 프로퍼티 => 생성자 함수를 통해서 접근
User.run = function () {
  console.log("달리기!");
};
User.run();

// 인스턴스가 호출 => 인스턴스의 고유한 정보를 참조할 때 사용
// => arr.map(), arr.filter()
User.prototype.greeting = function () {
  console.log(`안녕하세요. 저는 ${this.name}입니다.`);
};
user.greeting();
user02.greeting();

User.type = "human";
console.log(User.type);
console.log(user.type);

console.log(user.name);
console.log(user02.name);

// class는 prototype의 문법적 설탕(syntax suger)
class Human {
  constructor(name, age) {
    // 값 초기화
    this.name = name;
    this.age = age;
  }

  // 인스턴스가 아닌 클래스에서는 사용 가능
  static hello() {
    console.log("정적 메서드입니다.");
  }
  static country = "Korea";

  // 클래스에서는 함수 키워드(function) 사용 x
  // 인스턴스가 사용할 함수
  greeting() {
    console.log(`${this.name}입니다.`);
  }
}

const human = new Human("minha", 24);

Human.hello();
console.log(human.name);
human.greeting();
