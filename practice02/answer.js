/*
## Total Reverse

Build a function that takes in an array and reverses it

- Write a function that takes one parameter
	- Parameter 1 - An array of anything
- The function should output an array that is in reverse order from the input array
- Example:
	- `var myArray = ['hello', 45, 'Bob', 'what', '23'];`
	- `arrayReverse(myArray);`
	- Output - `['23', 'what', 'Bob', 45, 'hello']`
- Avoid using pre-built functions that do something similar
*/
function arrayReverse(array) {
    let newArr = [];
    for (let i = array.length-1; i >= 0; i--) {
        newArr.push(array[i])
    }
    return newArr;
}

var myArray = ['hello', 45, 'Bob', 'what', '23'];
arrayReverse(myArray)
