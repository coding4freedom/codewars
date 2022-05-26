
/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

*/

function pos(arr){
    let result = arr.reduce((a, b) => {
        return Math.sign(b) === 1 ? a + b: a + 0;
    },0)
    return result;
}

let nums = [1,-4,7,12];

console.log(pos(nums));