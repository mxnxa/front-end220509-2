// 1. 삼항 연산자
// 조건 ? "true일 경우" : "false일 경우"
// 조건이 맞으면 ? 뒤의 값이, 틀리면 : 뒤의 값이 return

let num = 2;
let type = num % 2 === 0 ? "짝수" : "홀수";
console.log(type);

num % 2 === 0 ? console.log("짝수입니다.") : console.log("홀수입니다.");

// 2. 단축 평가(논리 연산자 사용)
// && (and) : 앞의 조건이 true인 경우만 뒤에 코드 실행
// || (or) : 첫번째 값이 truty한 값이면 앞의 값을, falsy한 값이면 뒤의 값을 할당(return)

// let result = true && "값";
// console.log(result);

let obj = {
  name: undefined,
};

let result2 = obj.name || "이름 없음";
console.log(result2);

// 3. 비구조화 할당
// const { 키값1, 키값2 } = 객체 => 객체에 키값1과 키값2가 있다면 할당
// 변수로 사용 가능
// 배열도 사용 가능 => 순서로 구분

const dog = {
  name: "coco",
  age: 3,
  bark: function () {
    console.log("멍!");
  },
};
const { name, age } = dog;
console.log(name, age);

let arr = ["minha", "coco"];
let [minha, coco] = arr;
console.log(minha);

// 4. spread

// 배열 앞에 ...을 붙이면 값을 모두 나열
// ...[1, 2, 3, 4] => 1, 2, 3, 4
// Math.max()는 인자를 숫자로 받는다. => 배열을 받으면 Nan;
// Math.max(...arr) => Math.max(1, 2, 3, 4)

let numArr = [1, 2, 3, 4, 5];
let copy = [...numArr];

console.log(copy);
console.log(Math.max(...numArr));

function getTotal(...nums) {
  // 매개변수 앞에 ...을 붙이면 값이 몇개이던 배열로 받아온다.
  console.log(nums);
}

// 5. rest
// 매개변수를 몇개를 넣던 배열로 다 담아준다.

// 매개변수를 넣은 만큼 num이라는 배열로 담아준다.
// num은 배열이기 때문에 배열의 고차함수인 reduce 활용
// ...num => spraed 문법을 통해서 다시 num을 나열할 수 있다.
// rest는 매개변수의 마지막 순서로 와야한다.
// rest 앞에 매개변수를 선언하면 그 개수만큼은 rest에 담기지 않는다.
function getTotal(...num) {
  console.log(num);
  return num.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);
}
console.log(getTotal(1, 2, 3, 4, 5, 6, 7));

// 6. Promise
// 비동기 처리 함수 => 비동기 코드를 동기 처럼 처리 가능
// 비동기 처리가 끝난 다음에 실행 결과에 따라 resolve(성공)와reject(실패) 실행
// resolve와 reject 첫번째 매개변수로 결과값을 담으면 promiss.then(결과 값)으로 꺼내서 사용할 수 있다.
// catch 함수를 통해서 에러처리를 할 수 있다.

let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(3);
  }, 3000);
});

// 비동기 처리가 끝난 후에 then() 실행됨 => 비동기를 동기처럼 처리
// promise
//   .then(function (res) {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// 7. async, await
// async : 비동기처리 하고 싶은 함수 앞에 붙는 키워드
// 함수 내의 return 값을 promise에 result 값으로 담아서 promise를 리턴
// await : 비동기처리를 기다려준다.

// async function getInfo() {
//   let result = await promise;
//   return result;
// }

// console.log(
//   getInfo().then(function (res) {
//     console.log(res);
//   })
// );

let songList = [
  {
    id: 1,
    title: "달라달라",
  },
  {
    id: 2,
    title: "휘파람",
  },
  {
    id: 3,
    title: "Loco",
  },
];

function getSong(title) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      let [result] = songList.filter((song) => {
        return song.title === title;
      });
      resolve(result.id);
    }, 1000);
  });
}

function getSongDetail(id) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      let [result] = songList.filter((song) => song.id === id);
      resolve(result);
    }, 2000);
  });
}

getSong("휘파람").then((res) =>
  getSongDetail(res).then((res) => console.log(res))
);

async function getData(title) {
  let id = await getSong(title);
  let detail = await getSongDetail(id);
  return detail;
}

getData("Loco").then((res) => {
  console.log(res);
});

// 데이터 받아오는 함수. 1초 => .then으로 출력

let getProduct = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({
      title: "iphon",
      version: 12,
    });
  }, 1000);
});

let resultElem = document.querySelector(".result");
getProduct.then((res) => {
  resultElem.innerHTML = `<p>제품명 : ${res.title + res.version}</p>`;
});
