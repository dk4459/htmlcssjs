let firstValue = parseInt(prompt('값을입력'))
let secondValue = parseInt(prompt('값을입력'))
firstValue += 5;
secondValue -=3;

console.log(`${firstValue}에서 ${secondValue}값을 뺀 값은 ${firstValue-secondValue}입니다.`);

//basic3
function my (){
  let xxx =[];
  xxx.push(prompt('입력하세요'));
  xxx.push(prompt('입력하세요'));
  xxx.push(prompt('입력하세요'));
  xxx.push(prompt('입력하세요'));
  xxx.push(prompt('입력하세요'));
  console.log(xxx);
  let result = 1;
  for(i=0;i<xxx.length;i++){
      result *=  parseInt(xxx[i])
  }
  console.log(result)

}