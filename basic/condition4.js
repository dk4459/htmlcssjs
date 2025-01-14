//condition4.js

const obj = {
  name: "홍길동",
  age : 20,
  showName: function(){
    console.log(obj.name);
  }
}
obj.showName();

// 1 ~ 10 사이의 임의수 출력
console.log(Math.floor(Math.random()*10)+1);
let num1 = Math.floor(Math.random()*10)+1;
let num2 = Math.floor(Math.random()*10)+1;

let sumEven = 0;
let subOdd =0;

if(num1 %2 ==0  && num2 %2 == 0){
  sumEven += num1;
  sumEven += num2;
}
else if(num1 %2 ==0 || num2 %2 == 0){
  if(num1 %2 == 0){
    sumEven += num1;
    subOdd += num2; 
  }else if (num2 %2 == 0){
    sumEven += num2
    subOdd += num1;
  }
  
}else{
  subOdd += num1
  subOdd += num2
}
console.log(" num1는 "+num1+" num2는 "+num2+' 짝수값은 '+sumEven+' 홀수값은 '+subOdd)