/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

var rockPaperScissors = function(num) {
  let arr = ['R', 'S', 'P']
  let result = []
  let newArr = [];
  if (num === 1) {
    return arr
  } else if (num === 2) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        newArr.push(arr[i]+arr[j])
      }
    }
    return newArr
  } else if (num > 2) {
    for (let i = 0; i < arr.length; i++) {
      newArr = [];
      newArr = newArr.concat(rockPaperScissors(num-1))
      for (let j = 0; j < newArr.length; j++) {
        result.push(arr[i] + newArr[j])
      }
    }
    return result
  }
}

rockPaperScissors(3)

/*
                        RPS

          RPS           RPS           RPS

      RPS RPS RPS   RPS RPS RPS   RPS RPS RPS

work from small problems
*/
