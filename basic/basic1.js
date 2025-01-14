let myInfo = [{myName : '신현욱',
              tel : '010-2230-4402',
              adr : '대구수성구 지산동'
              },{myName :'해ㅐ',
                tel:'2424-2424-2424',
                adr:'etewt'
              },
                 ];

                 
                 
myInfo.push({myName:'good',adr:'gggggg'})

console.log(myInfo)
console.log ('제이름은'+myInfo[0].myName+'전화번호는'+myInfo[1].tel+'주소는'+myInfo[1].adr+'입니다');
console.log(`주소는 ${myInfo[2].adr}`)

let largeNumber = 10000000000000000000000000000n;
console.log(largeNumber);

console.log(typeof largeNumber);