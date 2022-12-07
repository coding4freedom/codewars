/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
 [5, 5, -5, 0, 5, 5, 5, -5]
*/

function pos(arr){
    return arr
        .filter(p => {
            if(Math.sign(p) === 1){
                return pos
            }
        })
        .reduce((acc, curr) => acc + curr, 0)

}
console.log(pos([5, 5, -5, 0, 5, 5, 5, -5]))