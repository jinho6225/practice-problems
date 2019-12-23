/*
## Numeric Spirals

Build a function that takes one parameter and prints out the Fibonacci sequence based on the input parameter.

- Write a function that takes one parameter
	- Parameter 1 - A number
- The function should output the Fibonacci sequence to the number of spaces set by parameter 1 starting from zero.
- Example:
	- `fibSequence(12);`
	- Output - `0 1 1 2 3 5 8 13 21 34 55 89`
- If you are unfamiliar with the Fibonacci sequence <a href="https://www.google.com" target="_blank">Click Here</a>
*/
function fibSequence(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    if (i - 1 < 0 || i - 1 === 0) {
      arr.push(i)
    } else {
      arr.push((arr[i-1] + arr[i-2]))
    }
  }
  return arr.join(' ')
}
