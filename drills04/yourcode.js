// function changeElements(ele){
//   var a = document.querySelectorAll(ele);
//   for (var i = 0; i < a.length; i++) {
//     if (a[i].textContent === 'one') {
//       a[i].innerHTML = '1'
//     } else if (a[i].textContent === 'two') {
//        a[i].innerHTML = '2'
//     } else if (a[i].textContent === 'three') {
//        a[i].innerHTML = '3'
//     } else if (a[i].textContent === 'four') {
//        a[i].innerHTML = '4'
//     } else if (a[i].textContent === 'five') {
//        a[i].innerHTML = '5'
//     } else if (a[i].textContent === 'six') {
//        a[i].innerHTML = '6'
//     } else if (a[i].textContent === 'seven') {
//        a[i].innerHTML = '7'
//     } else if (a[i].textContent === 'eight') {
//        a[i].innerHTML = '8'
//     } else if (a[i].textContent === 'nine') {
//        a[i].innerHTML = '9'
//     }
//   }
// }
function changeElements(ele){
  var b = $(ele)
  for (let i = 0; i < b.length; i++) {
    if (b[i].textContent === 'one') {
      b[i].innerHTML = '1'
    } else if (b[i].textContent === 'two') {
      b[i].innerHTML = '2';
    } else if (b[i].textContent === 'three') {
      b[i].innerHTML = '3';
    } else if (b[i].textContent === 'four') {
      b[i].innerHTML = '4';
    } else if (b[i].textContent === 'five') {
      b[i].innerHTML = '5';
    } else if (b[i].textContent === 'six') {
      b[i].innerHTML = '6';
    } else if (b[i].textContent === 'seven') {
      b[i].innerHTML = '7';
    } else if (b[i].textContent === 'eight') {
      b[i].innerHTML = '8';
    } else if (b[i].textContent === 'nine') {
      b[i].innerHTML = '9';
    }
  }
}


function appendTextToElement(ele, string){
  var b = $(ele)
  for (let i = 0; i < b.length; i++) {
    b[i].append(string)
  }
}

function addClass(targetStr, sourceStr){
  var b = $(targetStr)
  if (b.length !== 0) {
      b.addClass(sourceStr)
  }
  return b.length;
}

function removeElements(ele){
  var b = $(ele)
  for (let i = 0; i < b.length; i++) {
    b[i].remove()
  }
}
