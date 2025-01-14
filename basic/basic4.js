//278 시간 => 1?일 몇시간
let hour = prompt('시간을 입력하세요');
let day = hour/24;
console.log(`${hour}의 날짜는 ${parseInt(day)}일 ${hour % 24}시간입니다.`)
//1234 분 => ?일 ?시간 ?분
let obj = prompt('몇분을 입력하세요')
let day1 = parseInt(obj/60/24)
let hour1 = parseInt((obj-day1*1440)/60)

console.log(`${obj}분의 날짜는 ${day1}일 ${hour1}시간 ${obj-(day1*1440)-(hour1*60)}분입니다.`)