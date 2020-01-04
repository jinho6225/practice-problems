/*
# permutations
Given the following function call:
- permutations('abc');
And the resulting output:
- ["abc", "acb", "bac", "bca", "cab", "cba"];
Create a function definition that achieves the output with the given input.
<a href="http://jsbin.com/xinoro/9/edit?html,js,output" target="_blank">Solution Set</a>
*/

// function permutations(str) {

//     function swap(x, y) {
//     var t = x;
//     x = y;
//     y = t;
//     return x+y;
//     }

//     let newArr = []
//     if (str.length === 1) {
//         newArr.push(str)
//     } else if (str.length === 2) {
//         var swapStr = swap(str[0], str[str.length-1])
//         newArr.push(str, swapStr)
//     } else if (str.length > 2) {
//         let arr = str.split('')
//         for (let i = 0; i < arr.length; i++) {
//         let restChar = str.substring(0,i) + str.substring(i+1)
//         var swapRestChar = swap(restChar[0], restChar[restChar.length-1])
//         newArr.push(arr[i]+restChar, arr[i]+swapRestChar)
//         }
//     }
//     return newArr
// }

permutations('abc');
// ["abc", "acb", "bac", "bca", "cab", "cba"];


function permutations(str) {
    function swap(x, y) {
    var t = x;
    x = y;
    y = t;
    return x+y;
    }

    let result = []
    let newArr = []
    if (str.length === 1) {
        newArr.push(str)
        return newArr
    } else if (str.length === 2) {
        var swapStr = swap(str[0], str[str.length-1])
        newArr.push(str, swapStr)
        return newArr;
    } else if (str.length > 2) {
        let arr = str.split('')
        for (let i = 0; i < arr.length; i++) {
            newArr = [];
            let restChar = str.substring(0,i) + str.substring(i+1)
            newArr = newArr.concat(permutations(restChar))
            for(let j = 0; j < newArr.length; j++) {
            result.push(arr[i]+newArr[j])
            }
        }
    }
    return result
}

permutations('abcd');
