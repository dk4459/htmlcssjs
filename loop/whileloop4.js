//whileloop4.js
// member_id: "user01",member_name: "홍길동", point: 80
let members = [];

members[0] = {member_id: 'user01', member_name: '홍길동', point: 80};
members[1] = {member_id: 'user02', member_name: '신현욱', point: 90};
members[2] = {member_id: 'user03', member_name: '김민식', point: 85};

let max = 0
let maxId = '';
let max1 = 0
let max2 = 0
//일반 for문
for(let i = 0; i <members.length; i++){
  if(max < members[i].point){
    max = members[i].point
    maxId = members[i].member_name
  }
}
//for in문
for (prop in members){
  if(max1 < members[prop].point){
    max1 = members[prop].point
    console.log(`for in문  최대값 ${max1}`)
  }
}
//for of문
for (val of members){
  if(max2 < val.point){
    max2 = val.point;
    console.log(`for of문  최대값 ${max2}`)
  }
} 
console.log(`일반 for문 최대값 1등은 ${maxId} 점수는 ${max}점 입니다.`)
