//finction2.js
let numAray1=[10,20,30];
let numAray2=[23,11,45,30];
let numAray3=[];
for (i=0;i<5;i++){
  numAray3[i]= parseInt(Math.random()*50);
} 

let max = 0;

function getMax(numAray){
    for (val of numAray){
      if(max < val){
        max = val;
      }
    }
    return max;
}

for (i=1; i<=3; i++){
  document.write(`<b>numAray${i}의 최고값: </b> `)
  document.write(getMax(eval('numAray'+i)));//문자열을 변수로 변환
  document.write('</br>')
}
