// 생성자 함수
// 생성자 : 미리 설계도를 만들어 놓고 그 설계도에 맞는 실체(인스턴스)를 만들어낸다.
// 인스턴스 : 실제로 메모리를 차지함
// 인스턴스 생성할 때는 항상 new 키워드와 함께 생성자 함수를 호출
// 참고) 디자인 패턴

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

// class는 prototype의 문법적 설탕(syntax suger) => 생성자 함수와 마찬가지로 인스턴스를 만드는 설계도
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

// 객체
function Rect(width, height) {
  this.width = width;
  this.height = height;
}

// prototype에 함수를 추가하면 앞으로 생성될 인스턴스가 사용
// => 생성자 함수가 실행 x
Rect.prototype.getArea = function () {
  return this.width * this.height;
};
// Rect.getArea();

const rect = new Rect(10, 10);
console.log(rect.getArea());

// class
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  // 인스턴스가 사용할 함수 => 일반적인 함수와 달리 function 키워드 사용 x
  // 이렇게 함수를 작성하면 prototype에 추가.
  getArea() {
    return this.width * this.height;
  }

  // static : 클래스에서 직접 사용하는 메서드(함수)와 프로퍼티(값) => 인스턴스에서 사용 불가
  static type = "사각형";
  static getType() {
    console.log("사각형입니다.");
  }
}
console.log(Rectangle.type);

const rectByClass = new Rectangle(20, 20);
console.log(rectByClass);
Rectangle.getType();

// 클래스 상속
class Animal {
  constructor(legs, speed) {
    this.legs = legs;
    this.speed = speed;
  }

  move() {
    console.log(`${this.speed}km/h로 움직입니다.`);
  }
}

// Dog 클래스가 Animal 클래스를 상속 받음 => extends 상속받을 클래스명
class Dog extends Animal {
  // constructor를 생략하면 상위 클래스의 constructor 실행
  // 프로퍼티를 추가하고 싶으면 constructor 내부에서 super() 실행
  // => constructor에 기존 상위 클래스의 인자 + 서브 클래스만의 인자를 받아야한다.
  // => super(기존 프로퍼티) + this.새로운 프로퍼티 = 서브 클래스만의 인자

  constructor(legs, speed, age) {
    // super : 상위 클래스의 constructor 실행
    // super가 먼저 실행되어야함
    super(legs, speed);
    this.age = age;
  }

  bark() {
    console.log("멍!");
  }
  // 오버라이딩 : 기존의 메서드명과 같은 메서드를 작성하면 덮어씌워진다.
  // => Animal 클래스의 move()를 덮어씌움
  move() {
    console.log("어떻게 될까요?");
  }
}

// class Human extends Animal {
//   constructor()
// }

const dog = new Dog(4, 10);
const dog2 = new Dog(4, 15, 2);
console.log(dog);
console.log(dog2);
dog.move();
dog.bark();
