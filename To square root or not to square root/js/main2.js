
/*

Write a method, that will get an integer array as parameter 
and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

Example
[4,3,9,7,2,1] -> [2,9,3,49,4,1]

*/
function squareOrRoot(array){
    let final = array.map(num => Number.isInteger(Math.sqrt(num))  ? Math.sqrt(num) : num * num )
    return final
}

console.log(squareOrRoot([4,3,9,7,2,1]))