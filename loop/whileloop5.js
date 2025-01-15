//whileloop5.js
let members = [];
members[0] = {
  member_id: 'user01',
  member_name: '홍길동',
  point: 80
};
members[1] = {
  member_id: 'user02',
  member_name: '신현욱',
  point: 90
};
members[2] = {
  member_id: 'user03',
  member_name: '김민식',
  point: 85
};

let run = true;
let cnt = 0;
while (run) {
  let searchName = prompt('찾을 친구의 이름을 입력하세요')
  for (let val of members) {
    if (val.member_name == searchName) {
      cnt = 0;
      alert(`${searchName}의 점수는 ${val.point}입니다.`)
      break;
    } else if (searchName == 'stop') {
      cnt=0;
      alert('프로그램을 종료합니다.')
      run = false;
      break;
    } else {
      cnt++
      if (cnt == members.length) {
        alert('찾는사람이없습니다.')
        break;
      }
    }
  }

}