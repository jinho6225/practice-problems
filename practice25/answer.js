/*
Create a function, add_arrays(), that does the following:

#### Input: 2 arrays of equal size
- first_array, an array of numbers
- needle array, an array of numbers

#### Output:
- output array, which has all values from the first array added to the values from the second array

#### Example:
var first_array = [3,-5,15,4];
var second_array = [3,18,-5,-4]


output = add_arrays(first_array,second_array);
console.log(output); //outputs [6,13,10,0];

#### Put your solution in answer.js
*/

function add_arrays(arr1, arr2) {
  let obj = {};
  for (let i = 0; i < arr1.length; i++) {
    obj[i] = arr1[i]
  }
  for (let i = 0; i < arr2.length; i++) {
    if (obj[i]) {
      obj[i] = obj[i] + arr2[i]
    }
  }
  let newArr = []
  for (let key in obj) {
    newArr.push(obj[key])
  }
  return newArr
}

var first_array = [3, -5, 15, 4];
var second_array = [3, 18, -5, -4]
var output = add_arrays(first_array, second_array);
console.log(output); //outputs [6,13,10,0];
