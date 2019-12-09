function countOccurences(array, word){
  let count = 0;
  array.forEach((x) => {
    if (x === word) {
      count++
    }
  })
  return count
}

function wordLengths(array){
  let newArr = [];
  array.forEach((x) => {
    newArr.push(x.length)
  })
  return newArr
}

function getMinMaxMean(array){
  let obj = {};
  var min = array[0]
  var max = array[0]
  let total = 0;
  array.forEach((x) => {
    total = total + x
    if (x < min) {
      min = x
    }
    obj['min'] = min
    if (x > max) {
      max = x
    }
    obj['max'] = max
  })
  obj['mean'] = total / array.length
  return obj
}
  // let obj = {};
  // var min = array[0]
  // array.forEach((x) => {
  //   if (x < min) {
  //     min = x
  //   }
  //   obj['min'] = min
  // })
  // var max = array[0]
  // array.forEach((x) => {
  //   if (x > max) {
  //     max = x
  //   }
  //   obj['max'] = max
  // })
  // let total = 0;
  // array.forEach((x) => {
  //   total = total + x
  // })
  // obj['mean'] = total / array.length
  // return obj

function findMode(array) {
  let obj = {}
  for (let i = 0; i < array.length; i++) {
    if (!obj[array[i]]) {
      obj[array[i]] = 1
    } else {
      obj[array[i]]++
    }ß
    let newArr = [];
    for (let key in obj) {
      newArr.push([key, obj[key]])
    }
    var max = newArr[0]
    for (let i = 1; i < newArr.length; i++) {
      if (newArr[i][1] > max[1]) {
        max = newArr[i]
      }
    }
    // console.log(max[0])
  }
  return max[0]
}
