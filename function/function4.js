//function4.js

let item = document.querySelector('button');
console.log(item);
item.addEventListener('click',function(){
    alert('마우스가 클릭됨')
})
item.addEventListener('mouseover',function(){
  item.className='btn btn-warning';
})
item.addEventListener('mouseout',function(){
  item.className='btn btn-primary';
})