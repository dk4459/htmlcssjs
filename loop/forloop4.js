
let scores = [];

for (i=0; i<10; i++){
  let random = Math.floor(Math.random()*51)+50
  scores[i]=random
}
let sum = 0;
let max = 0;
for (i=0; i<scores.length; i++){
  sum += scores[i]
  if(scores[i] > max){
    max = scores[i];
  }
}
console.log(scores)
console.log(`이반의 평균점수는 ${sum / scores.length} 입니다.`)
console.log(`최고점수는 ${max}점입니다.`)