// object2.js
// concat(배열요소 합)

let numAry1 = [10, 20];
let numAry2 = [30, 40];
let resultAry = numAry1.concat(numAry2);
console.log(resultAry);

console.log(resultAry.join('-').split('-'));
//조인은 배열을 문자열로 변경
//split은 문자열을 가지고 와서 배열로 변경
let result = resultAry.join('-').split('-');
result.push('60')
console.log(result)
result.unshift('60')
console.log(result)
result.pop();
console.log(result)
result.shift();
console.log(result);
console.log(result, result.indexOf('40'))
console.clear();
result = [{name : "홍길동"},{name :'김민수'},{name: '허성식'},{name: '박창식'}]

if(result.indexOf('김민수')!=-1) {
  let distance = result.indexOf('김민수');

  console.log('찾는이름이 존재합니다.');
}else{
  console.log('그런 이름 없습니다.');
}
console.log(result.at(1));

let index = result.findIndex(todo => result.name ==='홍길동')
console.log(index)
