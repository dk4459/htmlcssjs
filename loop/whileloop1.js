let boolean = true;
let number = 1;
let i = 1;
while(i <= 10){
  console.log(`현재 i의 값 ${i}`);
  i++
}
let run = true
while(run){
  let temp = parseInt(Math.random() *100);
  console.log(temp)
  if(temp == 48){
    console.log('나간다')
    run = false;
  }
}
console.log('eno of program.')