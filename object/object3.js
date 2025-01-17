//forEach
let numAry = [20, 13, 45, 62, 19];
let sum = 0;
let max = 0;
numAry.forEach(function(item,idx,ary){
  console.log(`item의 값은 ${item}`)
  if(max < item){
    max = item;
  }
});
console.log(`맥스값은 ${max}`);

//filter(function(item,idx,ary){}) 조건에 만족하는 새로운 배열 생성.
let filterAry = numAry.filter(function(item,idx,ary){
  if(item % 2 ==1){
    return true;
  }else{
    return false;
  }
});
console.log(filterAry);
