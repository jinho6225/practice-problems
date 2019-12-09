function getPath(string){
  return string.split('/')
}

function getPathParts(urlString) {
  var url = new URL(urlString)
  //The URL() constructor returns a newly created URL object representing the URL defined by the parameters.
  //https://javascript.info/url
  //https://developer.mozilla.org/en-US/docs/Web/API/URL/URL
  let port = urlString.split('/')[2].split(':')[1]
  let obj = {};
  let pathArr = url.pathname.split('/')
  let filename = pathArr[pathArr.length - 1]
  let path = []
  for (let i = 1; i < pathArr.length - 1; i++) {
    path.push(pathArr[i])
  }
  path = path.join('/')
  obj['protocol'] = url.protocol.split(':')[0]
  obj['host'] = url.hostname
  obj['port'] = Number(port)
  obj['path'] = path
  obj['file'] = filename
  return obj
}

function correctCalcChecker(array) {
  return doMath(array)
}

function doMath(array) {
  let newArr = []
  for (let i = 0; i < array.length; i++) {
    let answer = eval((array[i].num1) + array[i].op + (array[i].num2))
    let result = eval(array[i].result)
    if (answer === result) {
      newArr.push(array[i])
    }
  }
  return newArr
}
