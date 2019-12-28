/*
Create a function, matrix_add(), that does the following:
#### Input:
- array1: a multi-dimensional array
- array2: a multi-dimensional array
#### Output:
- output: a multi-dimensional array
#### Example:
var array1 =
[[1,2,3],[3,4,5],[6,7,8]]
var array2 =
[[1,2,3],[1,2,3],[1,2,3]]
output = matrix_add(array1,array2);
console.log(output);
//outputs
[[2,4,6],[4,6,8],[7,9,11]]
#### Put your solution in answer.js
*/

function matrix_add(arr1, arr2) {
    let newArr = []
    if (arr1.length === arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            let array = [];
            if (arr1[i].length === arr2[i].length) {
                for (let j = 0; j < arr1[i].length; j++) {
                    var answer = arr1[i][j] + arr2[i][j]
                    array.push(answer)
                }
            }
            newArr.push(array)
        }
    }
    return newArr;
}


var array1 =
    [
        [1, 2, 3],
        [3, 4, 5],
        [6, 7, 8]
    ]
var array2 =
    [
        [1, 2, 3],
        [1, 2, 3],
        [1, 2, 3]
    ]
output = matrix_add(array1, array2);
console.log(output);
//outputs
// [
//     [2, 4, 6],
//     [4, 6, 8],
//     [7, 9, 11]
// ]
