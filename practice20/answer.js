/*
## randomize array

Create a function, randomize_list(), that takes an array and ranzomizes the order, without resorting to the use of any pre-existing array methods.

#### Input:
- input_array: an array of anything

#### Output:
- output_array, the original array, randomly arranged

#### Example:
<pre>
var input_array =
[5,3,2,5,1]</pre>

output = randomize_list(input_array);
console.log(output); //outputs
<pre>[3,1,5,5,2]</pre>
console.log(randomize_list(input_array)); //outputs
<pre>[1,3,5,2,5]</pre>

#### Put your solution in answer.js

- hint: Math.random() will give you a random fractional number between 0 and 1
- hint: .pop() will allow you to take numbers off your source array as you pick them randomly
- hint: Using pop will directly affect the length of the array
*/

function randomize_list(arr) {
  let newArr = arr.slice(0)
  let i = 0
  while (newArr.length > i) {
    var randomNum = Math.floor(Math.random() * newArr.length)
    var storage = newArr[i]
    newArr[i] = newArr[randomNum]
    newArr[randomNum] = storage
    i++
  }
  return newArr
}

var input_array =
  [5, 3, 2, 5, 1]

output = randomize_list(input_array);
console.log(output); //outputs //[3,1,5,5,2]
console.log(randomize_list(input_array)); //outputs//[1,3,5,2,5]
