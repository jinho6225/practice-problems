/*
## One to Multi

Build a function that sorts an array into a multidimensional array grouped by data type

- Write a function that takes one parameter
	- Parameter 1 - An array of anything
- The function should output a multidimensional array grouped by data type
- Example:
	- `var myArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];`
	- `groupArray(myArray);`
	- Output - `[['hello, 'goodbye', '25'], [34, 56, 12], [true, false, true]]`
*/

function groupArray(array) {
    let arr = [];
    let strArr = [];
    let numArr = [];
    let booleanArr = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof(array[i]) === 'string') {
            strArr.push(array[i])
        }
        if (typeof(array[i]) === 'number') {
            numArr.push(array[i])
        }
        if (typeof(array[i]) === 'boolean') {
            booleanArr.push(array[i])
        }
    }
    arr.push(strArr,numArr,booleanArr)
    return arr;
}

var myArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];
groupArray(myArray);
