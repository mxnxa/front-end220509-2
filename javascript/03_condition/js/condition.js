// 조건문 : 조건에 따라 코드 블록 안에 있는 코드들을 전부 실행.
// 1. if
//  1) 조건문 () 안의 값이 true면 if의 코드 블록, false면 else에 있는 코드 블록을 실행.
//  2) else if를 통해 조건을 여러 개 사용할 수 있다.

// 나이 계산하기
// var birthYear = 1979;
// var currentYear = 2022;
// var age = currentYear - birthYear + 1;
// if (age >= 40) {
//   if (age > 45) {
//     alert("당신은 40대 후반입니다.");
//   } else {
//     alert("당신은 40대입니다.");
//   }
// } else if (age >= 30) {
//   alert("당신은 30대입니다.");
// } else {
//   alert("당신은 30대도 40대도 아닙니다.");
// }

//문제) 3의 배수인지 확인하기. prompt("숫자를 입력하세요.", "");
// var num = prompt("숫자를 입력하세요.", "");

// if (num === null) {
//   document.write("숫자를 입력하지 않았습니다.");
// } else if (num % 3 === 0) {
//   document.write("3의 배수입니다.");
// } else {
//   document.write("3의 배수가 아닙니다.");
// }

// 2. switch : switch는 실행할 명령이 많을 때 사용. => 처리해야할 분기점이 많을 때.
// 괄호 안에 있는 값과 case의 값을 비교해서 값이 같다면 해당 case의 코드를 실행.
// 해당하는 case 코드를 실행한 후에 다음 case들도 모두 실행. => break를 사용해서 탈출.

// var num = prompt("숫자를 입력하세요.", "");

// switch (num) {
//   case "1": {
//     alert("숫자 1입니다.");
//     break;
//   }
//   case "2": {
//     alert("숫자 2입니다.");
//     break;
//   }
//   case "3": {
//     alert("숫자 3입니다.");
//     break;
//   }
//   default: {
//     alert("숫자가 범위에 해당되지 않습니다.");
//   }
// }

// switch 문제)
// score는 0 ~ 100
// 90점 이상은 A, 80점 이상은 B, 70점 이상은 C, 60점 이상은 D, 그 미만은 F

var score = Number(prompt("점수를 입력하세요.", ""));
// ceil, round, floor => 올림, 반올림, 내림
console.log(Math.floor(score / 10));

switch (Math.floor(score / 10)) {
  case 10: {
    alert("만점입니다.");
    break;
  }
  case 9: {
    alert("A등급 입니다.");
    break;
  }
  case 8: {
    alert("B등급 입니다.");
    break;
  }
  case 7: {
    alert("C등급 입니다.");
    break;
  }
  case 6: {
    alert("D등급 입니다.");
    break;
  }
  default: {
    alert("F등급 입니다.");
    break;
  }
}
