//function1.js
let numAry1 = [10, 20, 30];
let numAry2 = [40, 50, 60];
let numAry3 = [70, 80, 90];

let sum = 0;

allSum(numAry1)

function allSum(array) {
  for (let prop in array) {
    sum += array[prop];
  }
  console.log('배열의 '+'합계: ' + sum);
}