/*
# skippy_numbers

Given the following function call:
- skippy_numbers(2);

And the resulting output:
-[2, 3, 5, 6, 8, 9, 11, 12];

Create a function definition that achieves the output with the given input.

< a href = "http://jsbin.com/vacogo/edit?html,js,output" target = "_blank" > Solution Set</a >
*/

function skippy_numbers(num) {
  let newArr = []
  for (let i = num; i < 12; i = i + 3) {
    newArr.push(i, i + 1)
  }
  return newArr
}

skippy_numbers(2);

//[2, 3, 5, 6, 8, 9, 11, 12];
