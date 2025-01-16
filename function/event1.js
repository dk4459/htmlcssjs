//event1.js

let item = document.querySelector('button[name="add"]');
let minusItem = document.querySelector('button[name="minus"]');
let clearItem = document.querySelector('button[name="clear"]');
item.addEventListener('click',function(){
  let n1 = document.getElementById('num1').valueAsNumber;
  let n2 = document.getElementById('num2').valueAsNumber;
  document.querySelector('#result').valueAsNumber = n1 + n2;
})
minusItem.addEventListener('click',function(){
  let n1 = document.getElementById('num1').valueAsNumber;
  let n2 = document.getElementById('num2').valueAsNumber;
  document.querySelector('#result').valueAsNumber = n1 - n2;
})
clearItem.addEventListener('click',function(){
  document.getElementById('num1').value='';
  document.getElementById('num2').value='';
  document.querySelector('#result').value = '';
})
