/*
# numeric_toggles
Given the following function call:
- numeric_toggles(2);
And the resulting output:
- [4, 6, -9, -12, 16, 20, -25, -30];
Create a function definition that achieves the output with the given input.
<a href="http://jsbin.com/kaqona/edit?html,js,output" target="_blank">Solution Set</a>
*/

function numeric_toggles(number) {
    let newArr = [];
    for (let i = number; i < number + 4; i++) {
        if (i % 2 === 0) {
            i = i * 1;
            var num = i * i;
            newArr.push(num, num + i)
        } else {
            var num = i * i * -1
            newArr.push(num, num - i)
        }
    }
    return newArr;
}

numeric_toggles(2);
//-[4, 6, -9, -12, 16, 20, -25, -30] 2
//[-1, -2, 4, 6, -9, -12, 16, 20] 1
//[-9, -12, 16, 20, -25, -30, 36, 42] 3
//[16, 20, -25, -30, 36, 42, -49, -56] 4
