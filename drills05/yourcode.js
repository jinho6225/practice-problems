function populateRecords(obj){

  makeTable(obj);
  let newObj = {};
  var chargeTotal = 0;
  var cashTotal = 0;
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].type === 'charge') {
      chargeTotal = chargeTotal + Number(obj[i].amount)
    }
    if (obj[i].type === 'cash advance') {
      cashTotal = cashTotal + Number(obj[i].amount)
    }
    newObj['charge'] = chargeTotal;
    newObj['cash advance'] = cashTotal;
  }
  return newObj
}

function makeTable(objlist) {
  var area = $('#testArea')
  area.append(`<table></table>`)
  var table = $('table')
  for (let i = 0; i < table.length; i++) {
    $(table[i]).attr('class', 'class ' + [i])
  }

  table.html(`<tr class="th"></tr>`)
  $('.th').append(`<th class="type">${'TYPE'}</th>`)
  $('.th').append(`<th class="source">${'SOURCE'}</th>`)
  $('.th').append(`<th class="amount">${'AMOUNT'}</th>`)
  // for (let i in objlist[0]) {
  //   $('tr').append(`<th class=${[i]}>${[i]}</th>`)
  // }

  for (var obj of objlist) {
    const typeE = `<td>${obj.type}</td>`
    const sourceE = `<td>${obj.source}</td>`
    const amountE = `<td>${obj.amount}</td>`

    const rowElement = $('<tr>');
    rowElement.append([typeE, sourceE, amountE]);
    table.append(rowElement);
  }
  $('#testArea').append(table);
  $('#testArea *').addClass('testOutput');

  // for (let i = 0; i < obj.length; i++) {
  //   table.append(`<tr class=${[i]}>`)
  //   for (let key in obj[i]) {
  //     $(`.${[i]}`).append(`<td>${obj[i][key]}</td>`)
  //   }
  // }

  // $('#testArea *').addClass('testOuput')
  // $('tr').addClass('transactionRecord')

  // $('.transactionRecord > *').addClass('transactionRecord')
}


/*

  <tr>
    <td>USA</td>
    <td>Washington, D.C.</td>
    <td>309 million</td>
    <td>English</td>
  </tr>
  <tr>
    <td>Sweden</td>
    <td>Stockholm</td>
    <td>9 million</td>
    <td>Swedish</td>
  </tr>
</table>
*/
