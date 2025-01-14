let season = prompt('해당 월을 입력하세요')

if(season >= 3 && season <=5){
    console.log('봄')
}else if(season >=6 && season <= 8){
    console.log('여름')
}else if(season >= 9 && season <= 10){
    console.log('가을')
}else if (season >=11 && season <= 12 || season >= 1 && season <=2){
    console.log('겨울')
}else{
    console.log('해당 월을 올바르게 기입하세요')
}