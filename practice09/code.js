/*
## Fitting words

Build a function that takes in a string and an array of strings. The function should output an array of strings that contain the same letters as the single input string.

- Write a function that takes two parameters
	- Parameter 1 - A string
	- Parameter 2 - An array of strings
- The function should output all the words from the input array (parameter 2) that have the same letters as the first parameter.  IE 'cat' has 'c','a', and 't', and all words that have 'c','a', and 't' will be included.
- Example:
	- `var myArray = ['cat','caterpillar','whale','accurate','smile','cactus','cute'];`
	- `fittingWords('cat', myArray);`
	- Output - `['cat','caterpillar','accurate','cactus']`
  */

function fittingWords(str, array) {
  debugger;
  let newArr = [];
  var count = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (array[i].includes(str[j])) {
        count++
      } else {
        break;
      }
      if (count === str.length) {
        newArr.push(array[i])
        count = 0;
      }
    }
  }
  return newArr;
}

var myArray = ['cat', 'caterpillar', 'whale', 'accurate', 'smile', 'cactus', 'cute'];
fittingWords('cat', myArray);
