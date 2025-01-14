//2개가 다 짝수이면 => 모두 짝수.
// 1개 짝수 => "하나는 짝수입니다."
// 0게 => 짝수는 없스니다,

let valiable1 = prompt('숫자1')
let valiable2 = prompt('숫자2')
if (valiable1 % 2 == 0 && valiable2 % 2 == 0) {
  console.log('모두가짝수')
} else if (valiable1 % 2 == 0 || valiable2 % 2 == 0) {
  console.log('하나만 짝수')
} else {
  console.log('짝수가없음')
}