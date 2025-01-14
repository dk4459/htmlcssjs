let valiable1 = Math.floor(Math.random() * 100) + 1;
let valiable2 = Math.floor(Math.random() * 100) + 1;
let valiable3 = Math.floor(Math.random() * 100) + 1;
valiable1=1;
valiable2=1;
valiable3=1;
console.log(valiable1)
console.log(valiable2)
console.log(valiable3)
if (valiable1 > valiable2 && valiable1 > valiable3) {

  console.log('valiable1이 제일큰수입니다')

} else if (valiable2 > valiable1 && valiable2 > valiable3) {

  console.log('valiable2가 제일큰수입니다.')

} else if (valiable3 > valiable2 && valiable3 > valiable1) {

  console.log('valiable3가 제일 큰수입니다.')

}else if (valiable1==valiable2&&valiable2==valiable3){
  console.log('세수의 값이 같습니다')
}else if (valiable1==valiable2){
  if(valiable2>valiable3){
    console.log('valiable1와 valiable2가 제일 큰수입니다.')
  }
}else if (valiable1==valiable3){
  if(valiable1>valiable2){
    console.log('valiable1와 valiable3가 제일 큰수입니다.')
  }
}else if (valiable2==valiable3){
  if(valiable2>valiable1){
    console.log('valiable2 valiable3 제일 큰수입니다.')
  }
}
