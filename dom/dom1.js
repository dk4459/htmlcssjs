document.addEventListener('DOMContentLoaded', init)

function init() {
  document.forms[0].addEventListener('submit', function (e) {
    e.preventDefault(); // 기본 기능 차단.
    let memberId = document.querySelector('input[name=member_id]').value;
    let memberName = document.querySelector('input[name=member_name]').value;
    let point = document.querySelector('input[name=point]').value;
    if (memberId == null || memberId.length < 5 || memberId.length > 20) {
      alert('id를 5자이상 20자 이하로 생성해주세요')
      return;
    }
    let member = {
      memberId: memberId,
      memberName: memberName,
      point: point
    }
    let tr = makeTr(member);
    // let member = [memberId,memberName,point];
    // let tr = makeT1r(member)
    document.querySelector('#list').appendChild(tr);
    document.querySelector('input[name=member_id]').focus();

    
  }) //end of submit
  let checked = document.querySelector('thead input');
  checked.addEventListener('change', function () {
  let check =  document.querySelectorAll('tbody td input')
        check.forEach(function(item){
          item.checked =checked.checked
        })

    })

}

function makeT1r(member = []) {
  let tr = document.createElement('tr')
  for (let prop in member) {
    let td = document.createElement('td');
    td.innerText = member[prop]
    tr.appendChild(td);
  }
  return tr;
}

function makeTr(member) {
  let tr = document.createElement('tr')
  let input = document.createElement('input')
  input.setAttribute("type", "checkbox");
  let td = document.createElement('td');
  td.appendChild(input)
  tr.appendChild(td);
  for (let prop in member) {
    let td = document.createElement('td');
    td.innerText = member[prop]
    tr.appendChild(td);
  }
  td = document.createElement('td');
  let btn = document.createElement('button');
  btn.style.backgroundColor = 'yellow';
  btn.innerText = '삭제';
  td.appendChild(btn)
  tr.appendChild(td);
  btn.addEventListener('click', function () {
    tr.remove();
  })
  return tr;
} //end of makeTr().