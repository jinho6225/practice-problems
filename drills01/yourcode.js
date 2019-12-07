
function sumArray(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total = total + array[i]
  }
  return total
}

function fitWithinVal(array, number) {
  let newArr = []
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > number) {
      continue;
    }
    if (total+array[i] > number) {
      continue;
    }
    total = total + array[i]
    newArr.push(array[i])
  }
  return newArr
}

function getAllNamesShorterThan(array, num){
  let newArr = []
  // array.forEach(function(x) {
  //   if (x.length < num) {
  //     newArr.push(x)
  //   }
  // })
  array.forEach((x) => {
    if (x.length < num) {
      newArr.push(x)
    }
  })
  return newArr
}

function makeLabel(data){
  let a = data[0]
  return `${a.greeting} ${a.givenName} ${a.familyName}
  ${a.homeaddress.streetNumber} ${a.homeaddress.streetName}
  ${a.homeaddress.city}, ${a.homeaddress.state} ${a.homeaddress.zip}`
}
