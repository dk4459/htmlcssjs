//입력받은 숫자  => 2의배수인지, 3의배수인지 
//6 =>2와 3의 배수입니다.
let valiable = parseInt(prompt('수를 입력하세요'))
console.log(valiable)
if (valiable == 0 || isNaN(valiable)) {
  console.log('정상적인 값을 입력하세요')
} else {
  if (valiable % 2 == 0 && valiable % 3 == 0) {
    console.log('2의 배수 또는 3의 배수입니다.')
  } else if (valiable % 3 == 0) {
    console.log('3의배수입니다.');
  } else if (valiable % 2 == 0) {
    console.log('2의배수입니다.')
  } else {
    console.log('2또는 3의배수가 아닙니다.')
  }
}

