/*
# factor_of_sequence
Given the following function call:
- factor_of_sequence(2);
And the resulting output:
- [0,3,0,0,6,0,0,9,0,0,12];
Create a function definition that achieves the output with the given input.
<a href="http://jsbin.com/jifawu/edit?html,js,output" target="_blank">Solution Set</a>
*/

function factor_of_sequence(num) {
    let newArr = [];
    for (let i = 2; i < 13; i++) {
        if (i % 3 === 0) {
            newArr.push(i)
        } else {
            newArr.push(0)
        }
    }
    return newArr
}

factor_of_sequence(2);
//- [0,3,0,0,6,0,0,9,0,0,12];
