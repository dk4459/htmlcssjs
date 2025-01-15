let sum = 0
for (i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    sum += i
    console.log(`i의 값은 ${i} `)
  }
}
console.log(`총합은 ${sum}입니다.`)
document.write('<h1>가로 구구단</h1>')
document.write('<table border="1">')
document.write('<tbody>');
for (i = 2; i <= 9; i++) {
  document.write('<tr>');
  for (z = 1; z <= 9; z++) {
    if( z % 2 == 0){
      document.write(`<td style="background-color:yellow"> ${i} X ${z} = ${i*z} </td>`);
    }else if (z %2 == 1){
      document.write(`<td style="background-color:gray"> ${i} X ${z} = ${i*z} </td>`);
    }
  }
  document.write('</tr>');
}
document.write('</tbody>');
document.write('</table>');


document.write('<h1>세로 구구단</h1>')
document.write('<table border="1">')
document.write('<tbody>');
for (i = 1; i <= 9; i++) {
  document.write('<tr>');
  for (z = 2; z <= 9; z++) {
    document.write(`<td> ${z} X ${i} = ${i*z} </td>`);
  }
  document.write('</tr>');
}
document.write('</tbody>');
document.write('</table>');