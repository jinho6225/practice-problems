/*
# math_sequence
Given the following function call:
- math_sequence(2);
And the resulting output:
- [4, 6, 8, 10, 12, 14, 16, 18, 20, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5];
Another sample:
- math_sequence(5);
Resulting output:
- [10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42];
Create a function definition that achieves the output with the given input.
<a href="https://jsbin.com/hirunic/edit?js,console" target="_blank">Solution Set</a>
*/

function math_sequence(num) {
    var output_array = [];
    for (var i = num * 2; i < num + 38; i += 2) {
        if (i > num * 10) {
            var o = i / 4;
        } else {
            o = i;
        }
        output_array.push(o);
    }
    return output_array;
}

math_sequence(2);
//-[4, 6, 8, 10, 12, 14, 16, 18, 20, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5];
math_sequence(5);
//-[10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42];
