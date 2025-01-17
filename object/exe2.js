let numAry=[{name:'조카',age:10},
            {name:'삼촌',age:31},
            {name:'큰아버지',age:45},
            {name:'큰조카',age:14},
            {name:'나',age: 21}
];

let filAry = numAry.filter(function(item,idx,ary){
  if(item.name.indexOf('조카') != -1){
    console.log(item.name.indexOf('조카'))
    return true;
  }
});
console.log(filAry);

numAry.forEach((item,idx,ary)=>item.age>10 ? 
console.log(`10살보다 많은가족은 ${item.name}이고
나이는 ${item.age}살입니다.`):'');