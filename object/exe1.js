//연습1
let myFriends = [];
myFriends.push({name:"홍길동",escore:70,kscore : 78, gender:'Female'});
myFriends.push({name:"신현욱",escore:80,kscore : 88, gender:'Female'});
myFriends.push({name:"김민식",escore:90,kscore : 70, gender:'Male'});
myFriends.push({name:"석지욱",escore:95,kscore : 55, gender:'Female'});
let cnt= 0 ;
let sum = 0;
let avg = 0; 
//for each출력
myFriends.forEach(function(item,idx,ary){
  if(item.escore >=90){
    console.log(`이름: ${item.name}, 영어점수: ${item.escore}`)
  }
  if((item.escore+item.kscore)/2>=80){
    console.log(`이름: ${item.name}, 평균점수: ${item.escore}`)
  }
  if(item.gender == 'Female'){
    cnt++
    sum += item.escore;
  }
})
avg = Math.floor(sum /cnt)
console.log(`여자 영어 평균 점수는 ${avg }점입니다.`)
let underAvgAry  = myFriends.filter(function(item,idx,ary){
  if(avg >item.escore){
    return true
  }
})
underAvgAry.forEach(function(item,idx,ary){
console.log(`여자 평균 미만의 학생은 ${item.name}입니다.`);
})