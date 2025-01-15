//whileloop3.js
// object 타입.

let myInfo = [{
  name:'홍길동',
  age : 20,
  height : 170,
  weight : 65
}]; //object

for (i=1; i<3; i++){
  myInfo[i]={ name :'신현욱'+i,
              age : i,
              height : 170+i,
              weight : 60+i
            }
    console.log(myInfo[i].weight);
}
for (let prop in myInfo){
  console.log(`for in${myInfo[prop].name}`);
}
for (let prop of myInfo){
  console.log(`for of${prop.name}`);
}
let myFriend1 = {
  name: "홍길동",
  phone: "010-3233-4234",
  address: '대구 중구 100번지'
}
let myFriend2 = {
  name: "김민수",
  phone: "010-3333-4444",
  address: '대구 중구 200번지'
}
let myFriend3 = {
  name: "박석민",
  phone: "010-5555-6666",
  address: '대구 중구 300번지'
}

let friends = [myFriend1,myFriend2,myFriend3]
console.log(friends[0].name);
console.log(friends[1].phone);
console.log(friends[2].address);
for(let i = 0; i <friends.length; i++){
  console.log(`일반 for문 (이름: ${friends[i].name} 연락처: ${friends[i].phone})`);
}
for (prop in friends){
  console.log(`for in 문 (이름: ${friends[prop].name} 연락처: ${friends[prop].phone}`);
}
for (val of friends){
  console.log(`for of 문 (이름: ${val.name} 주소: ${val.address})`)
} 