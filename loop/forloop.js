//forloop1.js
let sum = 0;
for (let i = 1; i <= 10; i+=2) {
  if(i %2 ==1 ){
    sum += i;
    console.log(`${i}의 값`)
  }
}
console.log(sum);