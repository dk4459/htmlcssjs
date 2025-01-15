// whileloop2.js
// stop을 입력하면 반복문 종료
let max = 0;
let run = true;

while (run) {
  let inputValue = prompt('점수를 입력하세요');
  if (isNaN(inputValue)) {
    if (inputValue == 'stop') {
      console.log(`최고점수는 ${max}입니다.`);
      run = false;
    } else {
      alert('다시입력하세요')
    }
  } else if (parseInt(inputValue) > max) {
    console.log(inputValue)
    max = parseInt(inputValue);
  }
}