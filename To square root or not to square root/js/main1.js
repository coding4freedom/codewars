/*

Write a method, that will get an integer array as parameter 
and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

Example
[4,3,9,7,2,1] -> [2,9,3,49,4,1]

*/

function squareOrSquareRoot(array) {

    let newArr = array.map(n => {
        return Math.sqrt(n) % 1 === 0 ? Math.sqrt(n) : Math.pow(n, 2)
    })
    return newArr;
}
console.log(squareOrSquareRoot([4,3,9,7,2,1]))