//function3.js
// 매개변수 2개

function getAverage(num1 = 0,num2 =0){
   let sum = 0, avg = 0;
   sum = num1 + num2;
   avg = sum / 2;

   return avg; //호출한 영역으로 avg값을 반환
}

let avg1 = getAverage(10,30);
let avg2 = getAverage(30,50);
let result = getAverage(avg1,avg2);
document.write(avg1+'</br>');
document.write(avg2+'</br>');
document.write(`평균은 ${result}입니다.`);