/*
# math computation sequences

Given the following function call:
- math_sequences(2,5);

And the resulting output:
- ["2+5=7", "2-5=-3", "2*5=10", "2/5=0.4"];

Create a function definition that achieves the output with the given input.

<a href="http://jsbin.com/zebete/edit?html,js,console" target="_blank">Solution Set</a>
*/

function math_sequences(num1, num2) {
  let arr = [];
  var a = `${num1}+${num2}=${num1+num2}`
  var b = `${num1}-${num2}=${num1-num2}`
  var c = `${num1}*${num2}=${num1*num2}`
  var d = `${num1}/${num2}=${num1/num2}`
  arr.push(a,b,c,d)
  return arr
}

var output = math_sequences(2, 5)
console.log(output)
