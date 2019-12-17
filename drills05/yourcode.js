function populateRecords(obj){
  tableA(obj);
  let newObj = {};
  var totalCharge = 0;
  var totalCash = 0;
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].type === 'charge') {
      totalCharge = totalCharge + Number(obj[i].amount);
    }
    if (obj[i].type === 'cash advance') {
      totalCash = totalCash + Number(obj[i].amount);
    }
    newObj['charge'] = totalCharge;
    newObj['cash advance'] = totalCash;
  }
  return newObj
}

function tableA(objlist) {
  // get the reference for the body
  var base = $('#testArea')
  base.append(`<table></table>`)
  var tableArr = $('table');
  for (let i = 0; i < tableArr.length; i++) {
    $(tableArr[i]).attr('class', 'class '+[i])
  }
  tableArr.html(`<tr class="th"></tr>`)
    $('.th').append(`<th class="type">${'TYPE'}</th>`)
    $('.th').append(`<th class="source">${'SOURCE'}</th>`)
    $('.th').append(`<th class="amount">${'AMOUNT'}</th>`)

  for (var obj of objlist) {
    const typeE = `<td>${obj.type}</td>`
    const sourceE = `<td>${obj.source}</td>`
    const amountE = `<td>${obj.amount}</td>`

    const rowElement = $('<tr>');
    rowElement.append([typeE, sourceE, amountE]);
    tableArr.append(rowElement);
  }
  $('#testArea').append(tableArr);

  $('#testArea *').addClass('testOutput');

}
