/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

*/

function pos(arr){
    return arr.reduce((a, b) => b > 0 ? b + a : a, 0)
}

console.log(pos([1,-4,7,12]))