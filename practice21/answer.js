/*
Bipolar Loop

Create a single loop that simultaneously counts up on one variable, while counting down on another.  The only code inside the for loop should be a console.log that lists both variables.

#### Put your solution in answer.js

- hint: You can have multiple initiators, conditionals, and incrementers/decrementers in the same <em>for</em> loop.  For example:

```
for(<initiator 1>,<initiator 2>; <check 1>,<check2>; <increment 1>,<increment 2>){
	//do work
}
```
*/

var i = 0;
var j = 0;
while (i < 10) {
  console.log('i = ', i, 'j = ', j)
  i++
  j--
}
// for (var i = 0, j = 0; i < 10; i++ , j--) {
//   console.log("i: " + i, "j: " + j);
// }
