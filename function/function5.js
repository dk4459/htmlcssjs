//function5 메소드 
//this: object일때 object자신을 가리킴.
let obj = {
  name : '홍길동',
  birth : '1998-05-01',
  bloodType : 'O',
  showInfo : function(){
    console.log(`이름은 ${this.name}, 생일은 ${this.birth} 혈액형은 ${this.bloodType}입니다.`)
  },
  addNumber: function(num1=0,num2=0){
    return num1 + num2
  },
  calculateFnc: function(num1=0,num2=0,calFnc){
    return calFnc(num1,num2);
  }
}
obj.showInfo();
//alert(obj.addNumber(10,20));
let result = obj.calculateFnc(10,20,function(a,b){
  return a-b;
})
result = obj.calculateFnc(10,20,function(a,b){
  return a+b;
})
result = obj.calculateFnc(10,20,obj.addNumber)
console.log(`결과값은 ${result}입니다.`)
