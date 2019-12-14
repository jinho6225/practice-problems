

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


function tableA(objList) {

}
