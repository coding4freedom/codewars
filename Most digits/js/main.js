/*
Find the number with the most digits.

If two numbers in the argument array have the same number
 of digits, return the first one in the array.

 [5214, 2, 4458, 238, 874]
*/

function findLong(array){
    let arr = array.sort((a,b) => b - a)
    return arr[0]
}

console.log(findLong([5214, 2, 44587, 238, 874]))